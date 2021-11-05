import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "http://localhost:8080"

function App() {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);
  const [remove, setRemove] = useState([]);

  const getData = () => {
    axios
      .get(`${url}/devices`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  // useEffect(() => {
  //   axios
  //   .get("http://localhost:8081/add")
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data);
  //     setAdd(response.data);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   }); 
  //   axios
  //   .get("http://localhost:8081/remove")
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data);
  //     setRemove(response.data);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span className="detector">USB Detector</span>
        <br />
        <button onClick={getData} className="startButton">Find USB</button>

        <table className="table">
          <thead>
            <tr className="titles">
              <th>Location ID</th>
              <th>Vendor ID</th>
              <th>Product ID</th>
              <th>Device Name</th>
              <th>Manufacturer Name</th>
              <th>Serial Number</th>
              <th>Device Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="data">
                  <td>{item.locationId}</td>
                  <td>{item.vendorId}</td>
                  <td>{item.productId}</td>
                  <td>{item.deviceName}</td>
                  <td>{item.manufacturer}</td>
                  <td>{item.serialNumber}</td>
                  <td>{item.deviceAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
            {/* <p>Device has been inserted: {add}</p>
            <p>Device has been removed: {remove}</p> */}
      </header>
    </div>
  );
}

export default App;
