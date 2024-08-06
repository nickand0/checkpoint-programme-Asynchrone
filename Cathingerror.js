// tache 3 Handling Errors with Async/Await
const fetchingdata = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Simulated API error"));
        }, 2000); 
    });
}

const awaitCall = async () => {
    try {
        const response = await fetchingdata(); 
        console.log(response.data); 
    } catch (error) {
        console.error("Erreur : Quelque chose s'est mal passé lors de la récupération des données."); 
        console.error("Détails de l'erreur :", error.message); 
    }
}

awaitCall();
