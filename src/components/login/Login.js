import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from './LoginService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const loginService = new LoginService();

  const login = (e) => {
    e.preventDefault();
    loginService.login(username, password, LoginSuccess, LoginError);
  };

  const LoginSuccess = (dataResult) => {
    setShowSuccess(true);
    setSuccessMessage(`Login effettuato con successo il tuo token è: ${dataResult.token} `);
    setShowError(false);
    setErrorMessage('');
    navigate('/booklist');
  };

  const LoginError = (errorData) => {
    setShowSuccess(false);
    setSuccessMessage('');
    setShowError(true);
    setErrorMessage(`Login fallito per ${errorData.error}`);
  };

  return (
    <div style={{ marginTop: '100px', minHeight: '70vh' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 mr-auto ml-auto'>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary pull-right' onClick={login}>
                Invio
              </button>
              {showSuccess && <div style={{ color: 'green' }}>{successMessage}</div>}
              {showError && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
