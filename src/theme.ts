// Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ff9f1c', // Yellow
        },
        secondary: {
            main: '#023e8a', // Bold blue
        },
        success: {
            main: '#43a047', // Lime tone (muted for readability)
        },
        background: {
            default: '#ffffff',
            paper: '#f9f9f9',
        },
        text: {
            primary: '#111',
            secondary: '#555',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h4: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 600,
        },
        subtitle1: {
            color: '#666',
        },
    },
})

export default lightTheme
