const form = document.getElementById("club");

//localstorage saving

form.addEventListener("reset", function(e){
    if(!confirm("Are you sure you want to clear your data?")){
        e.preventDefault();
    }
});

function changeColor(dInput){
    dInput.style.backgroundColor = "#dec1db";
}

function resetColor(dInput){
    dInput.style.backgroundColor = "white";
}