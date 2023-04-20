import {createTheme} from "@mui/material/styles";
import { withStyles } from '@mui/material/styles';

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
        grey: {
            main: '#A5B2B3',
        },

    },

    root: {
        // padding: 10,
        minWidth: 500,
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    // table: {
    //     minWidth: 1200
    // },
    // tableWrapper: {
    //     overflowX: 'auto'
    // },
    // loader: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '200px'
    // }

    typography: {
        fontFamily: [
            'Calibri',
            'san-serif',
        ].join(','),
    },
});

export default theme;