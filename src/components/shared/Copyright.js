import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react'


export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Ilm-Ul-Kitab
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }