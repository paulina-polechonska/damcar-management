import {createTheme} from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: '#2d373e',
        },
        secondary: {
            main: '#e16030',
        },
        white: {
            main: '#f5f5f6',
        },

    },

    paper: {
        minWidth: 500,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto'

    },

    typography: {
        fontFamily: [
            'Calibri',
            'san-serif',
        ].join(','),
    },

    form: {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 auto',
        },

    }
});

export default theme;