import { FC, useState } from "react";

const GusetList: FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest list</h3>

      <ul>
        {guests.map((guest, i) => (
          <li key={i}> {guest}</li>
        ))}
      </ul>

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GusetList;
