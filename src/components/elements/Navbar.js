import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({handelLogout}) => {
  return (
    <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Todo List
        </Link>
        <Link to='/todos/add' className='btn btn-sucess ml-auto'>
          Create Todo
        </Link>
        <Link className='btn btn-danger ml-auto' onClick={handelLogout}>Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
