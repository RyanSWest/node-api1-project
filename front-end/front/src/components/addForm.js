import React, { useState, useEffect } from "react";
import axios from "axios";

const AddForm = () => {
  const initialGuy = {
    name: "",
    bio: ""
  };
  const [guy, setGuy] = useState(initialGuy);

  const adder = () => {
    axios
      .post("http://localhost:4000/api/users", guy)
      .then(res => console.log("NEW GUY", res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form type="submit" onSubmit={adder}>
        <input
          type="text"
          name="name"
          value={guy.name}
          placeholder="name"
          onChange={e => setGuy({ ...guy, name: e.target.value })}
        />
        <input
          type="text"
          name="name"
          value={guy.bio}
          placeholder="bio"
          onChange={e => setGuy({ ...guy, bio: e.target.value })}
        />

        <button type="submit">ENTER</button>
      </form>
    </div>
  );
};

export default AddForm;
