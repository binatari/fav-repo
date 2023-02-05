import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { ThemeProvider } from 'tailwind-darkmode-toggle';

function MyApp({ Component, pageProps }) {

  return <ThemeProvider><Layout><Component {...pageProps} /></Layout> </ThemeProvider> 
}

export default MyApp
