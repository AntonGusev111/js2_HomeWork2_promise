import json from './parser.mjs';
import read from './reader.mjs';

export default class gameSavingLoader{
    static load(){
        return read().then(json)
    }
}




gameSavingLoader.load().then((value) => {
    console.log(value)
});