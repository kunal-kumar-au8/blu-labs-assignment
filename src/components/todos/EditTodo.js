import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { getTodo, updateTodo } from '../../actions/todoAction';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditTodo = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = useSelector((state) => state.todo.todo);
  const [task, setTask] = useState('');

  useEffect(() => {
    if (todo != null) {
      setTask(todo.task);
    }
    dispatch(getTodo(id));
  }, [todo]);

  const onUpdateTodo = (e) => {
    e.preventDefault();

    const Update_Todo = Object.assign(todo, {
      task: task,
    });
    console.log(Update_Todo);
    dispatch(updateTodo(Update_Todo));
    history.push('/');
  };

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Edit Todo</div>
        <div className='card-body'>
          <form onSubmit={(e) => onUpdateTodo(e)}>
            <div className='form-group'>
              <input
                typr='text'
                className='form-control'
                placeholder='Enter Your Name'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div><br/>
            <div className='float-right'>
              <button className='btn btn-danger' type='submit'>
                Update Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
