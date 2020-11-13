// Input Elements
let foodInput = document.querySelector("#food-text");
let locationInput = document.querySelector("#location-input");

// button 
let recipeButton = document.getElementById("food-submit");

// EDAMAM Recipe Search API keys & app ID


// Add event listener to the submit button that calls the API request when clicked.
recipeButton.addEventListener("click", () => {
    console.log("food entered")
    recipeRequest();
});


// RECIPE SEARCH FUNCTION

// async function to fetch recipe data from API
async function recipeRequest () {
    let apiKeyRecipe = "b08658ce75bfb8d1774340639ff3f1bf";
    let edamamAppID = "89dfaab6";

    let response = await fetch(``);
    console.log(response)
}

// function to display the name, image, ingredients and 