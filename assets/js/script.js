// Input Elements
let foodInput = document.querySelector("#food-text");

// button 
let submitButton = document.getElementById("food-submit");

// ask about why this is node value...
let foodInputValue = foodInput.value;


// Add event listener to the submit button that calls the API request when clicked.
submitButton.addEventListener("click", () => {
    console.log("food entered")
    recipeRequest();
    gifRequest();
});


// RECIPE SEARCH FUNCTION

// async function to fetch recipe data from API
async function recipeRequest () {
    // EDAMAM Recipe Search API keys & app ID
    let apiKey = "b08658ce75bfb8d1774340639ff3f1bf";
    let appID = "89dfaab6";

    let response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${apiKey}&q=${foodInputValue}`);
    console.log(response);

    let data = await response.json();
    console.log(data);
}


// async function to fetch restaurant meal data from API
async function gifRequest () {
    // gif Search API keys & app ID
    let apiKey = "FFKbyXAcQ3WPzd8HCjOD3u73pkQlS3vp";
    let appID = "idealmeal";

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?app_id=${appID}&app_key=${apiKey}&q=${foodInputValue}`);
    console.log(response);

    let data = await response.json();
    console.log(data);
}

// function to display the name, image, ingredients and 


