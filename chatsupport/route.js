// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const systemPrompt = "Welcome to HeadstarterAI! I'm here to help you navigate our AI-powered interview platform. What can I assist you with today? Whether it's a question about setting up your interview or tips for success, I'm here for you!"

//     "Hi there! You've reached the HeadstarterAI Support Bot. How can I help you enhance your interview preparation or answer any questions about our services for software engineering roles?"

//     "Greetings from HeadstarterAI! If you have any questions about our AI-driven interview process or need assistance with your software engineering job preparation, just let me know how I can help!"

//     "Hello! I'm your friendly HeadstarterAI Assistant. Whether you need help with interview scheduling, technical support, or just some advice on how to ace your next SWE job interview, I'm here to assist. What can I do for you today?"


// export async function POST(request) {
//     const openai = new OpenAI();
//     const data = await request.json();


//     const completion = await openai.chat.completions.create({
//         messages: [
//             {
//             role: 'system', content: systemPrompt
//             },
//             ...data,
//         ],
//         model: 'gpt-4o-mini',
//         stream : true
//     })



//     const stream = new ReadableStream({
//         async start(controller) {
//             const encoder = new TextEncoder();
//             try{
//                 for await (const chunk of completion){
//                     const content = chunk.choices[0]?.delta?.content
//                     if (content){
//                         const text = encoder.encode(content)
//                         controller.enqueue(text)
//                     }
//                 } 
//             } catch (error){
//                 controller.error(error)
//             } finally {
//                 controller.close() 
//             }
//         },
//     })




//     return new NextResponse(stream)
// }