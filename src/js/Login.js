import React, {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from '@mui/material/styles';
import theme from "../theme/theme";
import image from "../images/img1.jpg";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [openLoginWindow, setOpenLoginWindow] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleSubmit = event => {
        event.preventDefault();
        if (username.length > 4) {
            setUsername(username);
            navigate('/Pulpit');
        } else {
            setErrors('Login musi być dłuższy niż 4 znaki');
        }
    };

    return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl">
                    <Paper elevation={8} style={theme.paper} sx={{height: '80vh'}}>
                        <Grid container component="main" sx={{height: '80vh'}}>
                            <CssBaseline/>
                            <Grid
                                item
                                xs={false}
                                sm={4}
                                md={7}
                                sx={{
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                        <LockOutlinedIcon/>
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Logowanie
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="login"
                                            label="Nazwa użytkownika"
                                            name="login"
                                            autoComplete="login"
                                            autoFocus
                                            onChange={(e) => {
                                                setUsername(e.target.value)
                                            }}
                                            error={(username.length < 5)}
                                            helperText={(username.length < 5) ? errors : null}
                                        />
                                        {/*<TextField*/}
                                        {/*    margin="normal"*/}
                                        {/*    required*/}
                                        {/*    fullWidth*/}
                                        {/*    name="password"*/}
                                        {/*    label="Hasło"*/}
                                        {/*    type="password"*/}
                                        {/*    id="password"*/}
                                        {/*    autoComplete="current-password"*/}
                                        {/*/>*/}
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Zaloguj
                                        </Button>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </ThemeProvider>
    );
};

export default Login;