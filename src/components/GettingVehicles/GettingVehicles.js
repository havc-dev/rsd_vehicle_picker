import { useState } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const GettingVehicles = () => {
    let [loading, setLoading] = useState(true);
    // let [vehicleList, setVehicleList] = useState([]);

    // const fetchSavedVehicles = (e) => {
    //     e.preventDefault()
    //     setLoading(true)        
    //     let localVehicles = JSON.parse(localStorage.getItem('user'));
    // }
    console.log(setLoading.arguments)
    return (
        <div>
            {loading?
            <CircleLoader
                loading={true }
                color="#000000"
                css={override}
                speedMultiplier={1}
                size={180}
            /> 
            :null}
           <p>Trying to retrieve data</p>
        </div>
    )
}

export default GettingVehicles


    // <div className="sweet-loading">
    //   <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    //   <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

    //   <ClipLoader color={color} loading={loading} css={override} size={150} />
    // </div>Ç