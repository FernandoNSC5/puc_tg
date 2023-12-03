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
  const [showModal, setShowModal] = useState({shouldShow: false, type: 'addGame'});
  const [gamesData, setGamesData] = useState([]);

  const handleCloseModal = () => setShowModal({shouldShow: false, type: 'all'});
  const handleShowModal = (action, gameId) => {
    // Hanldes 'add game' modal
    if (action === 'addGame') {
      axios.get('/api')
      .then(response => {
        setGamesData(response.data);
        setShowModal({shouldShow: true, type: action});
      })
      .catch(error => {
        console.log(error);
      });
    }

    if (action === 'completeGame') {
      setShowModal({shouldShow: true, type: action});
      console.log(gameId);
    }

    if (action === 'editGame') {
      setShowModal({shouldShow: true, type: action});
      console.log(gameId);
    }
  };

  // Loads list registeded games
  useEffect(() => {
    axios.get('/api')
    .then(response => {
      setGamesData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

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
                        altText="avatar 1" gameId={gameData.id} gameName={gameData.name} description={gameData?.complement} gameStatus={gameData?.status} showModal={handleShowModal}/>
                      })}
                    </tbody>
                  </Table>
                  <hr/>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={e => handleShowModal('addGame')}>
                      Add game
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/*****************
      **  ALL PAGE MODALS 
      *******************/}

      {/* ADD GAME MODAL */}
      <Modal show={showModal.shouldShow && showModal.type === 'addGame'} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          Add Games
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* EDIT GAME MODAL */}
      <Modal show={showModal.shouldShow && showModal.type === 'editGame'} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          Edit Game
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/** CONFIRM COMPLETION MODAL */}
      <Modal show={showModal.shouldShow && showModal.type === 'completeGame'} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          Complete Game
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
