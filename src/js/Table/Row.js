import React, {useState} from "react";
import {
    Box, Chip, Collapse, IconButton, Table, TableBody, TableCell, TableRow, Typography, ThemeProvider, Tooltip
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import {NavLink} from 'react-router-dom';
import {supabase} from "../../supabase/api";
import theme from "../../utilities/theme";


function Row(props) {
    const {row, onDelete, onFinish} = props;
    const [open, setOpen] = useState(false);


// usuwanie wiersza z bazy
    const handleDelete = async () => {
        const {data, error} = await supabase
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

    //zakończenie tasku
    const handleFinish = async (event) => {
        event.preventDefault();

        const {data, error} = await supabase
            .from('tasks')
            .update({finished: true})
            .eq('id', row.id)
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
            onFinish(row.id);
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <TableRow sx={{'& > *': {borderBottom: 'none'}}}>
                <TableCell padding={"none"}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ?
                            <Tooltip title="Ukryj naprawy">
                                <KeyboardArrowUpIcon/>
                            </Tooltip>
                            :
                            <Tooltip title="Pokaż naprawy">
                                <KeyboardArrowDownIcon/>
                            </Tooltip>}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row" align="center" sx={{padding: '10px'}}>
                    <Chip
                        label={(row.finished) ? 'Zakończone'
                            : (row.assent && !row.finished) ? 'W realizacji'
                                : 'Nowy'}
                        color={(row.finished) ? 'primary'
                            : (row.assent && !row.finished) ? 'secondary'
                                : 'primary'}
                        variant={(row.finished) ? 'outlined' : 'filled'}
                        sx={{width: '100%'}}
                    />
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >
                    {row.car_number}
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >
                    {row.car_brand}
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >
                    {row.car_type}
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >
                    {row.client_name}
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >
                    {row.client_phone}
                </TableCell>

                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{padding: '10px'}}
                >

                    <IconButton
                        aria-label="delete"
                        onClick={handleDelete}
                        disabled={!!(row.finished)}
                    >
                        <Tooltip title="Usuń">
                            <DeleteIcon/>
                        </Tooltip>
                    </IconButton>

                    <IconButton
                        aria-label="edit"
                        component={NavLink}
                        to={'/' + row.id}
                        disabled={!!(row.finished)}
                    >
                        <Tooltip title="Edytuj">
                            <EditIcon/>
                        </Tooltip>
                    </IconButton>

                    <IconButton
                        aria-label="check"
                        onClick={handleFinish}
                        disabled={!!(row.finished)}
                    >
                        <Tooltip title="Zakończ">
                            <CheckIcon/>
                        </Tooltip>
                    </IconButton>

                </TableCell>
            </TableRow>

            {/*Rozwijalna część*/}
            <TableRow>

                <TableCell
                    style={{padding: '0 35px'}}
                    colSpan={9}
                >
                    <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                    >
                        <Box sx={{margin: 1}}>
                            <Table
                                size="small"
                                aria-label="purchases"
                            >
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                borderBottom: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                padding: '6px 0'
                                            }}
                                        >
                                            Zakres napraw
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <Typography
                                            sx={{borderBottom: 'none', padding: '6px 0'}}
                                        >
                                            {row.to_do}
                                        </Typography>
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