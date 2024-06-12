import { roboto } from './'
import { createTheme } from '@mui/material'
import { blue, lightBlue } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue['A200'],
    },
    secondary: {
      main: lightBlue['A400'],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
