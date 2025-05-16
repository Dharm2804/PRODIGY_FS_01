import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Toolbar>
          <Avatar sx={{ mr: 2, bgcolor: '#fff', color: '#1976d2' }}>
            {user?.username?.[0]?.toUpperCase() || 'U'}
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
            Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ textTransform: 'none', fontWeight: 500 }}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
          }}
          component={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <MotionTypography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 700, color: '#1976d2' }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome, {user?.username || 'User'}!
          </MotionTypography>
          <MotionTypography
            variant="body1"
            paragraph
            sx={{ color: '#555' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            This is your personal dashboard. Explore your account details below.
          </MotionTypography>
          <Box sx={{ mt: 2 }}>
            <MotionTypography
              variant="body2"
              sx={{ color: '#777', mb: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <strong>Email:</strong> {user?.email || 'N/A'}
            </MotionTypography>
            <MotionTypography
              variant="body2"
              sx={{ color: '#777' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Role:</strong> {user?.role || 'N/A'}
            </MotionTypography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Dashboard;