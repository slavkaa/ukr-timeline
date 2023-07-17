import { Timeline, DataSet } from "vis-timeline/standalone";

const items = buildDataSet()
const groups = buildGroups()
var timeline = initTimeline(groups, items)

var showVisibleItems = function() {
    var visibleItems = timeline.getVisibleItems()
    document.getElementById("visibleItemsContainer").innerHTML = ""
    document.getElementById("visibleItemsContainer").innerHTML += visibleItems
}

function buildDataSet() {
    // get selected item count from url parameter
    const count = 1000

    // create items
    var items = new DataSet()

    const types = [ 'box', 'point', 'range', 'background']
    var order = 1
    var truck = 1
    for (var j = 0; j < 25; j++) {
        var date = new Date()
        for (var i = 0; i < count/25; i++) {
            date.setHours(date.getHours() +  4 * (Math.random() < 0.2))
            var start = new Date(date)

            date.setHours(date.getHours() + 2 + Math.floor(Math.random()*4))
            var end = new Date(date)

            var type = types[Math.floor(4 * Math.random())]

            items.add({
                id: order,
                group: truck,
                start: start,
                end: end,
                type: type,
                content: 'Order ' + order
            })

            order++
        }
        truck++
    }

    return items
}

function buildGroups() {
    return new DataSet([
        {id: 1, content: 'Truck&nbsp1'},
        {id: 2, content: 'Truck&nbsp2'},
        {id: 3, content: 'Truck&nbsp3'},
        {id: 4, content: 'Truck&nbsp4'},
        {id: 5, content: 'Truck&nbsp5'},
        {id: 6, content: 'Truck&nbsp6'},
        {id: 7, content: 'Truck&nbsp7'},
        {id: 8, content: 'Truck&nbsp8'},
        {id: 9, content: 'Truck&nbsp9'},
        {id: 10, content: 'Truck&nbsp10'},
        {id: 11, content: 'Truck&nbsp11'},
        {id: 12, content: 'Truck&nbsp12'},
        {id: 13, content: 'Truck&nbsp13'},
        {id: 14, content: 'Truck&nbsp14'},
        {id: 15, content: 'Truck&nbsp15'},
        {id: 16, content: 'Truck&nbsp16'},
        {id: 17, content: 'Truck&nbsp17'},
        {id: 18, content: 'Truck&nbsp18'},
        {id: 19, content: 'Truck&nbsp19'},
        {id: 20, content: 'Truck&nbsp20'},
        {id: 21, content: 'Truck&nbsp21'},
        {id: 22, content: 'Truck&nbsp22'},
        {id: 23, content: 'Truck&nbsp23'},
        {id: 24, content: 'Truck&nbsp24'},
        {id: 25, content: 'Truck&nbsp25'},
    ])
}

function initTimeline(groups, items) {
    // specify options
    const options = {
        stack: true,
        maxHeight: 400,
        start: new Date(),
        end: new Date(1000*60*60*24 + (new Date()).valueOf()),
    }

    // create a Timeline
    const container = document.getElementById('visualization')
    const timeline = new Timeline(container, null, options)
    timeline.setGroups(groups)
    timeline.setItems(items)

    return timeline
}


document.getElementById("doShowVisibleItems").onclick = showVisibleItems

