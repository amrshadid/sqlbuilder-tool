import * as React from 'react';
import {db} from '../components/sampledata'


export const AppContext = React.createContext<IcontextProps|null>(null)

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [database,setDatabase] = React.useState(db)




    const handleNewData=(data:string)=>{
      setDatabase(JSON.parse(data))
    }

    let actions={
      handleNewData,
    }
  return (
    <AppContext.Provider value={{database,actions}}>
        {children}
    </AppContext.Provider>
  );
}
