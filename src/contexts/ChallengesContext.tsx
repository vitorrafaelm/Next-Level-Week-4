import { createContext, useState, ReactNode } from 'react'; 

interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  challengesCompleted:number;
  levelUp: () => void; 
  startNewChallenge: () => void; 

}

interface ChallengesProviderProps{
  children: ReactNode; 
}

export const ChallegesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExpirience] = useState(0);
  const [ challengesCompleted, setChallengesCompleted] = useState(0); 

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    console.log('new challenge')
  }

  return (
    <ChallegesContext.Provider 
    value={{
          level, levelUp, currentExperience, challengesCompleted, 
          startNewChallenge,
        }}
    >
      {children}
    </ChallegesContext.Provider>
  )
}