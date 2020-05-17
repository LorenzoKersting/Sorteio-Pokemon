const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const getElement = document.querySelector.bind(document);
const searchButton = getElement('.search-button'),
      container = document.getElementById('poke'),
	  estrela = document.querySelectorAll(".fa");

var IDpokemon, 
    pokemon, 
    carta, 
	i,
	classe; 
	
i=0;
async function requestPokeInfo(url, name) {
  await fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}


searchButton.addEventListener('click', event => {
  event.preventDefault();
  	for(i=0; i<3; i++){
	 classe= i + 1;		
	 IDpokemon = Math.floor(Math.random()* 964) + 1;
	 Requisita(IDpokemon, classe);
  	}
});


async function Requisita(IDpokemon, classe){
	await requestPokeInfo(baseUrl, IDpokemon);
	
	criaCarta(classe);
	
}
async function criaCarta (classe) {
  
	if(classe == 1){
		
	n1 = document.getElementById("n1");
	f1 = document.getElementById("f1");
	p1 = document.getElementById("p1");		
	
	n1.innerHTML = pokemon.name;
	f1.setAttribute("src",pokemon.sprites.front_default);
	p1.innerHTML = pokemon.weight;
	
	} else if(classe == 2){
			
		n2 = document.getElementById("n2");
		f2 = document.getElementById("f2");
		p2 = document.getElementById("p2");
		
		n2.innerHTML = pokemon.name;
		f2.setAttribute("src",pokemon.sprites.front_default);
		p2.innerHTML = pokemon.weight;
		
	} else if(classe == 3){
			
		n3 = document.getElementById("n3");
		f3 = document.getElementById("f3");
		p3 = document.getElementById("p3");
		
		n3.innerHTML = pokemon.name;
		f3.setAttribute("src",pokemon.sprites.front_default);
		p3.innerHTML = pokemon.weight;
		
	}
	
	
}

estrela.forEach(element => element.addEventListener('click', event => {
  event.preventDefault();
  
  favorito(element);
}));

function favorito(element, reset = false){

		let favorito = "fa fa-star";
        let not = 'fa fa-star-o'

        if (!reset){
            if (element.className === 'fa fa-star-o'){
                element.setAttribute("class", favorito);
            }
            else{
                element.setAttribute("class", not);
            }
        }
        else{
            element.setAttribute("class", not);
        }
	
}

