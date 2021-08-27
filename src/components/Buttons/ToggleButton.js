const ToggleButton = ({onClick, text}) => {
  return <button className="w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mx-auto mb-4 bg-transparent hover:bg-gray-700 font-semibold hover:text-white py-3 px-5 border border-gray-500 hover:border-transparent rounded" onClick={onClick}>
  {text}
</button>;
};

export default ToggleButton;
