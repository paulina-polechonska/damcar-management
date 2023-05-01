import React, {useState, useEffect} from 'react';
import { useTheme, ThemeProvider} from '@mui/material/styles';
import {Box, Container, Collapse, Paper, IconButton, Typography} from '@mui/material';
import {Table, TableBody, TableHead, TableContainer, TableCell, TableFooter, TablePagination, TableRow} from "@mui/material";
import theme from "../theme/theme";
import TablePaginationActions from "./Table/TablePaginationActions";
import Row from "./Table/Row";


const TasksList = (props) => {
    const {rows, handleDeleteRow} = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" >
                <Paper elevation={8} style={theme.paper} sx={{ padding: 5}}>
                    <Typography component="h2" variant="h5" color="secondary" gutterBottom>
                        Aktualne zlecenia
                    </Typography>
                    <TableContainer sx={{height: '100%', paddingTop: 3}}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table collapsible">
                            <TableHead>
                                <TableRow  color="secondary">
                                    <TableCell />
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Numer rejestracyjny</TableCell>
                                    <TableCell align="center">Marka</TableCell>
                                    <TableCell align="center">Model</TableCell>
                                    <TableCell align="center">Klient</TableCell>
                                    <TableCell align="center">Telefon</TableCell>
                                    <TableCell align="center">Akcje</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                ).map((row) => (
                                    <Row key={row.id}
                                         row={row}
                                         onDelete={handleDeleteRow}/>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={8} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={8}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
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