const Checkbox = ({text, value, id}) => {
    return (
        <div>
            <input type="checkbox" id={id} value={value}/>
            <label>{text}</label>
        </div>
    )
}

export default Checkbox
