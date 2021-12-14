var button = document.querySelector("#count")
var reset = document.querySelector("#reset")
var rs = 0
var counter = 0
button.addEventListener("click",function(e){
    e.preventDefault()
    counter ++
    document.querySelector("#counter").innerHTML = counter
})
reset.addEventListener("click" , function(e){
    e.preventDefault()
    
    location.reload(); 
})