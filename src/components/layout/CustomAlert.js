import React, { useContext } from 'react';

import NotepadContext from '../../context/notepadContext';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const CustomAlert = () => {

    const notepadContext = useContext(NotepadContext);
    const { alert } = notepadContext;
    return (
        alert !== null && (
            <Alert severity={alert.type}>
                <AlertTitle>{alert.type}</AlertTitle>
                {alert.message}
            </Alert>
        )
    );
};

export default CustomAlert;