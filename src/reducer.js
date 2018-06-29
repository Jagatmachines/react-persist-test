import { combineReducers } from 'redux';

const todoState = {
    addTodo: ''
}

export function todo(state = todoState, action) {
    switch(action.type) {
        case 'addTodo':
            return {
                ...state,
                todoItem: action.payload
            }

        default:
            return state
    }
}

export default combineReducers({
    todo
});