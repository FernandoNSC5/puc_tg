import { Badge, Button } from 'react-bootstrap';

function Item(props) {
  return (
    <tr className="fw-normal">
      <th>
        <img
          src={props.imagePath}
          alt={props.altText}
          style={{ width: "45px", height: "auto" }}
        />
        <span className="ms-2">{props.gameName}</span>
      </th>
      <td className="align-middle">
        <span>{props.description}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <Badge className="mx-2" bg="danger">
            {props.gameStatus}
          </Badge>
        </h6>
      </td>
      <td className="align-middle">
        <Button variant="primary" size="sm" onClick={e => props.showModal('completeGame', props.gameId)}>Complete</Button>{' '}
        <Button variant="warning" size="sm" onClick={e => props.showModal('editGame', props.gameId)}>Edit</Button>{' '}
        <Button variant="danger" size="sm">Delete</Button>
      </td>
    </tr>
  );
}

export default Item;