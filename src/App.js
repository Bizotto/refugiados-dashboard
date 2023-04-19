import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/Dashboard';
import Sidebar from './scenes/global/Sidebar';
// import Team from './scenes/Team';
// import Invoices from './scenes/Invoices';
// import Contacts from './scenes/Contacts';
// import Bar from './scenes/Bar';
// import Form from './scenes/Form';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import FAQ from './scenes/FAQ';
// import Geography from './scenes/Geography';
// import Calendar from './scenes/Calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
