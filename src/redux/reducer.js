import {
    ADD_TODO,
    RESOLVED_TODO
} from './actions';

const initialState = {
  todoList:  [
    {
        title: 'Eat',
        resolved: false,
        id: 1
    }
],

user:  null

};
let lastId = 1;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
          return{ ...state,
            todoList: [...state.todoList, {
                id: ++lastId,
                title: action.payload.title,
                resolved: false
          } ]};
        //   case RESOLVED_TODO:
        //   return state.filter( todo => todo.resolved: true)
        //   ;
        default:
            return state ;
    }
}

export default reducer;