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
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 'auto',
        marginRight: 'auto'

    },

    typography: {
        fontFamily: ['Calibri', 'Arial', 'san-serif'].join(','),
             h3: {
                    fontSize: '1.5rem',
                        '@media (min-width:900px)': {
                        fontSize: '1.8rem',
                    },
             }
    },

    form: {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 auto',
        },
    },


}

);

export default theme;
