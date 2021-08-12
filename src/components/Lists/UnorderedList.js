const UnorderedList = (props) => {
  return (
    <div className="unordered-list">
      <ul>{props.children}</ul>
    </div>
  );
};

export default UnorderedList;
