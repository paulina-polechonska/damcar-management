import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';


const brand = [
    'Audi',
    'BMW',
    'Mercedes',
    'Peugeot',
    'Skoda',
    'Volkswagen'
];

const TaskForm = () => {

    return (
        <form
              noValidate
              autoComplete='off'>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>


        </form>
    );

}

export default TaskForm;