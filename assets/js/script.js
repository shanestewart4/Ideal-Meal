// Input Elements
let foodInput = document.querySelector("#food-text");

// button 
let submitButton = document.getElementById("food-submit");

// Add event listener to the submit button that calls the API request when clicked. => is the same as typing out 'function'
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button clicked!");
    let foodInputValue = foodInput.value.trim();
    
    // call recipe API request function
    recipeRequest(foodInputValue);

    // call GIPHY API request function
    gifRequest(foodInputValue);
});


// RECIPE/GIPHY API REQUESTS

// async function to fetch recipe data from API
async function recipeRequest (searchValue) {
    // EDAMAM Recipe Search API keys & app ID
    let apiKey = "b08658ce75bfb8d1774340639ff3f1bf";
    let appID = "89dfaab6";

    let response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${apiKey}&q=${searchValue}`);

    let data = await response.json();
    useRecipeData(data);
}

// async function to fetch GIPHY data from API
async function gifRequest (searchValue) {
    // gif Search API keys & no app ID for GIPHY
    let apiKey = "FFKbyXAcQ3WPzd8HCjOD3u73pkQlS3vp";

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}`);

    let data = await response.json();
    useGifData(data);
}

// RECIPE/GIPHY DISPLAY FUNCTIONS

// function to display the recipe card -- button directs the user to recipe URL.
function useRecipeData(recipeData) {
    // return the 4th item in the array for the search query
    document.querySelector("#recipe-append").innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${recipeData.hits[4].recipe.image}" class="card-img-top" alt="recipe image">
            <div class="card-body">
                <h5 class="card-title">${recipeData.hits[4].recipe.label}</h5>
                <p class="card-text">Ingredients:</p>
                <p class="card-text ingredients">${recipeData.hits[4].recipe.ingredientLines}</p>
                <br>
                <p class="card-text">Click the button below and check out the recipe!</p>
                <a href="${recipeData.hits[4].recipe.url}" class="recipe-btn btn-primary">Get Cooking!</a>
            </div>
        </div>
    `
}

// function to display the gif.
function useGifData(gifData) {
    //let useGifData = localStorage.getItem("gifData");
    document.querySelector("#gif-append").innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${gifData.data[0].images.downsized_large.url}" class="card-img-top" alt="food gif">
        </div>
    `
}