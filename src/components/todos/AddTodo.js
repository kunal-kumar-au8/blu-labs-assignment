import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { addTodo } from '../../actions/todoAction';


const AddTodo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [task, setTask] = useState('');

  const createTodo = (e) => {
    e.preventDefault();
    const new_todo = {
      id:shortid.generate(),
      task: task
    };
    dispatch(addTodo(new_todo))
    history.push('/');
  };

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Add Todo</div>
        <div className='card-body'>
          <form onSubmit={(e) => createTodo(e)}>
            <div className='form-group'>
              <input
                typr='text'
                className='form-control'
                placeholder='Enter new todo'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div><br/>
            <div className="float-right">
              <button className='btn btn-primary' type='submit'>
                Create Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
