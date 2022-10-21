document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name-input").value.toLowerCase();
    if(name === "shaymin" || name === "shaymin land") {name = "shaymin-land"};
    if(name === "shaymin sky") {name = "shaymin-sky"};
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + name;
    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        document.getElementById("pokemon-sprite").src=json.sprites.front_default;
        document.getElementById("pokemon-number").innerHTML="<h2>PokeDex Number: " + json.id + "</h2>";
        let pokemonTypes = "<h2>Type";
        if(json.types.length > 1) { pokemonTypes += "s"; }
        pokemonTypes += ": "
        for(let i = 0; i < json.types.length; i++) {
            if(i !== 0) { pokemonTypes += ", "; }
            pokemonTypes += json.types[i].type.name;
        }
        document.getElementById("pokemon-type").innerHTML=pokemonTypes;
        document.getElementById("pokemon-height").innerHTML="<h2>Height: " + json.height + "</h2>";
        document.getElementById("pokemon-weight").innerHTML="<h2>Weight: " + json.weight + "</h2>";
    })
    .catch(function(error) {
        document.getElementById("pokemon-number").innerHTML="<h2>PokeDex Number: Not Found</h2>";
        document.getElementById("pokemon-sprite").src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Question_mk_grey.png";
        document.getElementById("pokemon-type").innerHTML="<h2>Type(s): Not Found</h2>";
        document.getElementById("pokemon-height").innerHTML="<h2>Height: Not Found</h2>";
        document.getElementById("pokemon-weight").innerHTML="<h2>Weight: Not Found</h2>";
    });
});