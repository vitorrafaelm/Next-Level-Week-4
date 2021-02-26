import { CompletedChallenges } from '../components/completedChallenges/completedChallenges';
import { CountDown } from '../components/CountDown/CountDown';
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from '../components/Perfil/Perfil';

import Head from 'next/head'; 

import styles from '../styles/pages/Home.module.css'; 

export default function Home() {
  return (
    <div className={styles.container}> 
      <ExperienceBar />

      <Head>
        <title>Início | move.it</title>
      </Head>

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
