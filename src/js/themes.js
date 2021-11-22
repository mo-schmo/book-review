import { createTheme } from '@mui/material/styles';



const dark = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#102a44',
            paper: '#102a44',
        },
        text: {
            primary: '#fff',
            secondary: '#fff'
        }
      },
    }
)

const light = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: 'rgb(220, 0, 78)',
        },
        background: {
          default: '#fff',
          paper: '#fff',
        },
      },
    }
)   

export {dark, light}