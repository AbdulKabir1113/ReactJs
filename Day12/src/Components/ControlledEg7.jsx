import { useState } from 'react';

const ControlledEg7 = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    mail: '',
    phone: '',
    age: '',
    gender: '',
    languages: [],
    feedback : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({...user, [name]: value});
  };

  const handleCheckBox = (e) => {
  
    if (e.target.checked) { 
        setUser({ ...user, languages: [...user.languages, e.target.value]});
    } else {
      setUser({ ...user, languages: user.languages.filter((ele) => ele !== e.target.value)});
    }
  };

  return (
    <>
      <form>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>

        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>

        <input type="email" name="mail" value={user.mail} onChange={handleChange}   />

        <input type='tel' name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />

        <input type="text" name="age" value={user.age} onChange={handleChange} placeholder="Age" />

        <br /><br />

        Gender:
        <input type="radio" name="gender" value="Male"  onChange={handleChange}/>
        Male
        <input type="radio" name="gender" value="Female"  onChange={handleChange}/>
        Female

        <br /><br />

        Languages:

        <input type="checkbox" value="English" onChange={handleCheckBox}/> English

        <input type="checkbox" value="Hindi" onChange={handleCheckBox} /> Hindi

        <input type="checkbox" value="Urdu" onChange={handleCheckBox} /> Urdu

        <input type="checkbox" value="Marathi" onChange={handleCheckBox} /> Marathi

        <br /><br />
        FeedBack <br />

        <input type="textarea" name='feedback' value={user.feedback} onChange={handleChange}   />

        <button type="submit">Submit</button>
      </form>

      <h2>Username : {user.username}</h2>
      <h2>Password : {user.password}</h2>
      <h2>Email : {user.mail}</h2>
      <h2>Phone : {user.phone}</h2>
      <h2>Age : {user.age}</h2>
      <h2>Gender : {user.gender}</h2>

      <h2>Languages:</h2>
      <ul>
        {user.languages.map((ele) => (
          <li >{ele}</li>
        ))}
      </ul>

      <h2>FeedBaack : {user.feedback}</h2>
    </>
  );
};

export default ControlledEg7;