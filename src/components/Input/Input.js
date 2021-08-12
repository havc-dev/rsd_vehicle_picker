import './Input.css';

const Input = (props) => {
  return (
    <div className="input-group" key={props.key}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
      />
    </div>
  );
};

export default Input;
