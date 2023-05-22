/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'normal': '#A4ACAF',
                'fight': '#D56723',
                'flying': '#3DC7EF',
                'poison': '#B97FC9',
                'ground': '#F7DE3F',
                'rock': '#A38C21',
                'bug': '#729F3F',
                'ghost': '#7B62A3',
                'steel': '#9EB7B8',
                'fire': '#FD7D24',
                'water': '#4592C4',
                'grass': '#9BCC50',
                'electric': '#EED535',
                'psychic': '#F366B9',
                'ice': '#51C4E7',
                'water': '#4592C4',
                'dragon': '#F16E57',
                'dark': '#707070',
                'fairy': '#FDB9E9',
            },
        },
        fontFamily: {
            'poppins' : ['Poppins'],
        },
    },
    plugins: [],
    safelist: [{
        pattern: /(bg|text|border)-(normal|fight|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy)/
    }]
}

