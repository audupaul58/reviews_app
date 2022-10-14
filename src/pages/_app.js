import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {SWRConfig} from 'swr'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout';


function MyApp({ Component, pageProps }) {

   useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return <>
  <SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
    <Layout/>
  <Component {...pageProps} />
  </SWRConfig>
</>
}

export default MyApp
