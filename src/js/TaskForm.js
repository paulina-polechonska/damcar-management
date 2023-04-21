import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/theme";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {FormControl, InputLabel, Select, FormControlLabel} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const brands = [
    'Audi',
    'BMW',
    'Iveco',
    'Mercedes',
    'Peugeot',
    'Skoda',
    'Volkswagen'
];

const TaskForm = () => {
    const [brand, setBrand] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Paper elevation={8} style={theme.paper} sx={{ height: '80vh', padding: 3 }}>
                    <Typography variant="h4" component="h2" align={'center'} gutterBottom sx={{pt: 3, pb: 5}}>
                        Dodaj nowe zlecenie
                    </Typography>

                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={6}
                    >
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="contact-person"
                                    label="Osoba do kontaktu"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="phone-number"
                                    label="Telefon"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <TextField
                                    id="car-number"
                                    label="Numer rejestracyjny"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="brand">Marka</InputLabel>
                                <Select
                                    labelId="brand"
                                    id="brand-select"
                                    value={brand}
                                    label="Marka"
                                    onChange={handleChange}
                                >
                                    {brands.map(brand => (
                                        <MenuItem key={brand} value={brand}>
                                            {brand}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <TextField
                                    id="type"
                                    label="Model"
                                    variant="outlined"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    id="repair"
                                    label="Zakres napraw"
                                    multiline
                                    rows={5}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheck}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    color={'secondary'}
                            />}
                                label="Zgoda na naprawę i koszty"/>

                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={theme.form.button}
                            >
                                Dodaj
                            </Button>

                        </Grid>

                    </Grid>





                </Paper>
            </Container>
        </ThemeProvider>
    );
};


export default TaskForm;