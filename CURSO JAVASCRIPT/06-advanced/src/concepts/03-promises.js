import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
        <h1>Error</h1>
        <h3>${error}</h3>`;
    }

    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    findHero(id1)
    .then(renderHero)
    .catch(renderError);

}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    const promise = new Promise(( resolve, reject ) => {

        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);

    });

    return promise;

}