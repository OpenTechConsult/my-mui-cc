import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';
import SearchAppBar from './components/SearchAppBar';
import { Typography } from '@mui/material';
import './App.css';

import cities from './data.json';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{marginY: 5}}>
        {
          cities.map((city) => (
            <>
            <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
              {city.name}
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
            </>
          ))
        }
        
      </Container>
    </div>
  );
}

export default App;
