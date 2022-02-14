var  tbody = document.querySelector("tbody");

tbody.addEventListener("dblclick", function(evento){
    evento.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        evento.target.parentNode.remove()
    }, 500)
    
});