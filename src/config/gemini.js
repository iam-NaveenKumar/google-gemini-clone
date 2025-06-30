async function main(prompt,apikey) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemma-3n-e2b-it:generateContent?key=${apikey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const result =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  console.log(result);
  return result;
}

export default main;
