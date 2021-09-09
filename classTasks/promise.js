"use strict";

import { countLetters, getQoute, myPromise } from "./test.js";


//Promises

// myPromise
// .then((value)=>{
//     console.log('value',value)
// })
// .catch((error)=>{console.log('error',error)})

// try {
//     const result = await myPromise;
//     console.log('try',result)

// } catch (error) {
//     console.log('error', error)
// }

// fetch("https://api.quotable.io/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(`${data.content} —${data.author}`);
//   }).catch((error) => console.log(error));

//   try {
//       const data = await getQoute()
//       console.log(`${data.content} —${data.author}`);
//   } catch (error) {
//       console.log(error)
//   }

fetch('https://quotable.io/quotes?page=1')
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        const formatedResult = data.results.map((element) => {
            return { tags: element.tags, content: element.content }
        })
    }).catch(() => { })