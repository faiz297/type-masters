let input = document.getElementById("text-area");
let count = document.getElementById("count");

input.addEventListener('input', ()=>{
    count.innerHTML = input.value.length;
})
