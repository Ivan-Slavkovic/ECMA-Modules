"use strict";

// const array = [1, 2, 3];
// const idx = 2;

// function getIndex(arr, idx) {
//   arr.map((element, index) => {
//     if (index === idx) {
//       console.log(element);
//     }
//   });
// }
// getIndex(array, 2);
// // console.log(getIndex);

// const array = [
//   { id: 1, name: "Suad" },
//   { id: 2, name: "Ivan" },
//   { id: 3, name: "Dzejlan" },
//   { id: 4, name: "Belma" },
//   { id: 5, name: "Izo" },
//   { id: 6, name: "Arijan" },
//   { id: 7, name: "Emin" },
//   { id: 8, name: "Daris" },
// ];

// // const niz = array.map((array) => {
// //   return array.name;
// // });

// // console.log(niz);
// function getElement(array, index) {
//   const result = array.slice(index, index + 1);
//   return result[0];
// }

// console.log(getElement(array, 2))

const noviArray = [1, 2, 3, 4, 5, 6];

Array.prototype.MyMap = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index, this));
  }
  return newArray;
};

const b = noviArray.MyMap((element) => element * 2);

console.log(b);
