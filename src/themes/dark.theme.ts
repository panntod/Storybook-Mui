import { roboto } from './'
import { createTheme } from '@mui/material'
import { blue, blueGrey, indigo } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue['500'],
    },
    secondary: {
      main: indigo['A400'],
    },
    background: {
      default: blueGrey['900'],
      paper: blueGrey['800'],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
