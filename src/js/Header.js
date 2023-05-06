import React, {useState} from "react";
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConstructionIcon from '@mui/icons-material/Construction';
import theme from "../utilities/theme";
import {NavLink} from 'react-router-dom';
import {AccountCircleOutlined} from "@mui/icons-material";


const Header = (props) => {
    const {usernameH} = props
    const pages = ['Pulpit', 'Dodaj'];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (

        <ThemeProvider theme={theme}>
            <AppBar position={"static"}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ConstructionIcon
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                mr: 2, fontSize: '2rem'
                            }}
                            color={'secondary'}
                        />
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/damcar-management"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            color={'secondary'}
                        >
                            DAMCAR
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={`/${page}`}
                                    >
                                        <Typography>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <ConstructionIcon
                            sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}
                            color={'secondary'}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            color={'secondary'}
                        >
                            DAMCAR
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: 'flex-end',
                            pr: '30px'
                        }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 'auto',
                                        display: (usernameH === 'Login') ? "none" : "block",
                                        fontSize: '1.1rem',
                                        fontWeight: 400,
                                        padding: '15px'
                                    }}
                                    color={'white'}
                                    component={NavLink}
                                    to={`/${page}`}
                                >
                                    {page}
                                </Button>

                            ))}
                        </Box>

                        <IconButton
                            component="a"
                            href="/damcar-management/">
                            <AccountCircleOutlined
                                color={'secondary'}
                                sx={{fontSize: '2rem'}}
                            />
                        </IconButton>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/damcar-management/"
                            sx={{
                                ml: 1,
                                mr: 1,
                                display: {xs: 'none', md: 'flex'},
                                textDecoration: 'none',
                            }}
                            color={'secondary'}
                        >
                            {usernameH}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;



