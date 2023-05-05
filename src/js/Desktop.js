import React, {useState, useEffect} from "react";
import TasksList from "./TasksList";
import {supabase} from "../supabase/api";


const Desktop = () => {

    const [rows, setRows] = useState([]);

    // aktualizacja lokalnego stanu przez odfiltrowanie danego tasku

    const handleDelete = (id) => {
        setRows(prevRows => {
            return prevRows.filter(row => row.id !== id)
        })
    }

    // aktualizacja lokalnego stanu przez pobranie zaktualizowanych danych z bazy
    const handleFinish = (id) => {
        const fetchUpdateTasksList = async () => {
            const {data, error} = await supabase
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

//pobranie danych z bazy

    useEffect(() => {
        const fetchTasksList = async () => {
            const {data, error} = await supabase
                .from('tasks')
                .select()

            if (error) {
                setRows(null);
                console.log(error);
            }
            if (data) {
                setRows(data);
            }
        }

        fetchTasksList();


    }, []);

    //funkcja sortująca
    function sortById(a, b) {
        return b.id - a.id;
    }

    //sortowanie tablicy z danymi
    rows.sort(sortById);
    console.log(rows);


    return (
        <TasksList
            rows={rows}
            handleDeleteRow={handleDelete}
            handleFinishRow={handleFinish}
        />
    )
};

export default Desktop;