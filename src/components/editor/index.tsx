import * as React from 'react';
import AceEditor from 'react-ace';

import './editor.css'


export default function Editor (props: IEditorProps) {


  const onChange=(newValue:string)=> {
      props.setData(newValue)
      console.log(props.data)
  }
  return (

    <AceEditor
          style={{width:"100%"}}
          className='editor'
          value={props.data}
          mode="json"
          onChange={(val) => onChange(val)}

    />

  );
}
