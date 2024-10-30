import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.topBar}>
        <div style={styles.logo}>VIR</div>

        {/* Material UI Menu Button */}
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={styles.menuButton}
        >
          Dashboard
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
          <MenuItem onClick={handleClose}>Data Entry</MenuItem>
          <MenuItem onClick={handleClose}>Customization</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </header>



    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    height: '100vh',
  },
  topBar: {
    width: '100%',
    height: '60px',
    backgroundColor: '#04A84A',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logo: {
    fontWeight: 'bold',
  },
  menuButton: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#004d40',
    color: '#ffffff',
    paddingTop: '20px',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    padding: '15px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  heading: {
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Dashboard;
