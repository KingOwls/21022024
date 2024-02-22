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

