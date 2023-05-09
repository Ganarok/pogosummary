/**
 * Commonly shared Interfaces & Enums 
 */

export interface IPokemon {
    name: string
    id: number
}

export interface IPokemons {
    [key: string]: IPokemon
}

export interface PokemonProps {
    id: number,
    name: string,
    style: object
}
