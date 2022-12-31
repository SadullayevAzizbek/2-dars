import "./list-item.css";

const ListItem = ({ text, isComplate }) => {
  return (
    <li className="d-flex align-items-center my-3">
      {isComplate ? (
        <input className="form-check-input" defaultChecked={isComplate} type="checkbox" />
      ) : (
        <input className="form-check-input" type="checkbox" />
      )}
      <strong className="mx-3">{text}</strong>
      <button className="mx-2  btn btn-warning">Edit</button>
      <button className="mx-2  btn btn-danger">Delete</button>
    </li>
  );
};

export default ListItem;
