import {
  CREATE_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SELECT_ALL,
  CLEAR_ALL,
  DELETE_SELECTED_TODOS
} from '../constant/tpyes';

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Learn Nodejs',
    },
    {
      id: 2,
      task: 'Learn Next js'
    },
    {
      id: 3,
      task: 'Project on Next js'
    }
    
  ],
  todo: null,
  selectedTodos: [],
};
// Reducer
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case GET_TODO:
      let arr = state.todos.filter(
        (todo) => todo.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        todo: arr,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id != action.payload
        ),
      };
    case SELECT_ALL:
      return {
        ...state,
        selectedtodos: action.payload
      };
      case CLEAR_ALL:
        return {
          ...state,
          selectedtodos: []
        }
    case DELETE_SELECTED_TODOS:
      return {
        ...state,
        todos: [],
      }
    default:
      return state;
  }
};
