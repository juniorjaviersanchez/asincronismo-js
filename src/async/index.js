const doSomeThingAsinc = () => {
    return new Promise((resolve, reject)=>{
        (true)
          ? setTimeout( () => resolve('Do Something Async'),3000)
          : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const someThing = await doSomeThingAsinc();
    console.log(someThing);
}

console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () => {
    try {
        const someThing = await doSomeThingAsinc();
        console.log(someThing);
    } catch (error) {
        console.error(error);
    }
}


console.log('Before');
anotherFunction();
console.log('After');