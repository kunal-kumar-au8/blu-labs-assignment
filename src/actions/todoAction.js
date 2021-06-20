import {
  CREATE_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SELECT_ALL,
  CLEAR_ALL,
  DELETE_SELECTED_TODOS
} from '../constant/tpyes';

// actions
export const addTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

// Another way of writing action
// get a contect
export const getTodo = (id) => ({
  type: GET_TODO,
  payload: id,
});

// update a todos
export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

// delete a todos
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

//  SELECT CLEAR_ALL
export const selectAllTodo = (id) => ({
  type: SELECT_ALL,
  payload: id
})

// clear selected todos
export const claerAllTodo = () => ({
  type: CLEAR_ALL,
})

//  delecte selected todos
export const deleteSelectedTodo = () => ({
  type: DELETE_SELECTED_TODOS
})
