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
  const [modalGameSimplified, setModalGameSimplified] = useState({});

  var gameOptions = [{}];

  const handleSelectedGame = (event) => {
    setSelectedGame(JSON.parse(event.target.value));
    handleShowModal('addGame');
  }

  const handleComplete = (gameId, isCompleted) => {
    if (gameId === undefined) {
      console.log('Game ID not valid');
      return;
    }

    console.log('',gameId, ' - ', isCompleted)
    let data = {};
    data.freeGameId = gameId;
    data.isCompleted = !isCompleted;

    axios.patch('/api', data, {
      hearders: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      axios.get('/api')
      .then(response => {
        setLoadedGames(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    })

    handleCloseModal();
  }

  const handleDelete = (gameId) => {
    console.log('Deleting ', gameId);
    let data = {};
    data.freeGameId = gameId;

    axios.delete('/api', {
      hearders: {
        'Content-Type': 'application/json'
      },
      data: data
    }).then(response => {
      axios.get('/api')
      .then(response => {
        setLoadedGames(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    })

    handleCloseModal();

  }

  const handleSave = () => {
    let data = {};
    data.freeGameId = selectedGame.id;
    data.title = selectedGame.title;
    data.thumbnail = selectedGame.thumbnail;
    data.shortDescription = selectedGame.short_description;
    data.genre = selectedGame.genre;
    data.platform = selectedGame.platform;
    data.developer = selectedGame.developer;
    data.publisher = selectedGame.publisher;
    data.releaseDate = selectedGame.release_date;
    data.isCompleted = selectedGame.completed != null ? selectedGame.completed : false;

    console.log('Saving ', data)

    axios.post('/api', data, {
      hearders: {
        'Content-Type': 'application/json'
      }
    })

    let parsedLoadedGames = JSON.parse(JSON.stringify(loadedGames));
    data.key = selectedGame.freeGameId;
    parsedLoadedGames.push(data);
    setLoadedGames(parsedLoadedGames);
    setSelectedGame(null);
    handleCloseModal();
  }

  /**************************************************
   *   Modals logic
   *************************************************/
  const handleCloseModal = () => {
    setSelectedGame(null);
    setShowModal({shouldShow: false, type: 'all'})
  };

  const handleShowModal = (action, gameSimplified) => {
    // Hanldes 'add game' modal
    if (action === 'addGame') {
      setShowModal({shouldShow: true, type: action});
    }

    if (action === 'completeGame') {
      setModalGameSimplified(gameSimplified);
      setShowModal({shouldShow: true, type: action});
    }
  };

  /**************************************************
   *   Loads list of registeded games
   *************************************************/
  // calls freegames.com api
  useEffect(() => {
    axios.get('/api/freeGames')
    .then(response => {
      gameOptions = response.data;
      setFreeGames(gameOptions);
    })
    .catch(error => {
      console.log(error);
    });

    // returns all saved games
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
                      {loadedGames?.length > 0 ? (loadedGames?.map(gameData => {
                        return <Item key={gameData.freeGameId} imagePath={gameData.thumbnail}
                        gameId={gameData.freeGameId} gameName={gameData.title}
                        description={gameData?.shortDescription} gameStatus={gameData?.isCompleted}
                        showModal={handleShowModal} deleteEntry={handleDelete}/>
                      })) : (<tr><td>No data</td><td>-</td><td>-</td><td>-</td></tr>)}
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
                <Form>
                  <Form.Check
                    onChange={e => {selectedGame.completed != null 
                      ? (selectedGame.completed = !selectedGame.completed) : (selectedGame.completed = true)}}
                    type='switch'
                    id='completed-switch'
                    label="Game Completed" />
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/** CONFIRM COMPLETION MODAL */}
      <Modal show={showModal.shouldShow && showModal.type === 'completeGame'} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <b>{modalGameSimplified?.gameName}</b>
        </Modal.Header>
        <Modal.Body>
          Do you realy want to  complete {modalGameSimplified?.gameName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={e => handleComplete(modalGameSimplified.gameId, modalGameSimplified.gameStatus)}>
            Complete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
