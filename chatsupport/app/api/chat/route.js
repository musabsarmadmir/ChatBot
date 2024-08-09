// import Groq from "groq-sdk";

// const groq = new Groq({ 
//   apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, 
//   dangerouslyAllowBrowser: true 
// });

// export async function sendToLlama(messagesLength, clientMessage, addMessageReference) {
//   const chatCompletion = await getGroqChatCompletion(clientMessage);
//   console.log(chatCompletion.choices[0]?.message?.content || "");
//   addMessageReference(messagesLength + 1, chatCompletion.choices[0]?.message?.content || "", true);
// }

// export async function getGroqChatCompletion(data) {
//   console.log(data);
//   return groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: data,
//       },
//     ],
//     model: "llama3-8b-8192",
//   });
// }


import Groq from "groq-sdk";

const groq = new Groq({ apiKey: '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' , dangerouslyAllowBrowser: true});


export async function sendToLlama(messagesLength,clientMessage,addMessageReference) {

  const chatCompletion = await getGroqChatCompletion(clientMessage);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  addMessageReference(messagesLength+1,chatCompletion.choices[0]?.message?.content || "",true);
}

export async function getGroqChatCompletion(data) {
  console.log(data);
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: data
      },
    ],
    model: "llama3-8b-8192",
  });
}
