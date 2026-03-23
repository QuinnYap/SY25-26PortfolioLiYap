        //function to get value of rating from the radio buttons
        function ratingValue(){ 
            let starvalues = document.getElementsByName("movieStars") //loops through group of radio buttons
            for(let i=0; i < starvalues.length; i++){
                if(starvalues[i].checked){
                    return starvalues[i].value; //gets value of the radio button if checked
                }
            }
        }

        let movList = JSON.parse(localStorage.getItem("allMovies")) ? JSON.parse(localStorage.getItem("allMovies")) : [];
        //get existing movie list from localStorage OR start with empty array which will hold the movies

        displayMovs(movList);
        //display the list of movies

        const form = document.querySelector("form"); //get all information from the form
        form.addEventListener("submit", function(event){
            event.preventDefault(); //prevents page refresh

            if(confirm("Do you want to add this movie?")){ //confirm window with user first before submitting, if yes, execute code
                localStorage.setItem("newRating", ratingValue());
                let newMovie = {
                    //assign all info about the movie received from the form to key:value pairs within the object
                    title: movtitle.value,
                    year: movyear.value,
                    genre: genre.value,
                    rate: localStorage.getItem("newRating")
                }
                let hasEqual = false; //set value for if new movie is equal to any other movie
                for(let movdex = 0; movdex < movList.length; movdex++){ //loop through movie list
                    if(newMovie.title == movList[movdex].title){
                        hasEqual = true;
                        totalRatings = (Number(newMovie.rate) + Number(localStorage.getItem("rating")));
                        aveRating = totalRatings/2;
                        newRating = aveRating.toFixed(0);
                        movList[movdex] = {
                            title: movList[movdex].title,
                            year: newMovie.year,
                            genre: newMovie.genre,
                            rate: newMovie.rate
                        }
                        movList[movdex].rate = newRating;
                        console.log(localStorage.getItem("rating"))
                        console.log(totalRatings);
                        localStorage.setItem("rating", newRating);
                    }
                }
                if(!hasEqual){
                    movList.push(newMovie);
                    localStorage.setItem("rating", newMovie.rate);
                }


                localStorage.setItem("allMovies", JSON.stringify(movList) /*stringify array to be stored in localStorage*/); 
                displayMovs(movList); //update the movie list
            }
        });

        function displayMovs(listLaMovs){
            let displayMov = ""; //initial string to be innerHTML-ed to the list
            for(let movie=0; movie < listLaMovs.length; movie++){
                let dispRate = "";
                if(listLaMovs[movie].rate == 0){
                    disprate = "No rating found";
                }
                else{
                    for(let rating = 1; rating <= listLaMovs[movie].rate; rating++){
                        dispRate += "⭐";
                    }
                }

                displayMov += `<p class="movies">${listLaMovs[movie].title} 
                (${listLaMovs[movie].year}) - ${listLaMovs[movie].genre}, Rating: <span class="starry">${dispRate}</span> 
                <button onclick="deleteMov(${movie})">Delete</button></p>`
            }
            movielist.innerHTML = displayMov;
        }

        function deleteMov(index){
            movList.splice(index, 1);
            localStorage.setItem("allMovies", JSON.stringify(movList));
            displayMovs(movList);
        }

        // localStorage.clear(); to clear test cases from this computer