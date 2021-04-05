console.log("Hello Lords of The Strings")

let arr = ["Shane", "Jose", "Brian", "Andre", "Robert"]

console.log(arr)

// // I want an h1 wiith its innerText set to "Hello, Lords of the Strings"

// // assigned a variable called h1 to us 'creating ' an element 
// let h1 = document.createElement("h1")
// // console.log(h1)
// // assign THAT element's innerText to "Hello, Lords of the Strings"
// h1.innerText = "Hello, Lords of the Strings"
// console.log(h1)
// // we want to find 'where' to add this element
// // let htmlbody = document.querySelector("body")
// // add this element
// document.body.append(h1)

// we NOW have an h1 tag in index.html
let cohortName = document.querySelector("#cohort-name")
cohortName.innerText = "Hello, Lords of the Strings"
// iterating through an array 
arr.forEach(function(name){
    //for every name I want an li tag with a students name
    let li = document.createElement("li")
    li.innerText = name
    let ul = document.querySelector(".student-list")
    ul.append(li)

})
