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
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carType, setCarType] = useState('');
    const [repair, setRepair] = useState('');
    const [checked, setChecked] = useState(false);
    // const [errors, setErrors] = useState([]);

    // funkcja pomocnicza tworząca finalny obiekt z danymi na podstawie danych wejściowych i wartości w inputach
    const prepareData = () => {
        return {
            client: {
                clientName,
                clientPhone
            },
            car: {
                carNumber,
                carBrand,
                carType
            },
            toDo: repair,
            accept: checked
        }
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        // if (typeof onSubmit === "function") {
        //     onSubmit(prepareData())
        // }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Paper elevation={8} style={theme.paper} sx={{ height: { xs: '100%', md: '80%' }, padding: 3 }}>
                    <Typography variant="h4" component="h2" align={'center'} gutterBottom sx={{pt: 3, pb: 5}}>
                        Dodaj nowe zlecenie
                    </Typography>


                <form onSubmit={handleSumbit}>

                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={6}
                    >
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="client-name"
                                    label="Klient"
                                    variant="outlined"
                                    onChange={(e) => {
                                        setClientName(e.target.value)}}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="client-phone"
                                    label="Telefon"
                                    variant="outlined"
                                    onChange={(e) => {
                                        setClientPhone(e.target.value)}}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <TextField
                                    id="car-number"
                                    label="Numer rejestracyjny"
                                    variant="outlined"
                                    onChange={(e) => {
                                        setCarNumber(e.target.value)}}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="brand">Marka</InputLabel>
                                <Select
                                    labelId="brand"
                                    id="brand-select"
                                    value={carBrand}
                                    label="Marka"
                                    onChange={(e) => {
                                        setCarBrand(e.target.value)}}
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
                                    id="car-type"
                                    label="Model"
                                    variant="outlined"
                                    onChange={(e) => {
                                        setCarNumber(e.target.value)}}
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
                                    onChange={(e) => {
                                        setRepair(e.target.value)}}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={checked}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    color={'secondary'}
                                    onChange={(e) => {
                                        setChecked(e.target.checked)}}
                            />}
                                label="Zgoda na naprawę i koszty"/>

                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Dodaj
                            </Button>

                        </Grid>

                    </Grid>

                </form>



                </Paper>
            </Container>
        </ThemeProvider>
    );
};


export default TaskForm;