// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

const Zviagel = { lat: 50.591864, lng: 27.6213681};
const Kyiv = { lat: 50.4464368, lng: 30.5212612};
const Kolodiazne = { lat: 51.1757368, lng: 24.7913879};

let map;

async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: Zviagel,
        zoom: 7,
        mapId: '84348cd97c5aeb96'
    });

    // ***

    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement({
        map,
        position: Zviagel,
    });

    // ***

    const point2 = document.createElement("div");

    point2.className = "price-tag";
    point2.textContent = "Київ: 1876, 1881";

    const marker2 = new AdvancedMarkerElement({
        map,
        position: Kyiv,
        content: point2,
        title: '1876. Мандрівка' + '<br/>' + '1881. Навчання'+ '<br/>' + '1881. Знайомство з дружиною Миколи Лисенка, Ольгою О`конор'
    });

    // ***
    // Market tooltip https://developers.google.com/maps/documentation/javascript/advanced-markers/accessible-markers

    const pin3 = new PinElement({
        glyph: "↔️",
    });

    const marker3 = new AdvancedMarkerElement({
        position: Kolodiazne,
        map,
        title: '1882. Переїзд у Колодяжне',
        content: pin3.element,
    });

    const infoWindow = new InfoWindow();

    marker3.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(marker3.title);
        infoWindow.setPosition(marker3.position);
        infoWindow.open(marker3.map, marker3);
    });

    marker2.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(marker2.title);
        infoWindow.setPosition(marker2.position);
        infoWindow.open(marker2.map, marker2);
    });
}

initMap();
