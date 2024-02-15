const pokeContainer = document.querySelector("#pokeContainer");
const pokeCount = 151;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDEO',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const mainTypes = Object.keys(colors);
const pokemonsPerPage = 20; // Define o número de Pokémon por página
let currentPage = 1; // Inicializa a página atual como 1

const paginatePokemons = (page) => {
    const startIndex = (page - 1) * pokemonsPerPage;
    const endIndex = startIndex + pokemonsPerPage;
    return Array.from({ length: pokemonsPerPage }, (_, index) => startIndex + index + 1)
           .filter(id => id <= pokeCount);
};

const fetchPokemons = async(page) => {
    const pokemonIds = paginatePokemons(page);
    for (const id of pokemonIds) {
        await getPokemons(id);
    }
};

const getPokemons = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    createPokemonCard(data);
};

const createPokemonCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add("pokes");

    const name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
