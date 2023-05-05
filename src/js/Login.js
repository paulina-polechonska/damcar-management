import React, {useState, useContext} from "react";
import {Avatar, Box, Button, Container, CssBaseline, Grid, Paper, TextField, ThemeProvider, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import theme from "../utilities/theme";
import image from "../images/img1.jpg";
import {useNavigate} from "react-router-dom";
import UserContext from "../UserContext";

const Login = () => {

    const navigate = useNavigate();
    const user = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = event => {
        event.preventDefault();
        if (username.length > 4) {
            setUsername(username);
            user.setName(username);
            navigate('/Pulpit');
        } else {
            setErrors('Login musi być dłuższy niż 4 znaki');
        }

    };
    console.log(username)
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Paper
                    elevation={8}
                    style={theme.paper}
                    sx={{height: '80vh'}}
                >
                    <Grid container
                          component="main"
                          sx={{height: '80vh'}}
                    >
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
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={5}
                            component={Paper}
                            elevation={6}
                            square
                        >
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

                                <Typography
                                    component="h1"
                                    variant="h5"
                                >
                                    Logowanie
                                </Typography>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    sx={{mt: 3}}
                                >
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