import {configureStore} from '@reduxjs/toolkit'
import { counter } from './reducers'

export default configureStore ({
    reducer: {
        counter: counter
    }
})