const DeleteIcon = ( { color, width, onClick, id }) => {
  return (
    <button className="w-2/12 py-0.5 px-0.5 my-auto mx-0 text-right" onClick={onClick} id={id}>
      <svg
        width={width}
        height={width}
        viewBox="0 0 143 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-1.5 mx-auto"

      >
        <path
          d="M37.5 67H104M71.5 5H128C133.523 5 138 9.47715 138 15V124C138 129.523 133.523 134 128 134H15C9.47715 134 5 129.523 5 124V15C5 9.47715 9.47715 5 15 5H71.5Z"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default DeleteIcon;
