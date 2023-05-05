import {createTheme} from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";


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
        // minWidth: 500,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto'

    },

    typography: {
        fontFamily: ['Calibri', 'san-serif'].join(','),
             h5: {
                    fontSize: '1.1rem',
                        '@media (min-width:600px)': {
                        fontSize: '1.3rem',
                    },
             }

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