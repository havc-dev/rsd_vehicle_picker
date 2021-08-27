const SubmitButton = (props) => {
  return <button className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-transparent hover:bg-purple-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" type="submit" value={props.value} onClick={props.onClick} />;
};

export default SubmitButton;
