
import { Timeline } from 'vis-timeline/standalone';
import { TimelineData } from './dto/TimelineData.js'
import { DataUpdater } from './data/DataUpdater.js'
import { LesiaUkrainian } from './data/writers/LesiaUkrainian.js'

const JsonDataSets = [
    new LesiaUkrainian()
]

const timelineDataObj = buildData(JsonDataSets)
const timeline = initTimeline(timelineDataObj)

document.getElementById('doShowVisibleItems').onclick = function () { showVisibleItems() }

let showVisibleItems = function() {
    console.log('showVisibleItems')
    let visibleItems = timeline.getVisibleItems()
    document.getElementById('visibleItemsContainer').innerHTML = ''
    document.getElementById('visibleItemsContainer').innerHTML += visibleItems
}

function buildData(JsonDataSets) {
    let timelineDataObj = new TimelineData()
    const dataUpdaterObj = new DataUpdater()

    for (const jsonItem of JsonDataSets) {
        timelineDataObj = dataUpdaterObj.updateData(timelineDataObj.groups, timelineDataObj.dataSets, jsonItem)
    }

    return timelineDataObj
}

function initTimeline(timelineDataObj) {
    // specify options
    const options = {
        stack: true,
        maxHeight: 400,
        start: '1871-01-01',
        end: '1872-01-01',
    }

    // create a Timeline
    const container = document.getElementById('visualization')
    const timeline = new Timeline(container, timelineDataObj.dataSets, options)
    timeline.setGroups(timelineDataObj.groups)

    return timeline
}

