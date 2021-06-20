import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTodo } from '../../actions/todoAction';
import { useDispatch } from 'react-redux';

const Todo = ({ todo, selectAll }) => {
  const { task, id } = todo;
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className='custom-control custom-checkbox'>
          <input
            checked={selectAll}
            type='checkbox'
            className='custom-control-input'
          />
          <label className='custom-control-label'></label>
        </div>
      </td>
      <td>{task}</td>
      <td>
        <Link to={`./todos/edit/${id}`}>
          <span className='material-icons'>edit</span>
        </Link>
        <Link>
          <span
            className='material-icons text-danger data-toggle="tooltip" data-placement="top" title="Tooltip on top"'
            onClick={() => dispatch(deleteTodo(id))}
          >
            delete
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Todo;
