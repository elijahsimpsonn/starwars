const urls = [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
]
export const fetchData = async () => {
    try {
        const response = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );
        return response
    } catch (error) {
        console.log('Error', error)
    }
}