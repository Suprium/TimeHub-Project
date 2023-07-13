import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SideBar from "../components/SideBar";

const SearchPage = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((resjson) => setUsers(resjson));
  }, []);

  const handleSearch = () => {};
  return (
    <div className="lg:flex">
      <SideBar />
      <div className="min-h-[80vh] w-full flex flex-col items-center justify-start">
        <div className="flex justify-center mt-3">
          <div className="join">
            <input
              className="input input-bordered join-item dark:text-secondary"
              placeholder="Par ici..."
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              className="bg-secondary dark:text-base-100 btn join-item rounded-r-full"
              onClick={handleSearch}
            >
              Chercher
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col  gap-2 flex-grow w-full lg:overflow-y-auto lg:h-[80vh]">
          {users
            .filter(
              (elem) =>
                input.length === 0 ||
                elem.firstname
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase()) ||
                elem.lastname
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase()) ||
                elem.nickname
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase())
            )
            .map((user) => (
              <ProfileCard key={user.id} user={user} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
