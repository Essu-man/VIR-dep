import {
    List,
    ListItem,
    ListItemText,
    Pagination,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { useState } from 'react';

const Admin = () => {
  const [page, setPage] = useState(1);
  const [systemLogs] = useState([
    { id: 1, action: 'Login', user: 'Admin', timestamp: '2024-10-31 10:30 AM' },
    { id: 2, action: 'Edited User Role', user: 'Lettie Jimenez', timestamp: '2024-10-30 02:15 PM' },
    { id: 3, action: 'Deleted Record', user: 'Craig Perkins', timestamp: '2024-10-29 09:45 AM' },
  ]);

  const [analytics] = useState({
    activeUsers: 20,
    averageSession: '15 mins',
    actionsPerformed: 35,
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={styles.adminContainer}>
      <Typography variant="h4" style={styles.title}>Admin Panel</Typography>

      {/* System Logs */}
      <div style={styles.section}>
        <Typography variant="h6" style={styles.sectionTitle}>
          Recent Activity Logs
        </Typography>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {systemLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.id}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* User Analytics */}
      <div style={styles.section}>
        <Typography variant="h6" style={styles.sectionTitle}>
          User Analytics
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Active Users" secondary={analytics.activeUsers} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Average Session Length" secondary={analytics.averageSession} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Actions Performed" secondary={analytics.actionsPerformed} />
          </ListItem>
        </List>
      </div>

      {/* System Settings */}
      <div style={styles.section}>
        <Typography variant="h6" style={styles.sectionTitle}>
          System Settings
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email Notifications" />
            <Switch defaultChecked color="primary" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Data Backup Enabled" />
            <Switch color="primary" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dark Theme" />
            <Switch color="primary" />
          </ListItem>
        </List>
      </div>

      <Pagination count={5} page={page} onChange={handlePageChange} style={styles.pagination} />
    </div>
  );
};

const styles = {
  adminContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
    width: '80%',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  tableContainer: {
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

export default Admin;
