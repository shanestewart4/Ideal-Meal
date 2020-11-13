// Input Elements
let foodInput = document.querySelector("#food-text");

// button 
let submitButton = document.getElementById("food-submit");

// ask about why this is node value...



// Add event listener to the submit button that calls the API request when clicked.
submitButton.addEventListener("click", () => {
    //event.preventDefault();
    console.log("food entered")
    let foodInputValue = foodInput.value.trim();
    // set input value to localStorage to retrieve within function. this helps with scope I believe.
    localStorage.setItem("inputValue", foodInputValue);

    // call recipe API
    recipeRequest(foodInputValue);
    
    // call GIPHY API
    gifRequest(foodInputValue);
    
    console.log(foodInputValue);
});


// RECIPE SEARCH FUNCTION

// async function to fetch recipe data from API
async function recipeRequest () {
    // EDAMAM Recipe Search API keys & app ID
    let apiKey = "b08658ce75bfb8d1774340639ff3f1bf";
    let appID = "89dfaab6";
    let searchValue = localStorage.getItem("inputValue");

    let response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${apiKey}&q=${searchValue}`);
    //console.log(response);

    let data = await response.json();
    //console.log(data);
}


// async function to fetch GIPHY data from API
async function gifRequest () {
    // gif Search API keys & app ID
    let apiKey = "FFKbyXAcQ3WPzd8HCjOD3u73pkQlS3vp";
    //let appID = "idealmeal";
    let searchValue = localStorage.getItem("inputValue");

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}`);
    console.log(response);

    let data = await response.json();
    console.log(data);
}

// function to display the name, image, ingredients and 


