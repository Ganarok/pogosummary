const getLanguage = (locale: string | undefined): string => {
    switch (locale) {
        case "en":
            return "English"
        
        case "fr":
            return "French"

        default:
            return "French"
    }
}

export default getLanguage