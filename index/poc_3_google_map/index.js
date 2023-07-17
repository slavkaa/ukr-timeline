
let map;

async function initMap() {
    const zviagel = new google.maps.LatLng(50.591864,27.6213681);
    const { Map } = await google.maps.importLibrary("maps");
    map = Map(document.getElementById("map"), {
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

function createInfoWindowContent() {
    return [
        "Леся Українка.",
        "Народилась.",
        "Звя́гель, Україна",
    ].join("<br>");
}

initMap()
