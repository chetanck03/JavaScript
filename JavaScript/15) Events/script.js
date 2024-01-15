let button = document.getElementById("btn")

// 1. Events : dblclick (doubleClick) ,mouseleave , click
button.addEventListener("click",()=>{
    // alert("I was Clicked. Yayy!!")
    document.querySelector(".box").innerHTML="<b>Yayy u are clicked</b> Enjoy ur click!"
})

// 2. For Right Click
button.addEventListener("contextmenu",()=>{
    alert("Right click. Yayy!!")
})

// 3. Event showing when we enter any key

button.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
})