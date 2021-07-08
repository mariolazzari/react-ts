import { FC, useState } from "react";

const users = [
  { name: "Mario", age: 46 },
  { name: "Mary", age: 45 },
];

const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: Number } | undefined>();

  const onClick = () => {
    const user = users.find(u => u.name === name);
    setUser(user);
  };

  return (
    <div>
      <h3>User Search</h3>

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>

      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
