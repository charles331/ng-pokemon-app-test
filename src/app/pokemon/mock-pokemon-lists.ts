import { Pokemon } from './pokemon';
import { Timestamp } from 'firebase/firestore';
  
export const POKEMONS: Pokemon[] = [
    {
        customID: "1",
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ["Plante", "Poison"],
        created: Timestamp.now(),
        bordercolor: "red"
    },
    {
        customID: "2",
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ["Feu"],
        created: Timestamp.now(),
        bordercolor: "green"
    },
    {
        customID: "3",
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ["Eau"],
        created: Timestamp.now(),
        bordercolor: "blue"
    },
    {
        customID: "4",
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        types: ["Insecte", "Poison"],
        created: Timestamp.now(),
        bordercolor: "yellow"
    },
    {
        customID: "5",
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        types: ["Normal", "Vol"],
        created: Timestamp.now()
    },
    {
        customID: "6",
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
        created: Timestamp.now()
    },
    {
        customID: "7",
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        types: ["Normal", "Vol"],
        created: Timestamp.now()
    },
    {
        customID: "8",
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        types: ["Poison"],
        created: Timestamp.now()
    },
    {
        customID: "9",
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electrik"],
        created: Timestamp.now()
    },
    {
        customID: "10",
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Normal"],
        created: Timestamp.now()
    },
    {
        customID: "11",
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        types: ["Fée"],
        created: Timestamp.now()
    },
    {
        customID: "12",
        id: 12,
        name: "Groupix",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Feu"],
        created: Timestamp.now()
    }
];