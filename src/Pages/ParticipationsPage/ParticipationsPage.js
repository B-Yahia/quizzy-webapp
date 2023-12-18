import React, { useCallback, useEffect, useState } from "react";
import "./ParticipationsPage.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNotification } from "../../ReduxStrore/NotifSlice";
import axios from "axios";
import Chip2 from "../../UI Elements/Chip/Chip2/Chip2";
import Chip3 from "../../UI Elements/Chip/Chip3/Chip3";

function ParticipationsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [participations, setParticipations] = useState();

  const fetchData = useCallback(async () => {
    const url =
      "https://quizsurveyapp-production.up.railway.app/quiz/" + params.id;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        setParticipations(resp.data.participationList);
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(addNotification("Something went wrong"));
      });
  }, [params, dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="page_container">
      <h1>Participations</h1>
      <div className="participations_page_container">
        {participations.map((part) => (
          <div key={part.id} className="participation">
            <Chip2 text={"Name : " + part.firstName + " " + part.lastName} />
            <Chip3 text={"Score : " + part.score} />
            <button className="btn1">view</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipationsPage;
