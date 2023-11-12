import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, CardBody, Table } from 'react-bootstrap';
import Item from './components/item';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="gradient-custom-2 vh-100">
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md="12" xl="10">
              <Card className="mask-custom">
                <CardBody className="p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width="60"
                    />
                    <hr></hr>
                  </div>
                  <Table className="text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Complement</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Item imagePath="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        altText="avatar 1" gameName="The Legend of Zelda" description="Link's Awakening" gameStatus="playing"/>
                      <Item imagePath="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        altText="avatar 2" gameName="The Legend of Zelda" description="Breath of the Wild" gameStatus="playing"/>
                      <Item imagePath="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        altText="avatar 2" gameName="Super Mario Bros." description="In Wonderland!" gameStatus="playing"/>
                    </tbody>
                  </Table>
                  <hr/>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={handleShow}>
                      Add game
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;