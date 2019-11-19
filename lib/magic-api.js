const superagent = require('superagent');

export const getMagicResponse = async() => {
    const magicData = await superagent.get(`https://api.scryfall.com/api/cards`)
        .set('Authorization', `Bearer ${process.env.client_secret}`);
    const actualMagicData = JSON.parse(magicData.text);
    let magicArray = actualMagicData.cards;

    return magicArray.map(cards =>{
        return {
            name: cards.name,
            image_url: cards.image_uris.art_crop
        };
    });
};