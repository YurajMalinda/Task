let btn=document.querySelector("#btn");
let ol=document.querySelector("#list");

btn.addEventListener("click",function (){
    let typInp=document.querySelector("#txt").value;
    let li=document.createElement("li");
    li.setAttribute("class","list-group-item");
    li.textContent=typInp;
    ol.append(li);
});