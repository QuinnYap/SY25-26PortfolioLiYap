const LIST = "signUps";
function checkNotes(){
    const people = localStorage.getItem(LIST);
    if(people){
        return JSON.parse(people);
    }
    else{
        return {};
    }
}
listSignUps = checkNotes();

const form = document.getElementById("club");

form.addEventListener("submit", function (e){
    e.preventDefault();
    if(confirm("You want to save your work?")){
        const data = new FormData(form);

        const obj=Object.fromEntries(data.entries());
        listSignUps[obj.studentid] = {};
        for(let key in obj){
            if(key != "studentid"){
                listSignUps[obj.studentid][key] = obj[key];
            }
        }

        console.log(listSignUps);
        stringList = localStorage.setItem(LIST, JSON.stringify(listSignUps));
        form.submit();
    }
});

form.addEventListener("reset", function (e){ 
    if(!confirm("You want to clear your data?")){
        e.preventDefault();
    }
});

function showDesc(){ //shows the description of a club when the user selects it
    let club = document.getElementById("clubSelect").value;
    let clubDesc;
    switch(club){
        case "Art Club":
            clubDesc = "The arts & crafts club is a place where you can let your creativity flow.";
            break;
        case "Dance Club":
            clubDesc = "The dance club is a place where you can show off your dance skills.";
            break;
        case "Choir Club":
            clubDesc = "The choir club is a place where you can realize your true singing talent.";
            break;
        case "Music Club":
            clubDesc = "The music club is a place where you can learn how to use instruments, or show people your talent in music.";
            break;
        case "Theatre Club":
            clubDesc = "The theatre club is a place where you can reveal your true dramatic side.";
            break;
        case "Ultimate Frisbee Club":
            clubDesc = "The ultimate frisbee club is a place where you can exercise your frisbee skill or participate in tournaments.";
            break;
        default:
            clubDesc = "Club Description Here"
    }
    clubText.innerHTML = "Club Description: " + clubDesc
  
}

function changeColor(dInput){
    dInput.style.backgroundColor = "#dec1db";
}

function resetColor(dInput){
    dInput.style.backgroundColor = "white";
}