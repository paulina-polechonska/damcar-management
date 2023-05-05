import React, {useState} from 'react';
import {Box, Container, Paper, ThemeProvider, Typography, Fab, Tooltip} from '@mui/material';
import {Table, TableBody, TableHead, TableContainer, TableCell, TableFooter, TablePagination, TableRow} from "@mui/material";
import theme from "../utilities/theme";
import TablePaginationActions from "./Table/TablePaginationActions";
import Row from "./Table/Row";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";


const TasksList = (props) => {
    const {rows, handleDeleteRow, handleFinishRow} = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    // stały rozmiar, nawet, jak są puste wiersze
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleAdd = () => {
        navigate('/Dodaj');
    }

    //nazwy kolumn
    const columns = ['', 'Status', 'Numer rejestracyjny', 'Marka', 'Model', 'Klient', 'Telefon', 'Akcje']


    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Paper elevation={8} style={theme.paper} sx={{padding: 5}}>
                    <Box display="flex" justifyContent="space-between" alignContent={"center"}>
                        <Typography component="h2" variant="h3" color="secondary" gutterBottom>
                            Aktualne zlecenia
                        </Typography>

                        <Fab
                            color="secondary"
                            aria-label="add"
                            onClick={handleAdd}
                            size={"medium"}
                        >
                            <Tooltip title="Dodaj zlecenie">
                                <AddIcon/>
                            </Tooltip>
                        </Fab>
                    </Box>

                    <TableContainer sx={{height: '100%', paddingTop: 3}}>
                        <Table aria-label="custom pagination table collapsible">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) =>
                                        <TableCell
                                            key={column}
                                            align="center"
                                            sx={{padding: '15px 0', fontWeight: 600}}
                                        >
                                            {column}
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                ).map((row) => (
                                    <Row key={row.id}
                                         row={row}
                                         onDelete={handleDeleteRow}
                                         onFinish={handleFinishRow}/>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{height: 53 * emptyRows}}>
                                        <TableCell colSpan={9}/>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                                        colSpan={9}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        labelRowsPerPage={'Wyników na stronie'}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default TasksList;