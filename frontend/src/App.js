import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, CardBody, Table } from 'react-bootstrap';
import Item from './components/item';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function App() {
  const [showModal, setShowModal] = useState({shouldShow: false, type: 'addGame'});
  const [freeGames, setFreeGames] = useState([]);
  const [loadedGames, setLoadedGames] = useState([]);

  var gameOptions = [{}];

  const handleCloseModal = () => setShowModal({shouldShow: false, type: 'all'});
  const handleShowModal = (action, gameId) => {
    // Hanldes 'add game' modal
    if (action === 'addGame') {
      console.log('On add game: ', freeGames);
      setShowModal({shouldShow: true, type: action});
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
    axios.get('/api/freeGames')
    .then(response => {
      gameOptions = response.data;
      setFreeGames(gameOptions);
      console.log('FreeGames:',freeGames);
    })
    .catch(error => {
      console.log(error);
    });

    axios.get('/api')
    .then(response => {
      setLoadedGames(response.data);
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
                      {loadedGames?.map(gameData => {
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
          Add Game
        </Modal.Header>
        <Modal.Body>
          <Form.Select aria-label="Default select example">
            {console.log('Game options: ', freeGames)}
            <option>Select a game</option>
            {freeGames?.map(gameData => {
              return <option key={gameData.id} value={{id: gameData.id, name: gameData.title, complement: gameData.short_description, imgUrl: gameData.game_url}}>{gameData.title}</option> 
            })}
          </Form.Select>
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
