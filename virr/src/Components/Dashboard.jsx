import { Logout } from '@mui/icons-material';
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/dv-logo.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handleDataEntryNavigation = () => {
    navigate('/virr/src/Components/DataEntry.jsx');
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const rows = [
    { id: 1, name: 'Dennis Castillo', position: 'Coach', email: 'deniscastillo@yahoo.com', phone: '412-955-3101' },
    { id: 2, name: 'Lettie Jimenez', position: 'Admin', email: 'jimenez@yahoo.com', phone: '795-513-3872' },
    { id: 3, name: 'Craig Perkins', position: 'Manager', email: 'cperkins@hotmail.com', phone: '758-233-9039' },

  ];

  return (
    <div style={styles.dashboard}>
      <aside style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="VIR Logo" style={styles.logo} />
        </div>

        <div style={styles.navButtons}>
          <Button style={styles.navButton} onClick={handleDataEntryNavigation}>
            change of ownership
          </Button>

          <Button style={styles.navButton} startIcon={<Logout />}>
            logout
          </Button>
        </div>
      </aside>

      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>Members</h1>

        {/* Table */}
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination count={10} page={page} onChange={handlePageChange} style={styles.pagination} />
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
    boxSizing: 'border-box',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
    borderRadius: '5%',
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '10px',
    marginBottom: '30px',
  },
  logo: {
    height: '60px',
    width: '60px',
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '80%',
  },
  navButton: {
    color: '#000',
    fontSize: '0.9rem',
    textTransform: 'lowercase',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '5px 5px',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    transition: 'background-color 0.3s ease',
  },
  navButtonHover: {
    '&:hover': {
      backgroundColor: '#388E3C',
    },
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  tableContainer: {
    marginTop: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

export default Dashboard;
