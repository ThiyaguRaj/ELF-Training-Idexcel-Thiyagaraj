let x = document.getElementById('nav');
function geoLocation()
{
    // if(window.navigator.geolocation){
    //     window.navigator.geolocation.getCurrentPosition(showPosition)
    // }
    // else{
    //     x.innerHTML="Not able to get this Data";
    // }
    x.style.display = "block";
    x.innerHTML = `Location cannot be displayed at this time`;
    
}
function removeFunc()
{
    x.style.display = "none";
}
function showPosition(position)
{
    x.innerHTML = `Latitude is : ${position.coords.latitude} <br>
                    Longitude is : ${position.coords.longitude}`;
}