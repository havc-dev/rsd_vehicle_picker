const Feature = ({text, value, units, isMoney}) => {
    if (isMoney) {
        value = parseFloat((parseFloat(value)).toFixed(2)).toLocaleString('en-US', { useGrouping: true });
        return (
            <div className="w-full">
              <h3 className="capitalize text-gray-400">{text}:</h3><h4>${value}{units ? units : null}</h4>
            </div>
        )
    } else {
        return (
            <div className="w-full">
              <h3 className="capitalize text-gray-400">{text}:</h3><h4>{value}{units ? units : null}</h4>
            </div>
        )
    }
    
}

export default Feature
