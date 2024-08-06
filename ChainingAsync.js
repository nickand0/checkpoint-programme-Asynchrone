// tache 3 Chaining Async/Await

const Data1 = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello")
            resolve()
        }, 1000); 
    });
}

const Data2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log( "How are you?")
            resolve()
        }, 1000); 
    });
}

const Data3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("What's your name?")
            resolve()
        }, 1000); 
    });
}

const chainedAsyncFunctions = async()=>{
    
    await Data1();
    await Data2();
    await Data3();       
}

chainedAsyncFunctions()