import * as React from 'react';
import { AppContext } from '../../context'

import { Modal, Button, Form, Container } from 'react-bootstrap';

import Editor from '../editor'
import './modal.css'
import { db } from '../sampledata'


export default function ModalView(props: IModalViewlProps) {
  const context = React.useContext(AppContext)
  const [show, setShow] = React.useState<boolean>(false)
  const [manual, setShowManual] = React.useState<boolean>(false)

  const [jsonDatabase, setJsonDatabase] = React.useState<string>(JSON.stringify(context?.database, null, "\t"))

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = () => {
    setJsonDatabase(JSON.stringify(context?.database, null, "\t"))
    setShow(true)
  };

  const handleApply = () => {
    context?.actions.handleNewData(jsonDatabase)
    setShow(false)

  }
  const handleManual = () => {
    setShowManual(!manual)
  }
  return (
    <>
      <Button variant="outline-primary" className='btn-modal' onClick={handleShow}>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{manual ? "User Manual" : "JSON Editor"}</Modal.Title>
        </Modal.Header>

        <Container className='d-flex justify-content-end m-2'>

        </Container>

        <Modal.Body>
          {!manual ?
            <Editor data={jsonDatabase} setData={setJsonDatabase} />
            :
            <Form.Control disabled className='manual' as="textarea" rows={3} >
              {JSON.stringify(db, null, '\t')}
            </Form.Control>

          }

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="outline-primary" className='btn-modal' onClick={handleManual}>
            {manual ? "Open Editor" : "Open Manual"}
          </Button>

          <Button variant="primary" className='btn-modal' onClick={handleApply}>
            apply
          </Button>
          
        </Modal.Footer>
      </Modal>

    </>
  );
}
