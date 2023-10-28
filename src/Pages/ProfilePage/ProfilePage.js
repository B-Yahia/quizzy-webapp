import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import ProfileQuizzesMainCard from "../../Components/Cards/Quiz/ProfileQuizzesMainCard/ProfileQuizzesMainCard";

function ProfilePage() {
  const userId = localStorage.getItem("userId");
  const [data, setData] = useState({});

  const fetchData = async (e) => {
    const url = "http://localhost:8080/author/" + userId;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page_container">
      <div className="page_title">Welcome</div>

      <button>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          Go Home Page
        </Link>
      </button>

      <div className="user_info">
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p> {data.username} </p>
        <p>Date of birth</p>
        <p>{data.email}</p>
      </div>
      {!!data && <ProfileQuizzesMainCard quizzes={data.quizzes} />}
    </div>
  );
}

export default ProfilePage;
