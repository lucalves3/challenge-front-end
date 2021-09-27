export async function getApiPokemon() {
  const apiPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
  const apiToJson = await apiPoke.json();
  return apiToJson
}