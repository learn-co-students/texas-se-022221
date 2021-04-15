// // document.addEventListener("DOMContentLoaded", () => {
// //   const p1 = new Person("Donovan", 28);
// //   const p2 = new Person("Raul", 28);
// //   // debugger
// //   p1.render();
// //   p2.render();
// //   console.log(p1);
// //   console.log(p1.isOld());
// // });

// // //named declared function
// // function logThis(aThing) {
// //   console.log(aThing);
// // }

// // // logThis('Hello')

// // //un-named function
// // logThis(function () {
// //   console.log("Hey I'm a function with no name");
// // });

// // function useCallback(callback) {
// //   callback();
// // }
// // useCallback(function () {
// //   console.log("Hey I'm a function with no name");
// // });

// // function hideThis(){
// //     let secret = "super secret please dont see me"
    
// //     function useSecret(){
// //         return secret
// //     }
// //     return useSecret()
// // }


// // // create the idea of a person
// function Person(name, age) {
//   // let obj = {}
//   // obj.name = name
//   // return obj
//   this.name = name;
//   this.age = age;

//   //creating a method
//   // function greeting(){
//   //     console.log(`Hi I'm ${this.name}, I am ${this.age} years old`)
//   // }
//   this.greeting = function () {
//     return `Hi I'm ${this.name}, I am ${this.age} years old`;
//   };

//   this.render = () => {
//     //find container
//     const peepContainer = document.querySelector(".people-menu");
//     //create li
//     const li = document.createElement("li");
//     //change innertext of li to name
//     li.innerText = this.name;

//     li.addEventListener("click", () => {
//       this.displayInfo();
//     });
//     //append to container
//     peepContainer.append(li);
//   };

//   this.displayInfo = () => {
//     //grab from existing index.html element
//     const peepInfo = document.querySelector(".peep-info");
//     //create elements here
//     const h2 = document.createElement("h2");
//     h2.innerText = this.name;
//     const age = document.createElement("h5");
//     age.innerText = "Age: " + this.age;
//     const bio = document.createElement("p");
//     bio.innerText = this.greeting() + " and " + this.isOld();

//     const peepCard = document.createElement("div");
//     peepCard.append(h2, age, bio);

//     peepInfo.append(peepCard);

//     //append
//   };
// }

// Person.prototype.isOld = function () {
//   if (this.age < 100) {
//     return "I'm still kicking";
//   }
// };

// // // class Person {
// // //     constructor(name){
// // //         this.name = name
// // //     }
// // // }
