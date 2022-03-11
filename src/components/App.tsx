import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './main'
import { Container } from 'react-bootstrap';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <Container fluid>
        <Main/>
    </Container>
  );
}

