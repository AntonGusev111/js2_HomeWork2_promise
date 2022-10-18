import json from './parser.mjs';
import read from './reader.mjs';

 class gameSavingLoader{
    static load(){
        let readValue = new Promise((resolve, reject) => {
            resolve(read())
        });
        return readValue.then((result) =>{
            return new Promise((resolve, reject) =>{
                resolve(json(result))
            })
        })      
    }
}




gameSavingLoader.load().then((value) => {
    console.log(value)
});