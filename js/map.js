let map = null;
let markers = [];
let infoWindow = null;

//initialize the map
function initMap() {
    if (map=== null) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {lat: 30, lng: 0},
        });
        infoWindow = new google.maps.InfoWindow();
    }
}
window.initMap = initMap;

//render markers on map
function renderMarkers(meteorites) {
    //clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    meteorites.forEach(meteorite => {
        const lat = parseFloat(meteorite.reclat);
        const lng = parseFloat(meteorite.reclong);
        if (isNaN(lat) || isNaN(lng)) return;

        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: meteorite.name || "Unknown",
        });

        marker.addListener("click", () => {
            infoWindow.setContent(`
                <div>
                <strong>${meteorite.name || "Unknown"}</strong><br>
                Year: ${meteorite.year ? String(meteorite.year).slice(0, 4) : "N/A"}<br>
                Mass: ${meteorite.mass || "N/A"}<br>
                Class: ${meteorite.recclass || "N/A"}<br>
                Fall: ${meteorite.fall || "N/A"}
                </div>
                `);
                infoWindow.open(map, marker);
        });
        markers.push(marker);
    });
}

window.renderMarkers = renderMarkers;
window.initMap = initMap;