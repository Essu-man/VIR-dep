import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/dv-logo.png';

function Hero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost/your-backend-path/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        navigate('/Dashboard');
      } else {
        setErrorMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <form style={styles.form} onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04A84A',
  },
  container: {
    maxWidth: '400px',
    width: '90%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
  },
  logo: {
    height: '80px',
    marginBottom: '20px',
  },
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '90%',
    padding: '10px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    color: '#333',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#000',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Hero;
