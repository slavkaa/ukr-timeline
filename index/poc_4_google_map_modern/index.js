// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

const Zviagel = { lat: 50.591864, lng: 27.6213681};
const Kyiv = { lat: 50.4464368, lng: 30.5212612};

let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: Zviagel,
        zoom: 8,
        mapId: '84348cd97c5aeb96'
    });

    // ***

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement({
        map,
        position: Zviagel,
    });

    // ***

    const priceTag = document.createElement("div");

    priceTag.className = "price-tag";
    priceTag.textContent = "Навчання";

    const marker2 = new AdvancedMarkerElement({
        map,
        position: Kyiv,
        content: priceTag,
    });

    // ***
    // Market tooltip https://developers.google.com/maps/documentation/javascript/advanced-markers/accessible-markers
}

initMap();

// ****

// import { Loader } from "@googlemaps/js-api-loader"
//
// const loader = new Loader({
//     apiKey: "AIzaSyAWkmn5SQEWV73GxpCEQ9Esa5PDIP67ZQc",
//     version: "weekly",
// });

// loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps");
//
//     let map = new Map(document.getElementById("map"), {
//         center: zviagel,
//         zoom: 8,
//     });
//
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//     const marker = new AdvancedMarkerElement({
//         map,
//         position: { lat: 50.4464368, lng: 30.5212612 },
//     });
// });

function createInfoWindowContent() {
    return [
        "Леся Українка.",
        "Народилась.",
        "Звя́гель, Україна",
    ].join("<br>");
}
