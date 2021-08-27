

const Input = ({id, type, errors, label}) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-accent capitalize mb-1" htmlFor={id}>{label}</label>
            <input className="placeholder-black-lightest bg-purple-700 text-white capitalize bg-black-dark focus:outline-white" type={type} id={id} name={id} placeholder={label} />
            <p>{errors}</p>
        </div>
    )
}

export default Input


