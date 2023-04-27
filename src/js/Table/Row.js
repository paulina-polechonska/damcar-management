import React, {useState} from "react";
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';


function Row(props) {
    const {row} = props;
    const [open, setOpen] = useState(false);

    return (
        <>
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
                <TableCell component="th" scope="row" >
                    {row.client_name}
                </TableCell>
                <TableCell >{row.client_phone}</TableCell>
                <TableCell >{row.car_number}</TableCell>
                <TableCell align="center">{row.car_brand}</TableCell>
                <TableCell align="center">{row.car_type}</TableCell>
                <TableCell align="right">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <CheckIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
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
        </>
    );
}



export default Row;