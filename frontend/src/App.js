import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, CardBody, Image, Table } from 'react-bootstrap';
import Item from './components/item';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function App() {
  const [showModal, setShowModal] = useState({shouldShow: false, type: 'addGame'});
  const [freeGames, setFreeGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loadedGames, setLoadedGames] = useState([]);

  var gameOptions = [{}];

  const handleSelectedGame = (event) => {
    setSelectedGame(JSON.parse(event.target.value));
    handleShowModal('addGame');
  }

  /**************************************************
   *   Modals logic
   *************************************************/
  const handleCloseModal = () => setShowModal({shouldShow: false, type: 'all'});
  const handleShowModal = (action, gameId) => {
    // Hanldes 'add game' modal
    if (action === 'addGame') {
      setShowModal({shouldShow: true, type: action});
    }

    if (action === 'completeGame') {
      setShowModal({shouldShow: true, type: action});
    }

    if (action === 'editGame') {
      setShowModal({shouldShow: true, type: action});
    }
  };

  /**************************************************
   *   Loads list of registeded games
   *************************************************/
  useEffect(() => {
    axios.get('/api/freeGames')
    .then(response => {
      gameOptions = response.data;
      setFreeGames(gameOptions);
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


  /**************************************************
   *   Page data
   *************************************************/
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
                    <Form.Select onChange={handleSelectedGame} aria-label="Select a game">
                      <option>Add a game</option>
                      {freeGames?.map(gameData => {
                        return <option key={gameData.id} value={JSON.stringify(gameData)}>{gameData.title}</option> 
                      })}
                    </Form.Select>
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
      <Modal show={showModal.shouldShow && showModal.type === 'addGame'} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <h3>{selectedGame?.title}</h3>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md="auto">
                <Image src={selectedGame?.thumbnail} style={{ width: "15em", height: "auto" }} rounded/>
              </Col>
              <Col xs lg="7">
                <p>{selectedGame?.short_description}</p>
                <p><strong>{selectedGame?.developer}</strong> - {selectedGame?.release_date}</p>
              </Col>
            </Row>
          </Container>
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
