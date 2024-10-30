import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logo from '../assets/dv-logo.png';


const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.dashboard}>
      <aside style={styles.sidebar}>
        <img src={logo} alt="VIR Logo" style={styles.logo} />

        <div style={styles.navButtons}>
          <Button style={styles.navButton}>Data Entry</Button>
          <Button style={styles.navButton}>Customization</Button>
          <Button style={styles.navButton}>Logout</Button>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={styles.navButton}
          >
            Options
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </aside>
      <main style={styles.mainContent}>
        <h1>Welcome to the Dashboard</h1>
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#04A84A',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
    boxSizing: 'border-box',
    borderRadius:'40px',
    height: '650px',
  },
  logo: {
    height: '60px',
    marginBottom: '30px',
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '80%',
  },
  navButton: {
    color: '#000',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#f0f0ff',
    borderRadius: '8px',
    padding: '10px 20px',
    border: '1px solid #ffffff',
    width: '100%',
    transition: 'background-color 0.3s',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
};

export default Dashboard;
