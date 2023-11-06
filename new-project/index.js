button = document.getElementById("btn");

function trackUserHandler(){
    navigator.geolocation.getCurrentPosition(posData => {
        console.log(posData)
    }, error => {
        console.log(error);
    });
    console.log("Getting position...")
}

button.addEventListener("click", trackUserHandler);