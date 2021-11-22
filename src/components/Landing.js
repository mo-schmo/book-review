import React from 'react';
import '../stylesheets/Landing.scss';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Stack } from '@mui/material';

export const Landing = props => {
    return (
        <Stack spacing={3} alignItems="center">
            <h1>Ilm Ul Kitab</h1>
            <Button color="secondary" variant="outlined" className="Spacing">
                <Link to="/login">Login</Link>
            </Button>
            <Button color="secondary" variant="outlined">
                <Link to="/register">Register</Link>
            </Button>
        </Stack>
    )
}