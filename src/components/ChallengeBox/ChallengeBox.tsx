import { useContext } from 'react';
import { ChallegesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';
import styles from '../../styles/components/ChallengeBox.module.css'; 

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallegesContext); 
  const { resetCountDown } = useContext(CountDownContext); 

  function handleChallengesSucceeded(){
    completeChallenge(); 
    resetCountDown(); 
  }

  function handleChallengesFailed(){
    resetChallenge(); 
    resetCountDown(); 
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Nodo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengesFailed}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceedButton}
              onClick={handleChallengesSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios. 
          </p>
        </div>
      )}
    </div>
  )
}