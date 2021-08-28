const Feature = ({text, value, units, isMoney}) => {
    if (isMoney) {
        value = parseFloat((parseFloat(value)).toFixed(2)).toLocaleString('en-US', { useGrouping: true });
        return (
            <div className="w-11/12 mx-auto">
              <h4 className="capitalize">{text}:</h4><h5>${value}{units ? units : null}</h5>
            </div>
        )
    } else {
        return (
            <div className="w-11/12 mx-auto">
              <h4 className="capitalize">{text}:</h4><h5>{value}{units ? units : null}</h5>
            </div>
        )
    }
    
}

export default Feature
