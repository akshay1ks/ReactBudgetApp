import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addEntryRedux, editEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(desc='', val='', isExp=true) {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp]);
    
    const updateEntry  = (id) => {
        dispatch(
            editEntryRedux(id,
                {
                    id,
                    description,
                    value,
                    isExpense  
                }
            )
        );
        dispatch(closeEditModal());
        resetValues();
    }

    const addEntry = () => {
        const payload = {
        id: uuidv4(),
        description,
        value,
        isExpense
        };
        dispatch(addEntryRedux(payload));
        resetValues();
    }

    function resetValues() {
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    return {
        description, 
        value, 
        isExpense, 
        setDescription, 
        setValue, 
        setIsExpense, 
        addEntry,
        updateEntry
    }
}

export default useEntryDetails