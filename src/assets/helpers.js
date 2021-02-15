import axios from 'axios'

export async function returnHero(obj){
    const { name, mass, height, hair_color, skin_color, homeworld } = obj;
    const homeRes = await axios.get(`${homeworld}`);
    const home = await homeRes.data;


    return {
        name,
        mass,
        height,
        hair_color,
        skin_color,
        home
    }
}