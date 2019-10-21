import { combineReducers } from 'redux'

import { globalStore } from './globalStore'
import { personStore } from './personStore'
import { productStore } from './productStore'
import { projectStore } from './projectStore'

export default combineReducers({
    globalStore, personStore, productStore, projectStore
})
