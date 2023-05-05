import React, {useState} from "react";
import {
    Box,
    Card,
    CardContent,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";
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
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';




function Row(props) {
    const {row, onDelete, onFinish} = props;
    const [open, setOpen] = useState(false);
    const [chipText, setChipText] = useState();
    const [chipColor, setChipColor] = useState(row.assent ? 'secondary' : 'error');


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

    const handleFinish = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('tasks')
            .update({ finished: true })
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
            <TableRow sx={{ '& > *': { borderBottom: 'none' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ?
                            <Tooltip title="Ukryj naprawy">
                            <KeyboardArrowUpIcon />
                            </Tooltip>
                                :
                            <Tooltip title="Pokaż naprawy">
                                <KeyboardArrowDownIcon />
                            </Tooltip>}

                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <Chip
                        label={(row.finished) ? 'Zakończone'
                            : (row.assent && !row.finished) ? 'W realizacji'
                            : 'Nowy'}
                        color={(row.finished) ? 'primary'
                            : (row.assent && !row.finished) ? 'secondary'
                            : 'primary'}
                        sx={{width: '80%'}}
                        variant={(row.finished) ? 'outlined' : 'filled'}
                    />
                </TableCell>
                <TableCell component="th" scope="row" align="center">{row.car_number}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.car_brand} {row.car_type}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.client_name}</TableCell>
                <TableCell component="th" scope="row" align="center">{row.client_phone}</TableCell>
                <TableCell component="th" scope="row" align="right">
                    <IconButton aria-label="delete" onClick={handleDelete} disabled={(row.finished) ? true : false}>
                        <Tooltip title="Usuń">
                            <DeleteIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton
                        aria-label="edit"
                        component={NavLink}
                        to={'/' + row.id}
                        disabled={(row.finished) ? true : false}>
                        <Tooltip title="Edytuj">
                            <EditIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton aria-label="check" onClick={handleFinish} disabled={(row.finished) ? true : false}>
                        <Tooltip title="Zakończ">
                            <CheckIcon />
                        </Tooltip>
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