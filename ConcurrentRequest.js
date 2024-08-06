// Awaiting Concurrent Requests
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 1000);
    });
}

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("How are you");
        }, 1000);
    });
}

const  concurrentRequests = async()=>{
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("résultat combinés:", result1, result2);
}
concurrentRequests();