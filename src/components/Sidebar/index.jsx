import { React } from 'react';
import { Link, Container } from './styles';

function MySidebar() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '20',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }}>Organização</h1>
        <Link href="/"> Pie</Link>
        <Link href="/">Geography</Link>
        <Link href="/">Form</Link>
        <Link href="/">rurururur</Link>
      </div>
    </Container>
  );
}

export default MySidebar;
