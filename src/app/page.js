
function SignIn() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img src="/public/LOGO_DVLA.png" alt="Logo" style={styles.logo} />
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              style={styles.input}
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
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#04A84A',
  },

  container: {
    maxWidth: '600px',
    width: '100%',
    padding: '50px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
  },

  logo: {
    height: '80px',
    margin: '0 auto 20px auto',
    display: 'block',
  },

  form: {
    marginTop: '20px',
  },

  formGroup: {
    marginBottom: '20px',
    textAlign: 'center',
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
    width: '50%',
    padding: '12px',
    backgroundColor: '#000',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SignIn;
