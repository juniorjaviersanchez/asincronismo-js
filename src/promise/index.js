// Example number one
const someThingWillHappen = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};

someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// Example number two
const someThingWillHappen2 = () => {
    return new Promise( (resolve, reject ) => {
        if(true){
            setTimeout( () => {
                resolve('Resuelto Perro');
            }, 2000);
        }else{
            const error =  new Error('Whooops !!!!');
            reject(error);
        }
    });
};

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));


// Example number three 
// Ejecutar varias promesas a la vez
Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    });