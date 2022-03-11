import * as React from 'react';
import { Container } from 'react-bootstrap';
import Draggable from 'react-draggable';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';

export interface IMainProps {
}

export default function Main (props: IMainProps) {
  const updateXarrow = useXarrow();

  return (
    <Container fluid className='main'>
      <Xwrapper>
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
          <div className='table'>

            <div className='table-name'>
              <h3>User</h3>
            </div>
            
            {/* <div className='upk' id={'one'}> */}
            <div className='attribute' id={'one'}>
              <div className='element'><h3>id</h3></div>
              <div className='element type'><h3>int</h3></div>
              <div className='element pk'><h3>pk</h3></div>
            </div>
            {/* </div> */}

      
            <div className='attribute'>
              <div className='element'><h3>username</h3></div>
              <div className='element type'><h3>Varchar(50)</h3></div>
              <div className='element pk'></div>
            </div>
  
            <div className='attribute'>
              <div className='element'><h3>password</h3></div>
              <div className='element type'><h3>Varchar(50)</h3></div>
              <div className='element pk'></div>
            </div>

          </div>
          </Draggable>

          <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
          <div className='table'>

            <div className='table-name'>
              <h3>User</h3>
            </div>

            <div className='attribute' id={'two'}>
              <div className='element'><h3>id</h3></div>
              <div className='element type'><h3>int</h3></div>
              <div className='element pk'><h3>pk</h3></div>
            </div>
      
            <div className='attribute'>
              <div className='element'><h3>username</h3></div>
              <div className='element type'><h3>Varchar(50)</h3></div>
              <div className='element pk'></div>
            </div>
  
            <div className='attribute'>
              <div className='element'><h3>password</h3></div>
              <div className='element type'><h3>Varchar(50)</h3></div>
              <div className='element pk'></div>
            </div>

          </div>
          </Draggable>

            <Xarrow 
            headShape={'circle'}
            tailShape={'circle'}
            arrowTailProps={{stroke:"#9BA1A6",strokeWidth:".2",fill:'#1A1D1E'}}
            arrowHeadProps={{stroke:"#9BA1A6",strokeWidth:".2",fill:'#1A1D1E'}}
            headSize={3}
            tailSize={3}
            path={'smooth'}
            zIndex={2}
            strokeWidth={2}
            showTail={true}
            color={'#9BA1A6'}
            start={'one'} 
            end="two"
            />

          </Xwrapper>

    </Container>
  );
}
