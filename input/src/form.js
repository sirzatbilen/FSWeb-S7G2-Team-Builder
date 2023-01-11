import React, { useState } from "react";
import List from "./components/List";

export default function Form() {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState({
    id: 0,
    isim: "",
    mail: "",
    rol: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const oldMember = array.find((item) => item.id === value.id);
    if (oldMember === undefined) {
      value.id = array.length === 0 ? 1 : array[array.length - 1].id + 1;
      setArray([...array, value]);
    } else {
      const index = array.indexOf(oldMember);
      oldMember.isim = value.isim;
      oldMember.mail = value.mail;
      oldMember.rol = value.rol;
      array[index] = oldMember;
    }
    setValue({
      id: null,
      isim: "",
      mail: "",
      rol: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="hidden" value={value.id} id="id" />
        <label htmlFor="">
          İsim:
          <input
            onChange={handleChange}
            id="isim"
            type="text"
            value={value.isim}
          />
        </label>
        <label htmlFor="">
          email:
          <input
            onChange={handleChange}
            id="mail"
            type="text"
            value={value.mail}
          />
        </label>
        <label htmlFor="">
          rol:
          <input
            onChange={handleChange}
            id="rol"
            type="text"
            value={value.rol}
          />
        </label>
        <button>Ekle</button>
      </form>
      <List array={array} setValue={setValue} setArray={setArray} />
    </div>
  );
}
