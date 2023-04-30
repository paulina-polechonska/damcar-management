import React, {useState, useEffect} from "react";
import TasksList from "./TasksList";
import {supabase} from "../supabase/api";
import Row from "./Table/Row";


const Desktop = () => {

    const [fetchError, setFetchError] = useState([]);
    const [rows, setRows] = useState([]);

    // aktualizacja lokalnego stanu przez odfiltrowanie danego tasku

    const handleDelete = (id) => {
        setRows(prevRows => {
            return prevRows.filter(row => row.id !== id)
        })
    }


//pobranie danych z supabase

    useEffect(() => {
        const fetchTasksList = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select()

            if (error) {
                setFetchError('Błąd pobierania danych z bazy');
                setRows(null);
                console.log(error);
            }
            if (data) {
                setRows(data);
                setFetchError(null);
            }
        }

        fetchTasksList();


    }, []);
    console.log(rows);
// <koniec pobranie danych z supabase>


    return (
         <TasksList rows={rows} handleDeleteRow={handleDelete}/>


    )
};

export default Desktop;