import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AppProvider} from '../context'
import Main from './main'
import Sidebar from './navbar'

export default function App(props: IAppProps) {

  return (
    <AppProvider>
      <>
        <Sidebar/>
        <>
          <Main />
        </>
      </>
    </AppProvider>

  );
}

