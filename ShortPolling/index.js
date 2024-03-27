//JS function to fetch the data from the server
const fetchData = () => {
    try{
        fetch('/api/getData').then(res => {
            console.log('API Response', res.json())
        }).then(data => {
            res.send(data);
            console.log('Fetched Data', data)
        });
    } catch(e) {
        console.log(e)
    }
}


//JS fnction to handle short polling of the requests
const startShortPolling = (interval) => {
    let initialInterval;
    interval = setInterval(fetchData, interval);


    //Note - Remember to clear the interval on any user event, action or on completion of the task, 
    //as it may lead to load on server because of consequetive requests and lead to global exception
    clearInterval(initialInterval);
}


startShortPolling(5000);