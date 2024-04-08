const pokeContainer = document.querySelector("#pokeContainer");
const pokeCount = 1000;
const colors = {
    fire: '#FDDFDF',
    grass: '#6bd14f',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#87007d',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const mainTypes = Object.keys(colors);
const pokemonsPerPage = 20; // Define o número de Pokémon por página
let currentPage = 1; // Inicializa a página atual como 1

const fetchAllPokemons = async () => {
    for (let id = 1; id <= pokeCount; id++) {
        await getPokemons(id);
    }
};

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    createPokemonCard(data);
};

const createPokemonCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add("pokes");

    const name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, '0');
    const type = poke.types.map(type => type.type.name).find(type => mainTypes.includes(type));
    const color = colors[type];

    card.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="imagens">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>
    <div class="infos">
        <span class="number">#${id}</span>
        <h3 class="nome">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    card.innerHTML = pokemonInnerHTML;

    pokeContainer.appendChild(card);
};

const searchPokemon = () => {
    const searchTerm = document.querySelector("#searchInput").value.toLowerCase();
    const pokemonId = parseInt(searchTerm);
    if (!isNaN(pokemonId) && pokemonId >= 1 && pokemonId <= pokeCount) {
        getPokemons(pokemonId);
    } else {
        alert("Pokemon não encontrado!");
    }
};

// Atualizar a página inicialmente
fetchAllPokemons();
