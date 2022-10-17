import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {SWRConfig} from 'swr'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout';
import AuthenticationProviver from '../Components/Context/UserContext'


function MyApp({ Component, pageProps }) {

   useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return <>
  <SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
    <Layout/>
    <AuthenticationProviver>
          <Component {...pageProps} />
  </AuthenticationProviver>
  </SWRConfig>
</>
}

export default MyApp
