import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')
    
    return (
        <div className='container' style={{marginTop: '50px'}}>
            <h1 style={{color: 'white', textAlign: 'center'}}>404 Not Found</h1>
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <Button variant="outlined" onClick={goToHome} >Go to home</Button>
            </div>
        </div>
    );
}

export default NotFoundPage;
