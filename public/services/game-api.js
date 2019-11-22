const URL = '/api';

const token = localStorage.getItem('TOKEN');
if (!token && !(location.pathname === '/' || location.pathname === '/auth.html')) {
    
    window.location = '/auth.html';
}

async function fetchWithError(url, options) {
    if (token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        throw data.error;
    }
}

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export function signIn(creds) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    });
}

export function updateCharacter(character) {
    const url = `${URL}/character/:${character.userId}`;
    return fetchWithError(url, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(character),
    });
}

export function getUser(email){
    const url = `${URL}/users/${email}`;
    return fetchWithError(url);
}

export function addCharacter(character){
    const myToken = localStorage.getItem('TOKEN');
    const url = `${URL}/character`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': myToken
        },
        body: JSON.stringify(character)
    });
}

export function getCharacterById(id){
    const url = `${URL}/character/${id}`;
    return fetchWithError(url);
}

export function getItems() {  
    const url = `${URL}/items`;
    return fetchWithError(url);
}

export function getMonsters() {  
    const url = `${URL}/monsters`;
    return fetchWithError(url);
}