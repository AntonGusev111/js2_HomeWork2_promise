import json from './parser.mjs';
import read from './reader.mjs';

class gameSavingLoader{
    static load(){
        return new Promise((resolve, reject)=>{
            resolve(json(read()))
        })      
    }
}




gameSavingLoader.load().then((value) => {
    console.log(value)
});