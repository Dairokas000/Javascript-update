document.body.addEventListener("keydown", ChangeColor);

function ChangeColor(event){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white"
    }else if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "grey"
    }else{
        document.body.style.backgroundColor = "black" 
    }
}

function Newh2(event){
    var userinput = prompt("Is this game fireeee? (put yes or no lowercased)")
    console.log(userinput)
    if(userinput == "yes"){
        alert("Check bottom of page")
        var fire = document.createElement("h2");
        fire.textContent = "Yes sirrrr"
        fire.setAttribute("style", "color: gold")
        document.body.appendChild(fire)
    }else{
        alert("Check bottom of page")
        var cold = document.createElement("h5");
        cold.textContent = "OHHHHHHH"
        cold.setAttribute("style", "color: gold")
        document.body.appendChild(cold)
    }
}

var button2 = document.createElement("button")
button2.textContent = "HOME" 
button2.addEventListener("click", function(){
    var link = document.createElement("a")
    link.setAttribute("href", "/Users/DAIROKAS000/Desktop/web design/Project 2/index.html")
    link.textContent = "HOME LINK"
    document.body.insertBefore(link, button2)

});
document.body.appendChild(button2)

function LOUS(element){
    document.body.style.backgroundImage = "url('https://www.cnet.com/a/img/resize/3017a73708efc0f6209736cc1130c3b4213c4864/hub/2023/01/16/fc79c925-695c-4f4f-a50c-4f273686bf28/the-last-of-us-1.jpg?auto=webp&fit=crop&height=1293&width=2300')"
    alert("To change the background back to the oringal, refresh page")
}







