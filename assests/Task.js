// document.querySelector(".h1Class").addEventListener("click",function(){
//     document.querySelector(".h1Class").remove()
// });

document.querySelector("button").addEventListener("click",function(){
    document.querySelector(".h1Class").innerText=document.querySelector('input').value;
});