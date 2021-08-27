const Feature = ({text, value, units, isMoney}) => {
    if (isMoney) {
        value = parseFloat((parseFloat(value)).toFixed(2)).toLocaleString('en-US', { useGrouping: true });
        return (
            <div className="w-11/12 mx-auto">
              <h5 className="text-white-dark font-bold text-left text-sm">{text}:</h5><h5 className="text-white-light font-bold text-right">${value}{units ? units : null}</h5>
            </div>
        )
    } else {
        return (
            <div className="w-11/12 mx-auto">
              <h5 className="text-white-dark font-bold text-left text-sm">{text}:</h5><h5 className="text-white-light font-bold text-right">{value}{units ? units : null}</h5>
            </div>
        )
    }
    
}

export default Feature
