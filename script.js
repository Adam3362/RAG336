function fun(e)

{ 
var container = document.getElementById('body');
var val = e.value;
container.setAttribute("style", "filter: brightness("+val+"%);");
}

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
setTimeout( ()=>{

    splash.classList.add('display-none');
},2000)

})

