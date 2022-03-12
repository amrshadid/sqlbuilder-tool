import * as React from 'react';
import {AppContext} from '../../context'
import { Container } from 'react-bootstrap';
import {Xwrapper} from 'react-xarrows';
import Table from '../table'
import Arrow from '../arrow'




export default function Main (props: IMainProps) {
  const context = React.useContext(AppContext)


  return (
    <Container fluid className='main'>
      <Xwrapper>
        {context?.database.schema.map((value,index)=>(
          <Table key={index} name={value.name} att={value.att} left={420*index} top={index+1*100}/>
        ))}
        
        {context?.database.rel.map((rel,index)=>(
          <Arrow key={index} head={rel.head} tail={rel.tail}/>
        ))}

      </Xwrapper>

    </Container>
  );
}
