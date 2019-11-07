import { combineReducers } from 'redux'

import { globalStore } from './globalStore'
import { personStore } from './personStore'
import { productStore } from './productStore'
import { projectStore } from './projectStore'
import { activeProductStore } from './activeProductStore';
import { activeProjectStore } from "./activeProjectStore";

export default combineReducers({
    globalStore, 
    personStore, 
    productStore, 
    projectStore, 
    activeProductStore,
    activeProjectStore
})
