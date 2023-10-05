$("#btn").click(function (){
    let value=$("input").val();
    let li=`<li class="list-group-item">${value}</li>`;
    $('#task').append(li);
    $("img").attr('src',value);
});