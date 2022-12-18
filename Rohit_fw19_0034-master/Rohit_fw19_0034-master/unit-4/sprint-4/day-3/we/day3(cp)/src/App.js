import "./App.css";
import { useState, useEffect } from "react";
// import { getuser } from "./components/api";
// import { adduser } from "./components/api";
import axios from "axios";
import { UserRow } from "./components/UserRow";

export const getuser = () => {
  return axios.get(`http://localhost:3000/user`);
};

export const adduser = (data={}) => {
  return axios.post(`http://localhost:3000/user`,{
    name:data.name,
    gender:data.gender,
    role:data.role,
    maritalStatus:data.maritalStatus
  });
};
function App() {

  
  const [data, setdata] = useState([]);
  const [formval, addform] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: "",
  });

  const handlechange = (e) => {
    const { name, value, type } = e.target;
    const val =type === "checkbox" && value === "" ? value = "Unmarried" : value;

    addform({
      ...formval,
      [name]: val,
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    alldata(formval);
  };

  const fetchdata = () => {
    getuser()
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
    // .finally(()=>console.log("Completed"))
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const alldata = (data) => {
    adduser(data).then(() => {
      fetchdata();
    });
  };

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={onsubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formval.name}
                onChange={handlechange}
              />
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" onChange={handlechange}>
                <option>Prefer Not to Say</option>
                <option value={formval.male}>Male</option>
                <option value={formval.female}>Female</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" onChange={handlechange}>
                <option value="FrontEnd">FrontEnd</option>
                <option value="Devloper">Developer</option>
                <option value="backend">BackEnd Developer</option>
                <option value="fullstrack">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                <input
                  type="checkbox"
                  name="maritalStatus"
                  value="Married"
                  onChange={handlechange}
                />
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <label>Married</label>
              </div>
            </div>
            <div>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <br /> <br /> <br />
      <div>
        <table style={{ margin: "auto", border: "1px solid black" }}>
          <tr>
            <th>S.no</th>
            <th>User</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Marital Status</th>
          </tr>
          <tr>
            {data?.map((item) => (
              <UserRow
                name={item.name}
                gender={item.gender}
                maritalStatus={item.maritalStatus}
                role={item.role}
                id={item.id}
              />
            ))}
          </tr>
        </table>
      </div>
      <h2 data-testid="no-user-container">no users found</h2>
    </div>
  );
}

export default App;
