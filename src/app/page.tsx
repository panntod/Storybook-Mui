import React from 'react'
import { AppProps } from 'next/app'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import themes from '@/themes'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Home(props: AppProps) {
  const { Component, pageProps } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () => (prefersDarkMode ? themes.dark : themes.light),
    [prefersDarkMode]
  )

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
