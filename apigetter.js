document.getElementById("name-submit").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name-input").value;
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + name;
    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    });
});