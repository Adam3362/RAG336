function fun(e)

{ 
var container = document.getElementById('body');
var val = e.value;
container.setAttribute("style", "filter: brightness("+val+"%);");
}