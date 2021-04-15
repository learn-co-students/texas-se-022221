document.addEventListener("DOMContentLoaded", () => {
  const p1 = new Person("Donovan", 28);
  const p2 = new Person("Raul", 28);
  p1.greeting()
  // debugger
  p1.render();
  p2.render();
  console.log(p1);
  console.log(p1.isOld());
});

class Person { 
    constructor(name, age){
        this.name = name
        this.age = age 
    }
    greeting = () => {
        return `Hi I'm ${this.name}, I am ${this.age} years old`
    }
    
   render = () => {
        //find container
        const peepContainer = document.querySelector(".people-menu");
        //create li
        const li = document.createElement("li");
        //change innertext of li to name
        li.innerText = this.name;
    
        li.addEventListener("click", () => {
          this.displayInfo();
        });
        //append to container
        peepContainer.append(li);
      };
    
      displayInfo = () => {
        //grab from existing index.html element
        const peepInfo = document.querySelector(".peep-info");
        //create elements here
        const h2 = document.createElement("h2");
        h2.innerText = this.name;
        const age = document.createElement("h5");
        age.innerText = "Age: " + this.age;
        const bio = document.createElement("p");
        bio.innerText = this.greeting() + " and " + this.isOld();
    
        const peepCard = document.createElement("div");
        peepCard.append(h2, age, bio);
    
        peepInfo.append(peepCard);
    
        //append
      };
}

Person.prototype.isOld = function () {
  if (this.age < 100) {
    return "I'm still kicking";
  }
};