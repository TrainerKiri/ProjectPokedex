const pokeContainer = document.querySelector("#pokeContainer");

const pokeCount = 151

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
}

const mainTypes = Object.keys(colors);


const fetchPokemons = async() => {
    for(let i = 1;  i <= pokeCount; i++ ){
        await getPokemons(i)
    }
    
}




const getPokemons = async(id) => {
    const url = 'https:/pokeapi.co/api/v2/pokemon/$(id)';
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
   
    
}

fetchPokemons();
