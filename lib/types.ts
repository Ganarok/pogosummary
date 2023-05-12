/**
 * Commonly shared Interfaces & Enums 
 */

import common from 'public/locales/en/common.json'

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

export interface IGetLanguage {
    locale: string
}

export interface Resources {
    common: typeof common
    // as many as files you have
}