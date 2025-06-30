import React, { createContext, useState, useEffect } from "react";
import main from "../config/gemini.js";


export const Context = createContext();

export function ContextProvider({ children }) {
  const [input, setinput] = useState("");
  const [recentprompts, setRecentprompts] = useState("");
  const [previousprompts, setPreviousprompts] = useState([]);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultdata, setresultdata] = useState("");


  const newchat = () =>{
    setLoading(false);
    setOutput(false);
  }

  const onSent = async (prompt) => {

    setresultdata("")
    setLoading(true);
    setOutput(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    let response;
    if(prompt !== undefined){
      response = await main(prompt,apiKey);
      setRecentprompts(prompt);
    }
    else{
      setPreviousprompts(prev=>[...prev,input])
      setRecentprompts(input)
      response = await main(input,apiKey)
    }

    //setRecentprompts(input);
    //setPreviousprompts(prev => [...prev,input])
    //const response = await main(input);
   
    setresultdata(response);
    setLoading(false);
    setinput("");
  };

  const contextValue = {
    previousprompts,
    setPreviousprompts,
    onSent,
    setRecentprompts,
    recentprompts,
    output,
    loading,
    resultdata,
    input,
    setinput,
    newchat
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
