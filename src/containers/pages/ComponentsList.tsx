import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
interface ComponentListProps{};

const ComponentList: React.FC<ComponentListProps> = () => {

    return(
        <Container>
            <h1>Components</h1>
            <FormControl fullWidth>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <label htmlFor="check-one">First name</label>
                        <OutlinedInput placeholder="Please enter your last name" id="check-one" fullWidth/>
                    </Grid>
                    <Grid item>
                        <label htmlFor="lastName">Last name</label>
                        <OutlinedInput placeholder="Please enter your first name" id="check-two" fullWidth/>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    );
};

export default ComponentList;