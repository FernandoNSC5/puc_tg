import Items from "./components/items";
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div class="container">
      <div class="Header">
        <h1>My Game List</h1>
      </div>
      <div class="Playing">
        <Items blockName="On going list" />
      </div>
      <div class="Wanted">
        <Items blockName="Waiting list" />
      </div>
      <div class="Finished">
        <Items blockName="Finished list" />
      </div>
      <div class="Add-button">
        <Button variant="primary" size="lg">
          Add game
        </Button>
      </div>
    </div>
  );
}

export default App;
