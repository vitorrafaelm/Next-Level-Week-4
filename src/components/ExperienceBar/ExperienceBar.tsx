import { useContext } from 'react';
import { ChallegesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/experienceBar.module.css'; 

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallegesContext); 

    const  percentToNextLevel = Math.round((currentExperience * 100)/experienceToNextLevel);
    
    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}></div>

                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel}px</span>
        </header>
    )
}