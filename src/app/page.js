const logoUrl ="https://firebasestorage.googleapis.com/v0/b/medcandetect.appspot.com/o/logo.jpg?alt=media&token=ffa9b8be-d4c4-4542-9b4e-bcf23a043c0c";
function SignIn() {
  return (
    <div style={styles.container}>
      <img src={logoUrl} alt="" style={styles.logo} />


      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email address</label>
          <input type="email" id="email" name="email" required style={styles.input} />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" name="password" required style={styles.input} />
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}


const styles = {
  container: {
    maxWidth: '600px',
    width: '100%',
    padding: '20px',
    margin: '50px auto ',
    backgroundColor: '#04A84A',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom:'90px',
  },
  logo: {
    height: '100px',
    margin: '0 auto',

  },
  title: {
    fontSize: '1.5rem',
    color: '#000',
    marginTop: '20px',
  },
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginTop: '20px',
    textAlign: 'left',
  },
  label: {
    fontSize: '0.875rem',
    color: '#000',
  },
  input: {
    width: '50%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #d1d5db',
    borderRadius: '24px',
    fontSize: '0.875rem',
    color: '#111827',
  },
  button: {
    width: '30%',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: '#000',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#04A84A',
  },
  text: {
    marginTop: '10px',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
};


export default SignIn;