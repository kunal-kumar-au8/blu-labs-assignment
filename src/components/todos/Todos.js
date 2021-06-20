import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';
import shortid from 'shortid';
import {
  selectAllTodo,
  claerAllTodo,
  deleteSelectedTodo,
} from '../../actions/todoAction';

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const selectedTodos = useSelector((state) => state.todo.selectedTodos);
  // console.log(todos);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllTodo(todos.map((todo) => todo.id)));
    } else {
      dispatch(claerAllTodo());
    }
  });

  return (
    <div>
      {selectedTodos.length > 0 ? (
        <button
          className='btn btn-danger mb-3'
          onClick={() => dispatch(deleteSelectedTodo())}
        >
          Delete All
        </button>
      ) : null}
      <table className='table shadow'>
        <thead className='bg-danger text-white'>
          <tr>
            <th>
              <div className='custom-control custom-checkbox'>
                <input
                  id='selectAll'
                  type='checkbox'
                  className='custom-control-input'
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor='selectAll'
                  className='custom-control-label'
                ></label>
              </div>
            </th>
            <th>Todos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
