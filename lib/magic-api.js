const URL = 'https://api.scryfall.com';

export async function getMagicData() {
    let queryString = window.location.hash.slice(1);
    const url = `${URL}${queryString}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.response === 'false'){
        return {
            Search: [],
            totalResults: 0
        };
    }

    return data;
}