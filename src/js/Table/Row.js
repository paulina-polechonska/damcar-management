import React, {useState} from "react";
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import {Link, NavLink} from 'react-router-dom';
import {supabase} from "../../supabase/api";
import Button from "@mui/material/Button";
import theme from "../../theme/theme";
import {ThemeProvider} from "@mui/material/styles";



function Row(props) {
    const {row, onDelete} = props;
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        const {data, error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', row.id)
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
            onDelete(row.id);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <TableRow sx={{ '& > *': { borderBottom: 'none' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center" >
                    <Button
                        size="small"
                        variant="contained"
                        fullWidth
                        color={row.assent ? 'secondary' : 'primary'}
                        >
                        {row.assent ? 'W realizacji' : 'Nowy'}
                    </Button>
                </TableCell>
                <TableCell component="th" scope="row" align="center">{row.car_number}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.car_brand}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.car_type}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.client_name}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.client_phone}</TableCell>
                <TableCell component="th" scope="row" align="right">
                    <IconButton aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        aria-label="edit"
                        component={NavLink}
                        to={'/' + row.id}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="check">
                        <CheckIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Zakres napraw
                            </Typography>
                            <Table size="small" aria-label="purchases" >

                                <TableBody>
                                    <TableRow >
                                        <TableCell sx={{ borderBottom: 'none'}}>{row.to_do}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            </ThemeProvider>
    );
}



export default Row;