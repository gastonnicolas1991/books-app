export const mapDataToCharactersList = data => {
  return data.results?.map(character => ({
    name: character.name,
    location: character.location.name,
    origin: character.origin.name,
    species: character.species,
    status: character.status,
    statusActive: character.status === 'Alive',
    imageUrl: character.image,
  }));
};
