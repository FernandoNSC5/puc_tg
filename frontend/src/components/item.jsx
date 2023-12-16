import { Badge, Button, Image } from 'react-bootstrap';

function Item(props) {
  return (
    <tr className="fw-normal">
      <th>
        <Image src={props.imagePath} style={{ width: "5em", height: "auto" }} rounded/>
      </th>
      <td className="align-middle" style={{width: "40em", height: "auto"}}>
        <span>{props.description}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <Badge className="mx-2" bg={props.gameStatus ? 'success' : 'danger'}>
            {props.gameStatus ? 'Completed' : 'Playing'}
          </Badge>
        </h6>
      </td>
      <td className="align-middle">
        <Button variant="primary" size="sm" disabled={props.gameStatus} onClick={e => props.showModal('completeGame', props)}>Complete</Button>{' '}
        <Button variant="danger" size="sm" onClick={e => props.deleteEntry(props.gameId)}>Delete</Button>
      </td>
    </tr>
  );
}

export default Item;