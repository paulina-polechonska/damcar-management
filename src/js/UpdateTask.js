import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {supabase} from "../supabase/api";
import {Box, Button, Container, Checkbox, Grid, IconButton, MenuItem, Paper, ThemeProvider, Typography} from "@mui/material";
import {FormControl, FormControlLabel, InputLabel, Select, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {CAR_BRANDS} from "../utilities/carBrand";
import theme from "../utilities/theme";


const UpdateTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carType, setCarType] = useState('');
    const [repair, setRepair] = useState('');
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        const fetchTask = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                navigate('/Pulpit', { replace: true })
            }
            if (data) {
                setClientName(data.client_name);
                setClientPhone(data.client_phone);
                setCarNumber(data.car_number);
                setCarBrand(data.car_brand);
                setCarType(data.car_type);
                setRepair(data.to_do);
                setChecked(data.assent);
            }
        }
        fetchTask();

    }, [id, navigate]);

    const prepareData = () => {
        return {
            client_name: clientName,
            client_phone: clientPhone,
            car_number: carNumber,
            car_brand: carBrand,
            car_type: carType,
            to_do: repair,
            assent: checked
        }
    }

    const handleEdit = async (event) => {
        event.preventDefault();

        if(!clientName || !clientPhone || !carNumber || !carType || !carBrand || !repair) {
            setErrors('Uzupełnij wszystkie pola formularza!')
            return
        }

        const { data, error } = await supabase
            .from('tasks')
            .update([prepareData()])
            .eq('id', id)
            .select()

        if(error) {
            setErrors('Uzupełnij wszystkie pola formularza!')
        }

        if(data) {
            setErrors([]);
            navigate('/Pulpit');
        }

    };

    const handleClose = () => {
        navigate('/Pulpit');
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Paper elevation={8} style={theme.paper} sx={{  padding: 3 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon fontSize={"small"}/>
                        </IconButton>
                    </Box>

                    <Typography component="h2"
                                variant="h3"
                                color="secondary"
                                gutterBottom
                                sx={{pb: 2}}
                                align={"center"}
                    >
                        Edycja zlecenia
                    </Typography>


                    <form onSubmit={handleEdit}>

                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={3}
                        >
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="clientName"
                                        value={clientName}
                                        label="Klient"
                                        variant="outlined"
                                        onChange={(e) => {
                                            setClientName(e.target.value)}}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="clientPhone"
                                        value={clientPhone}
                                        label="Telefon"
                                        variant="outlined"
                                        onChange={(e) => {
                                            setClientPhone(e.target.value)}}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="carNumber"
                                        value={carNumber}
                                        label="Numer rejestracyjny"
                                        variant="outlined"
                                        onChange={(e) => {
                                            setCarNumber(e.target.value)}}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="brand">Marka</InputLabel>
                                    <Select
                                        labelId="brand"
                                        id="carBrand"
                                        value={carBrand}
                                        label="Marka"
                                        onChange={(e) => {
                                            setCarBrand(e.target.value)}}
                                    >
                                        {CAR_BRANDS.map(brand => (
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
                                        id="carType"
                                        value={carType}
                                        label="Model"
                                        variant="outlined"
                                        onChange={(e) => {
                                            setCarType(e.target.value)}}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="repair"
                                        value={repair}
                                        label="Zakres napraw"
                                        multiline
                                        rows={5}
                                        onChange={(e) => {
                                            setRepair(e.target.value)}}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>

                            {errors &&
                                <Grid item xs={12}>
                                    <Typography
                                        color={'secondary'}
                                    >
                                        {errors}
                                    </Typography>
                                </Grid>
                            }


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

                            <Grid item xs={12} md={4}>
                                <Button fullWidth
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                >
                                    Edytuj zlecenie
                                </Button>

                            </Grid>
                        </Grid>
                    </form>

                </Paper>
            </Container>
        </ThemeProvider>
    );
};



export default UpdateTask;