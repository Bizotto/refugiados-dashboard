import React from 'react';
import { ThemeProvider } from 'styled-components';
import Topbar from '../Topbar';
import colors from '../../assets/styles/themes/default';
import MySidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Container>
        <MySidebar />
        <Topbar />
        <Dashboard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
