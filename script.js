let myToDos = [{
    text: "vynést koš",
    completion: false

},
{
    text: "dojít nakoupit",
    completion: false

},
{
    text: "uklidit",
    completion: true

},
{
    text: "tv",
    completion: true

},
{
    text: "uvařit",
    completion: false

}]

let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion != true
})

console.log(toDoLeft.length);

// let paragraphMust = document.createElement("p")
// paragraphMust.textContent = `Must DO yet: ${toDoLeft.length} do´s.`
// document.querySelector("#count-do").appendChild(paragraphMust)

myToDos.forEach(function(oneToDo){
    let paragraph = document.createElement("p")
    paragraph.textContent = oneToDo.text
    document.querySelector("#count-all").appendChild(paragraph)

})

// undone-done

myToDos.forEach(function(oneToDo){
    let paragraph = document.createElement("p")
    if(oneToDo.completion === false){
        paragraph.textContent = "Undone: " + oneToDo.text
    }
    
    document.querySelector("#count-undone-done").appendChild(paragraph)

})

myToDos.forEach(function(oneToDo){
    let paragraph = document.createElement("p")
    if(oneToDo.completion === true){
        paragraph.textContent = "Done: " + oneToDo.text
    }
    document.querySelector("#count-undone-done").appendChild(paragraph)
})



document.querySelector("a").addEventListener("click", function(e){
    console.log("kliknuto");
})

let inputText = document.querySelector("#input-text")

inputText.addEventListener("input", function(e){
    console.log(e.target.value);
})


// saving input

const filters = {
    searchingText:""
}

// filtr function

let renderToDos = function(ourToDos,weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })

    document.querySelector("#count-do").innerHTML = ""
    
    let leftResults = ourResults.filter(function(one){
        return one.completion === false
    })

    console.log(leftResults.length);
    let paragraph = document.querySelector("p")
    paragraph.textContent = `Still left ${leftResults.length} do´s`
    document.querySelector("#count-do").appendChild(paragraph)

    document.querySelector("#count-all").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#count-all").appendChild(paragraph)
    })
}

// filtr

inputText.addEventListener("input", function(e){
    
    filters.searchingText = e.target.value
    console.log(filters);

    renderToDos(myToDos, filters)
})











