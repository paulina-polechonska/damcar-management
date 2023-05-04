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

    const handleFinish = (id) => {
        const fetchUpdateTasksList = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select()

            if (error) {
                console.log(error);
            }
            if (data) {
                setRows(data);
            }
        }

        fetchUpdateTasksList();

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

    function sortById(a, b) {
        return b.id - a.id;
    }

    rows.sort(sortById);
    console.log(rows);
// <koniec pobranie danych z supabase>


    return (
         <TasksList rows={rows} handleDeleteRow={handleDelete} handleFinishRow={handleFinish}/>


    )
};

export default Desktop;