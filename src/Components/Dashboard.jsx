import { Add, Delete, Edit, Logout } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/dv-logo.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleDataEntryNavigation = () => {
    navigate('/virr/src/Components/DataEntry.jsx');
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleOpenDialog = (person) => {
    setSelectedPerson(person);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPerson(null);
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
          <img src={logo} alt="DVLA Logo" style={styles.logo} />
        </div>

        <span style={styles.virText}>Vehicle Inspection and Registration</span>

        <div style={styles.navButtons}>
          <Button style={styles.navButton} onClick={handleDataEntryNavigation}>
            Change of Ownership
          </Button>
          <Button style={styles.navButton} startIcon={<Logout />} onClick={() => alert("Logout clicked")}>
            Logout
          </Button>
        </div>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Members</h1>
          <Button
            variant="contained"
            color="#4CAF50"
            startIcon={<Add />}
            style={styles.addButton}
            onClick={() => alert("Add Members clicked")}
          >
            Add Members
          </Button>
        </div>

        {/* Table */}
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell align="right">Actions</TableCell>
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
                  <TableCell align="right">
                    <IconButton onClick={() => handleOpenDialog(row)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => alert("Delete action")}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination count={10} page={page} onChange={handlePageChange} style={styles.pagination} />

        {/* Dialog for Edit */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Member Details</DialogTitle>
          <DialogContent>
            {selectedPerson && (
              <DialogContentText>
                <strong>Name:</strong> {selectedPerson.name} <br />
                <strong>Position:</strong> {selectedPerson.position} <br />
                <strong>Email:</strong> {selectedPerson.email} <br />
                <strong>Phone:</strong> {selectedPerson.phone}
              </DialogContentText>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 20px',
    boxSizing: 'border-box',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
    borderRadius: '0 20px 20px 0',
    justifyContent: 'space-between',
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '10px',
    marginBottom: '20px',
  },
  logo: {
    height: '100px',
    width: '100px',
  },
  virText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '20px',
    textAlign: 'center',
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    marginBottom: '30px',
  },
  navButton: {
    color: '#000',
    fontSize: '1rem',
    textTransform: 'uppercase',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '10px 15px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#333',
  },
  addButton: {
    fontWeight: 'bold',
  },
  tableContainer: {
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
