import { TimelineData } from "../dto/TimelineData.js"

class DataUpdater {

    /**
     * @param globalGroups
     * @param globalDataSets
     * @param DataItem
     * @returns TimelineData
     */
    updateData(globalGroups, globalDataSets, DataItem) {
        let data = new TimelineData()

        data.groups = this.updateGroups(globalGroups, DataItem)
        const lastGroup = data.groups[data.groups.length - 1]
        data.dataSets = this.updateDataSets(lastGroup, globalDataSets, DataItem)

        return data
    }

    /**
     * @param groups
     * @param DataItem
     * @returns Array
     */
    updateGroups (groups, DataItem) {
        if (!Array.isArray(groups)) {
            groups = []
        }

        let lastGroup = null
        if (0 < groups.length) {
            lastGroup = groups[groups.length - 1]
        }

        let lastId = 0
        if (lastGroup) {
            lastId = lastGroup.id
        }

        groups[lastId] = {
            id: lastId + 1,
            content: DataItem.group.content
        }

        return groups
    }

    /**
     * @param lastGroup
     * @param dataSets
     * @param DataItem
     * @returns Json
     */
    updateDataSets(lastGroup, dataSets, DataItem) {
        if (!Array.isArray(dataSets)) {
            dataSets = []
        }

        let lastDataSet = null
        if (0 < dataSets.length) {
            lastDataSet = dataSets[dataSets.length - 1]
        }

        let lastId = 0
        if (lastDataSet) {
            lastId = lastDataSet.id
        }

        console.log('DataItem', DataItem)

        dataSets[lastId] = {
            id: lastId + 1,
            group: lastGroup.id,
            start: DataItem.dataSet.start,
            end: DataItem.dataSet.end,
            type: DataItem.dataSet.type,
            content: DataItem.dataSet.content
        }

        return dataSets
    }
}

export { DataUpdater }
