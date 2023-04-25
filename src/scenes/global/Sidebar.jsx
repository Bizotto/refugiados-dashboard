import { React } from 'react';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

function MySidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isColapsed, setIscolapsed] = useState(false);
  // const [selected, setSelected] = useState('Dashboard');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '20',
        flexDirection: 'column',
        borderRadius: '0px 20px 20px 0px',
        height: '100vh',
        width: '20%',
        backgroundColor: colors.indigo[400],
      }}
    >
      <h1 style={{ fontWeight: 'bold' }}>Organização</h1>
      <a
        style={{
          fontSize: '20px',
          textDecoration: 'none',
          padding: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        href="/"
      >
        Pie
      </a>
      <a
        style={{
          fontSize: '20px',
          textDecoration: 'none',
          padding: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        href="/"
      >
        Geography
      </a>
      <a
        style={{
          fontSize: '20px',
          textDecoration: 'none',
          padding: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        href="/"
      >
        Form
      </a>
      <a
        style={{
          fontSize: '20px',
          textDecoration: 'none',
          padding: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        href="/"
      >
        rurururur
      </a>
    </div>
  );
}

export default MySidebar;
