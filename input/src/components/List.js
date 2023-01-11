import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function List({ array, setValue, setArray }) {
  function editClick(item) {
    setValue(item);
  }
  function deleteClick(item) {
    setArray(
      array.filter((sayac) => {
        return item.id !== sayac.id;
      })
    );
  }

  console.log(array);
  const render = array.map((item, sayac) => {
    return (
      <div key={sayac}>
        <AiFillEdit onClick={() => editClick(item)} />
        <AiFillDelete onClick={() => deleteClick(item)} />
        <span>isim: {item.isim} </span>
        <span>mail: {item.mail} </span>
        <span>rol: {item.rol} </span>
      </div>
    );
  });
  return <div>{render}</div>;
}
