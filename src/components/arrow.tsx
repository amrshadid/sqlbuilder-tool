import * as React from 'react';
import Xarrow from 'react-xarrows';


export default function Arrow (props: IArrowProps) {
  return (
    <Xarrow 
            headShape={'circle'}
            tailShape={'circle'}
            arrowTailProps={{stroke:"#9BA1A6",strokeWidth:".2",fill:'#1A1D1E',fillOpacity:'0.1'}}
            arrowHeadProps={{stroke:"#9BA1A6",strokeWidth:".2",fill:'#1A1D1E',fillOpacity:'0.1'}}
            headSize={3}
            tailSize={3}
            path={'smooth'}
            showTail={true}
            color={'#9BA1A6'}
            start={props.head} 
            end={props.tail} 
            strokeWidth={1.5}
    />
  );
}
