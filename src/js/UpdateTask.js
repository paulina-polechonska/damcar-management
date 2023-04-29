import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import TaskForm from "./TaskForm";
import {supabase} from "../supabase/api";


const UpdateTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carType, setCarType] = useState('');
    const [repair, setRepair] = useState('');
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        const fetchTask = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                navigate('/Pulpit', { replace: true })
            }
            if (data) {
                setClientName(data.client_name);
                setClientPhone(data.client_phone);
                setCarNumber(data.car_number);
                setCarBrand(data.car_brand);
                setCarType(data.car_type);
                setRepair(data.to_do);
                setChecked(data.assent);
                console.log(data);

            }
        }
        fetchTask();

    }, [id, navigate]);

    return (
        <TaskForm submitLabel="Edytuj"/>
        // <h2>Update - {id}</h2>
    )
}

export default UpdateTask;