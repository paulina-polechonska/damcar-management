import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {supabase} from "../supabase/api";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/theme";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {FormControl, FormControlLabel, IconButton, InputLabel, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";


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

    const brands = [
        'Audi',
        'BMW',
        'Iveco',
        'Mercedes',
        'Peugeot',
        'Skoda',
        'Volkswagen',
        'Inny'
    ];



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
                <Paper elevation={8} style={theme.paper} sx={{ height: { xs: '100%', md: '80%' }, padding: 3 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Typography variant="h4" component="h2" align={'center'} gutterBottom sx={{pt: 3, pb: 5}}>
                        Edycja zlecenia
                    </Typography>


                    <form onSubmit={handleEdit}>

                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={6}
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
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="brand">Marka</InputLabel>
                                    <Select
                                        labelId="brand"
                                        id="carBrand"
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
                                        id="carType"
                                        value={carType}
                                        label="Model"
                                        variant="outlined"
                                        onChange={(e) => {
                                            setCarType(e.target.value)}}
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
                                    />
                                </FormControl>
                            </Grid>

                            {errors &&
                                <Grid item xs={12}>
                                    <Typography color={'secondary'}>{errors}</Typography>
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

                            <Grid item xs={12} md={6}>
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




//     const taskToEdit = {
//         client_name: clientNamex,
//         client_phone: clientPhonex,
//         car_number: carNumberx,
//         car_brand: carBrandx,
//         car_type: carTypex,
//         to_do: repairx,
//         assent: checkedx
//     }
//     console.log(taskToEdit)
//
//     return (
//         <TaskForm initData={taskToEdit} submitLabel={"Edytuj"} title={"Edytuj"}/>
//         // <h2>Update - {id}</h2>
//     )
// }




export default UpdateTask;