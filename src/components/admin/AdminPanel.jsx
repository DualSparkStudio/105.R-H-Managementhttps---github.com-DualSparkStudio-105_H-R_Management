import React, { useEffect } from 'react';
import { useData } from '../../context/DataContext';
import Cursor from '../Cursor';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPanel = () => {
  const { isAdmin } = useData();

  useEffect(() => {
    // Ensure cursor is enabled for admin panel
    if (window.innerWidth >= 769) {
      document.body.style.cursor = 'none';
    }
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  if (!isAdmin) {
    return (
      <>
        <Cursor />
        <AdminLogin />
      </>
    );
  }

  return (
    <>
      <Cursor />
      <AdminDashboard />
    </>
  );
};

export default AdminPanel;

