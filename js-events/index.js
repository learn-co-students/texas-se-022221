document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello World")

    let studentElementArray = document.querySelectorAll(".card")
    
    console.log(studentElementArray)

    // let robert = studentElementArray[0] 
    // robert.addEventListener("click", function(e){
    //     console.log("THIS IS VARIABLE E", e.target.innerText)
    //     let name = e.target.innerText
    //     console.log(`${name}'s been clicked`)
    // })
    studentElementArray.forEach(function(studentDOMElement){
        studentDOMElement.addEventListener("click", function(e){
                // console.log("THIS IS VARIABLE E", e.target.innerText)
                let name = e.target.innerText
                console.log(`${name}'s been clicked`)
            })
    })

    // logical steps for adding submit to a form 
    //  we gotta find where it is 
    let form = document.getElementById("new-student")
    console.log(form)
    // we need a listener for it 
    form.addEventListener("submit", function(e){
        // default nature of form is to reload AFTER submitted
        e.preventDefault()
        
        let newName = e.target[0].value
        let newDescription = e.target[1].value
        let newImage = e.target[2].value
        console.log(newName, newDescription, newImage)

        // <div class="card">
        //     <img src="https://ca.slack-edge.com/T02MD9XTF-U01HJD8B8G2-6902e5764a53-512" alt="Avatar" style="width: 100%" />
        //     <div class="card-container">
        //       <h4><b>Robert</b></h4>
        //       <p>Flatrion Student</p>
        //     </div>
        //   </div>

        // currently we are pulling data from our event object on  submit 

        // we need to create the DOMElements necessary to display a  new student card
        let div = document.createElement("div")
        div.className = "card"
        let img = document.createElement("img")
        img.src = newImage
        img.style = "width: 100%"
        let h4 = document.createElement("h4")
        h4.innerHTML = `<b>${newName}</b>`
        let p = document.createElement("p")
        p.innerText = newDescription
        let innerDiv = document.createElement("div")
        innerDiv.className = "card-container"

        div.append(img, innerDiv)
        innerDiv.append(h4, p)

        console.log(div)
        // after that, we append
        // grab div with class column 
        let column = document.querySelector(".column")
        //  append your div 
        column.append(div)
        

    })


})