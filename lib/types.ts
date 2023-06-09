/**
 * Commonly shared Interfaces & Enums 
 */

import common from 'public/locales/fr/common.json'

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

export interface AssetForm {
    image: string,
    isFemale: boolean,
    shinyImage: string,
    form?: string,
    costume?: string, 
}

export interface CinematicMove {
    combat: { buffs?: string[], energy: number, power: number, turns: number },
    durationMs: number,
    energy: number,
    id: string,
    names: { [key: string]: string },
    power: number,
    type: { type: string, names: Record<string, string> },
}

export interface Evolution {
    candies: number,
    formId: string,
    id: string,
    item?: string,
    quests: [],
}

export interface MegaEvolution {
    assets: { image: string, shinyImage: string },
    id: string,
    names: { [key: string]: string },
    primaryType: { type: string, names: Record<string, string> },
    secondaryType?: { type: string, names: Record<string, string> },
    stats: { attack: number, defense: number, stamina: number },
}

export interface QuickMove {
    combat: { buffs?: string[], energy: number, power: number, turns: number },
    durationMs: number,
    energy: number,
    id: string,
    names: { [key: string]: string },
    power: number,
    type: { type: string, names: Record<string, string> },
}

export interface IPokemonIDResponse {
    assetForms: [AssetForm],
    assets: { image: string, shinyImage: string },
    cinematicMoves: Record<string, CinematicMove>,
    dexNr: number,
    eliteCinematicMoves: [],
    eliteQuickMoves: [],
    evolutions: [Evolution],
    formId: string,
    generation: number,
    hasMegaEvolution: boolean,
    id: string,
    megaEvolutions: Record<string, MegaEvolution>,
    names: { [key: string]: string },
    pokemonClass?: string,
    primaryType: { type: string, names: Record<string, string> },
    secondaryType?: { type: string, names: Record<string, string> },
    quickMoves: Record<string, QuickMove>,
    regionForms: Record<string, IPokemonIDResponse>,
    stats: { attack: number, defense: number, stamina: number },
}