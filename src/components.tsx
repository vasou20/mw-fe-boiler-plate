import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Components = () =>{
    return(
        <>
        <div>Buttons</div>
        <Stack spacing={2} direction="row">
            <Button variant="text" className=''>Text</Button>
            <Button variant="contained" className='bg-primary-100'>Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        </>
    );
}

export default Components;