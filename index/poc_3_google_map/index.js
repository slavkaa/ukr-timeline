function initMap() {
    const zviagel = new google.maps.LatLng(50.591864,27.6213681);
    const map = new google.maps.Map(document.getElementById("map"), {
        center: zviagel,
        zoom: 3,
    });
    const coordInfoWindow = new google.maps.InfoWindow();

    coordInfoWindow.setContent(createInfoWindowContent(zviagel, map.getZoom()));
    coordInfoWindow.setPosition(zviagel);
    coordInfoWindow.open(map);
    map.addListener("zoom_changed", () => {
        coordInfoWindow.setContent(createInfoWindowContent(zviagel, map.getZoom()));
        coordInfoWindow.open(map);
    });
}

const TILE_SIZE = 256;

function createInfoWindowContent() {
    return [
        "Леся Українка.",
        "Народилась.",
        "Звя́гель, Україна",
    ].join("<br>");
}

// The mapping between latitude, longitude and pixels is defined by the web
// mercator projection.
function project(latLng) {
    let siny = Math.sin((latLng.lat() * Math.PI) / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
    return new google.maps.Point(
        TILE_SIZE * (0.5 + latLng.lng() / 360),
        TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
    );
}

window.initMap = initMap;
