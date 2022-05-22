import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
