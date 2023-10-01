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

document.querySelector("#btn2").addEventListener('click',function(){
    var typeValue=document.querySelector("#url").value;
    var divContainer=document.querySelector("#img");

    divContainer.style.background=`url(${typeValue})`;
    divContainer.style.backgroundPosition='center';
    divContainer.style.backgroundSize='contain';
    divContainer.style.backgroundRepeat='no-repeat';
})