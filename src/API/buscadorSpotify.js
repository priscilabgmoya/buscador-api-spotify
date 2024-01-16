export const BuscarSpotify = async (terms, type) => {
    debugger
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44cad1e672msh5834f4a0ed0fd7dp1ec1e3jsn5e586ff9f9ec',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    if(terms== undefined || type == undefined) return ("ingrese la palabra y el tipo de busqueda"); 
    try {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${terms}&type=${type}&offset=0&limit=10&numberOfTopResults=5`;
        const response = await fetch(url, options);
        const result = await response.json();
    
        console.log(result);
        return result[type].items;
    } catch (error) {
        console.error(error); 
    }

}

