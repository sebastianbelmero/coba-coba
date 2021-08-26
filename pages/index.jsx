import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Container from "../Components/Container";
const index = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="">
      <Container>
        {users.length > 0 ? (
          <div className="flex flex-wrap justify-center">
            {users.map((user, index) => (
              <div className="p-3 w-1/3">
                <div className="w-full bg-red-700 rounded p-3" key={index}>
                  nama : {user.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          "loading..."
        )}
      </Container>
    </div>
  );
};

export default index;
