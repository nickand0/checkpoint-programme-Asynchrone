// Tache 1 Fonction Asynchrone 
let delay = ms => new Promise(resolve =>setTimeout(resolve,ms))

let iterate = async(Array)=>{
    for(const value of Array){
        console.log(value);
        await delay(1000)
    }
}

console.log(iterate([1,2,3,4,5,6,7,8,9]));