// document.querySelector(".h1Class").addEventListener("click",function(){
//     document.querySelector(".h1Class").remove()
// });

// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector(".h1Class").innerText=document.querySelector('input').value;
// });

document.querySelector("input").addEventListener("keyup",function(){
    document.querySelector("h1").innerText=document.querySelector("input").value
});

document.querySelector("#btn1").addEventListener("click",function(){
    document.querySelector("h1").style.color="red";
});