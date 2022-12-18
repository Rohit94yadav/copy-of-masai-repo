import "./styles.css";
import { useState } from "react";

const initState = {
  username: "",
  email: "",
  password: "",
  country: "",
  maritalStatus: false
};

export default function App() {
  const [formData, setFormData] = useState(initState);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.checked);
    // console.log(e.target.type);
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setUsers([...users, formData]);
  };

  const { username, email, password, country, maritalStatus } = formData;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>FORMS</h1>

        <label>
          Username :
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email :
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password :
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>Country :</label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="india">INDIA</option>
          <option value="china">CHINA</option>
          <option value="usa">USA</option>
          <option value="canada">CANADA</option>
        </select>
        <br />
        <br />
        <label>
          MARITAL STATUS :
          <input
            type="checkbox"
            name="maritalStatus"
            onChange={handleChange}
            checked={maritalStatus}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />

      {users.map((user) => (
        <li key={user.username}>{user.username}</li>
      ))}
    </div>
  );
}
