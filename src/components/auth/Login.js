import React from 'react';

const Login = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handelSignup,
    handelLogin,
    handelLogout,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div>
      <div className='container mt-5 w-25'>
        <div className='card border-0 shadow  ml-5'>
          <div className='card-body'>
            <div>
              {/* <div class='form-group'>
                <label for='exampleInputEmail1'>Email</label>
                <input
                  class='form-control'
                  type='text'
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small class='form-text text-muted'>{emailError}</small>
              </div>
              <div class='form-group'>
                <label>Password</label>
                <input
                  class='form-control'
                  for='exampleInputPassword1'
                  type='password'
                  autoFocus
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small class='form-text text-muted'>{passwordError}</small>
              </div> */}
              <div className=' m-3'>
                {hasAccount ? (
                  <>
                    <h1>Login</h1>
                    <div class='form-group'>
                      <input
                        class='form-control mt-3'
                        type='text'
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Email'
                      />
                      <small class='form-text text-muted'>{emailError}</small>
                    </div>
                    <div class='form-group'>
                      <input
                        class='form-control mt-3'
                        for='exampleInputPassword1'
                        type='password'
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter Password'
                      />
                      <small class='form-text'>{passwordError}</small>
                    </div>
                    <div className=' mt-3'>
                      <button class='btn btn-primary' onClick={handelLogin}>
                        Login
                      </button>
                      <p>
                        Don't have a account?
                        <span
                          className='text-primary'
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Sign Up</h1>
                    <div class='form-group'>
                      <input
                        class='form-control mt-3'
                        type='text'
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Email'
                      />
                      <small class='form-text text-muted'>{emailError}</small>
                    </div>
                    <div class='form-group'>
                      <input
                        class='form-control mt-3'
                        for='exampleInputPassword1'
                        type='password'
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter Password'
                      />
                      <small class='form-text'>{passwordError}</small>
                    </div>
                    <div className=' mt-3'>
                      <button class='btn btn-primary' onClick={handelSignup}>
                        Sign Up
                      </button>
                      <p>
                        Have an account?
                        <span
                          className='text-primary'
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
