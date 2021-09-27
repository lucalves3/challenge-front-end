export async function getAllPokemons() {
  const apiPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900&offset=200')
  const returnApiPoke = await apiPoke.json();
  return returnApiPoke;
}

export async function getApiPokemon(namePokemon) {
  const apiPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
  const apiToJson = await apiPoke.json();
  return apiToJson
}