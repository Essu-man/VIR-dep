import { Button } from '@mui/material';

const Admin = () => {
  return (
    <div style={styles.adminContainer}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <p style={styles.description}>Manage users, roles, and permissions from this dashboard.</p>


      <Button variant="contained" color="Green" onClick={() => alert("Add new admin")}>
        Add New Admin
      </Button>
    </div>
  );
};

const styles = {
  adminContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    textAlign: 'center',
  },
};

export default Admin;
