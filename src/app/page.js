const logoUrl = "https://firebasestorage.googleapis.com/v0/b/medcandetect.appspot.com/o/dvla%20logo.jpeg?alt=media&token=9da938bd-45d2-4107-a1de-357eccf600b0";

function SignIn() {
  return (
    <div style={styles.container}>
      <img src={logoUrl} alt="Your Company Logo" style={styles.logo} />
      <h2 style={styles.title}>Sign in to your account</h2>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email address</label>
          <input type="email" id="email" name="email" required style={styles.input} />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" name="password" required style={styles.input} />
        </div>

        <button type="submit" style={styles.button}>Sign in</button>
      </form>
    </div>
  );
}


const styles = {
  container: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#04A84A',
    borderRadius: '8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  logo: {
    height: '100px',
    margin: '0 auto',

  },
  title: {
    fontSize: '1.5rem',
    color: '#111827',
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
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '0.875rem',
    color: '#111827',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: '#000',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
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