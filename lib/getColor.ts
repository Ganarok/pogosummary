const getColorByType = (type: string) => {
    switch (type) {
        case 'POKEMON_TYPE_FAIRY':
            return 'fairy'

        case 'POKEMON_TYPE_NORMAL':
            return 'normal'
        
        case 'POKEMON_TYPE_FIGHTING':
            return 'fight'
        
        case 'POKEMON_TYPE_FLYING':
            return 'flying'

        case 'POKEMON_TYPE_POISON':
            return 'poison'
        
        case 'POKEMON_TYPE_GROUND':
            return 'ground'
            
        case 'POKEMON_TYPE_ROCK':
            return 'rock'

        case 'POKEMON_TYPE_BUG':
            return 'bug'

        case 'POKEMON_TYPE_GHOST':
            return 'ghost'

        case 'POKEMON_TYPE_STEEL':
            return 'steel'

        case 'POKEMON_TYPE_FIRE':
            return 'fire'

        case 'POKEMON_TYPE_WATER':
            return 'water'

        case 'POKEMON_TYPE_GRASS':
            return 'grass'

        case 'POKEMON_TYPE_ELECTRIC':
            return 'electric'

        case 'POKEMON_TYPE_PSYCHIC':
            return 'psychic'

        case 'POKEMON_TYPE_ICE':
            return 'ice'

        case 'POKEMON_TYPE_DRAGON':
            return 'dragon'

        case 'POKEMON_TYPE_DARK':
            return 'dark'

        default:
            return 'bug'
    }
}

const isLightOrDarkType = (type: string) => {
    const lightTypes = [
        'normal',
        'fairy',
    ]

    return lightTypes.includes(type)
}

export {
    getColorByType,
    isLightOrDarkType
}