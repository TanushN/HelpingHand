

var mymap;
var locations = [
    ["Gary'Home",44.854031, -93.460167,"Gary is willing to help! Contatct: (952-897-9098)"]
    ];


function update() {
   window.mymap = L.map('mapid').setView([44.854031, -93.460167], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(window.mymap);

    updateMarker();


}

function updateMarker(){
    
    for (var i = 0; i < window.locations.length; i++) {
        var name = "<b>" + window.locations[i][0]+ "</b><br>" + window.locations[i][3];
        var marker = L.marker([window.locations[i][1],window.locations[i][2]]).addTo(window.mymap);
        marker.bindPopup(name).openPopup();
    }

}
function locateUser(){
    
    window.mymap.locate({setView : true});
    
}

function addMarker(){
    var latitude = document.getElementById("latitude").value;
    latitude = parseFloat(latitude);
    var longitude = document.getElementById("longitude").value;
    longitude = parseFloat(longitude);
    var event = document.getElementById("event").value;
    var  description= document.getElementById("description").value;
    window.locations.push([event,latitude,longitude,description]);
    updateMarker();

}



window.onload = function() {
    loadmap()
}