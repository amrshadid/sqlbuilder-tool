import * as React from 'react';
import { AppContext } from '../../context'
import { Container } from 'react-bootstrap';
import { Xwrapper } from 'react-xarrows';
import Table from '../table'
import Arrow from '../arrow'
import { useXarrow } from 'react-xarrows';
import useWindowDimensions from '../../context/useWindowDimensions'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


export default function Main(props: IMainProps) {
  const context = React.useContext(AppContext)
  const { height, width } = useWindowDimensions();
  const [isMoveable, setIsMoveable] = React.useState<boolean>(false);
  const updateXarrow = useXarrow();

  const onDrag = () => {
    setIsMoveable(true)
    updateXarrow()

  }
  const onStop = () => {
    setIsMoveable(false)
    updateXarrow()

  }

  return (
    <>
      <TransformWrapper
        initialScale={1}
        disabled={isMoveable}
        minScale={.5}
        maxScale={3}
        limitToBounds={false}
        onPanning={updateXarrow}
        onZoom={updateXarrow}
        pinch={{ step: 5 }}
      >

        <TransformComponent contentClass='main' wrapperStyle={{ height: height, width: width }}>


          {context?.database.schema.map((value, index) => (
            <Table key={index} name={value.name} att={value.att} onDrag={onDrag} onStop={onStop} left={420 * index} top={index + 1 * 100} />
          ))}

        </TransformComponent>
      </TransformWrapper>
      <Xwrapper>

        {context?.database.rel.map((rel, index) => (
          <Arrow key={index} head={rel.head} tail={rel.tail} />
        ))}
      </Xwrapper>

    </>
  );
}
