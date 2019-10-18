import { combineReducers } from 'redux'

import { globalStore } from './globalStore'
import { personStore } from './personStore'

export default combineReducers({
    globalStore, personStore
})
