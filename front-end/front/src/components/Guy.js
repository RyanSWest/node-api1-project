import React, { useState } from "react";
import axios from "axios";

const Guy = props => {
  const editGuy = {
    name: "",
    bio: ""
  };

  const [editing, setEditing] = useState(false);
  const [changedGuy, setChangedGuy]=useState(editGuy)


  const deleteGuy = guy => {
    axios
      .delete(`http://localhost:4000/api/users/${props.stuff.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const updateGuy = guy=> {
      axios.put(`http://localhost:4000/api/users/${props.stuff.id}`,changedGuy)
      .then(res=> console.log('EDIT GUY', res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="guy-div">
      <h1>{props.stuff.name}</h1>
      <h2>{props.stuff.bio}</h2>
      <h3>{props.stuff.id}</h3>
      <button onClick={deleteGuy}>X</button>
      <button onClick ={setEditing}>EDIT</button>
      {editing && (
        <form>
          <input type="text"
           placeholder="name"
           value = {changedGuy.name}
           onChange= {e => setChangedGuy({...changedGuy, name: e.target.value})} />
           <input type="text"
           placeholder="bio"
           value = {changedGuy.bio}
           onChange= {e => setChangedGuy({...changedGuy, bio: e.target.value})} />

           <button onClick = {updateGuy}>ENTER</button>

           <button onClick={setEditing}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Guy;
