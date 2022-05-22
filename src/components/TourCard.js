import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './TourCard.css';

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://images.unsplash.com/photo-1598402453861-4fbcbf6ced3b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674" alt=""
                className="img"/>
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the fall
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <AccessTimeIcon sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center"}} marginTop={3}>
                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>4.5</Typography>
                        <Typography variant="body2" component="p" marginLeft={1.5}>(655 reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From C $465
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
    
}

export default TourCard;