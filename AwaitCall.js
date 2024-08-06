// tache 2 Awaiting a Call

const fetchingdata =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({data:"hello"})
        },2000)
    })
}

const awaitCall =async()=>{
    try {
        const response = await fetchingdata();
        
        console.log("les données sont récupérée");
        console.log(response.data);
    } catch (error) {
        console.log("erro lors de récupération de donnéé",error)
    }
}

awaitCall();