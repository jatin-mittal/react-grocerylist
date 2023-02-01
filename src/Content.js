import { FaTrashAlt } from "react-icons/fa";

function Content({ items, handleClick, handleDelete }) {
  return (
    <>
      <main>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleClick(item.id);
                }}
              />
              <label
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
                onDoubleClick={() => {
                  handleClick(item.id);
                }}
              >
                {" "}
                {item.title}{" "}
              </label>
              <button onClick={() => handleDelete(item.id)}>
                {" "}
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Content;
