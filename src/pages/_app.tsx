import { useState } from 'react'; 
import {ChallegesContext, ChallengesProvider} from '../contexts/ChallengesContext'
import '../styles/global.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  ) 
}

export default MyApp
