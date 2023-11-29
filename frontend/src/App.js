import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, CardBody, Table } from 'react-bootstrap';
import Item from './components/item';
import axios from 'axios';


function App() {
  const [show, setShow] = useState(false);
  const [gamesData, setGamesData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get('/api')
    .then(response => {
      setGamesData(response.data);
      console.log('Other way: ', response.data);
      setShow(true);
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios.get('/api')
    .then(response => {
      setGamesData(response.data);
      console.log(response.data);
      setShow(true);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  console.log(gamesData);

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
                      {gamesData?.map(gameData => {
                        return <Item imagePath={'data:image/jpeg;base64,' + gameData.byteArray}
                        altText="avatar 1" gameName={gameData.name} description={gameData?.complement} gameStatus={gameData?.status}/>
                      })}
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
          {/* <Modal.Title>{gamesData.at(0)?.name}</Modal.Title> */}
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
