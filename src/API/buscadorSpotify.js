export const BuscarSpotify = async (terms, type) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ebfd990919msh9640831b26dbc60p19ccbbjsn0027ab8339fa',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${terms}&type=${type}&offset=0&limit=10&numberOfTopResults=5`;
        const response = await fetch(url, options);
        const result = await response.json();
        return result[type].items;
    } catch (error) {
        console.error(error);
    }

}

