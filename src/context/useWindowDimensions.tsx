import React from 'react'
import {AppContext} from './index'

export default function useWindowDimensions() {
    const context = React.useContext(AppContext)
    const [windowDimensions, setWindowDimensions] = React.useState(context?.actions.getWindowDimensions());
    
    React.useEffect(() => {
      function handleResize() {
        setWindowDimensions(context?.actions.getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  