let signUps = localStorage.getItem("signUpPeoples")
if (!signUps) { list = {} } 
else list = JSON.parse(signUps)

const form = document.getElementById("club");

form.addEventListener("submit", function (e){
    e.preventDefault();
    if(confirm("You want to save your work?")){
        const data = new FormData(form);
        const infoObj = Object.fromEntries(data.entries());

        list[infoObj.studentid] = {};
        for(let info in obj){
            if(info != "studentid"){
                list[infoObj.studentid][info] = infoObj[info];
            }
        }

        signUps = JSON.stringify(list);
        localStorage.setItem("list", signUps);
        form.submit();
    }
});

form.addEventListener("reset", function (e){ 
    if(!confirm("You want to clear your data?")){
        e.preventDefault();
    }
});

function showDesc(){
    let club = document.getElementById("clubSelect").value;
    let clubDesc;
    switch(club){
        case "artcl":
            clubDesc = "The arts & crafts club is a place where you can let your creativity flow.";
            break;
        case "dancecl":
            clubDesc = "The dance club is a place where you can show off your dance skills.";
            break;
        case "singcl":
            clubDesc = "The choir club is a place where you can realize your true singing talent.";
            break;
        case "musiccl":
            clubDesc = "The music club is a place where you can learn how to use instruments, or show people your talent in music.";
            break;
        case "theatrecl":
            clubDesc = "The theatre club is a place where you can reveal your true dramatic side.";
            break;
        case "ultfrisbeecl":
            clubDesc = "The ultimate frisbee club is a place where you can exercise your frisbee skill or participate in tournaments.";
            break;
        default:
            clubDesc = "Club Description Here"
    }
    document.getElementById("clubText").innerHTML = "Club Description: " + clubDesc
  
}

function changeColor(dInput){
    dInput.style.backgroundColor = "#dec1db";
}

function resetColor(dInput){
    dInput.style.backgroundColor = "white";
}

