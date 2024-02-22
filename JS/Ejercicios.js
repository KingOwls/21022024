/**
 * 
 * @param {number} n
 * @returns {Promise}
 */
const isPar =(n) =>{
    return new Promise((resolve, reject)=>{
        if((n%2)== 0){
            resolve('Numero par')
            return;
        }
        reject('Numer Impar')
    })
    return Promise;
}
isPar(2);

const heroes =[]

const loadHeroes =() =>{
    return new Promise ((resolve, reject)=>{
        if(heroes.length>0){
            resolve("Heroes cargados")
            return;
        }
        reject("Heroes no encontrado")
    })
}