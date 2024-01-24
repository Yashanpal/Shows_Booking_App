import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShowData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="center text-center mb-5">Shows List</h1>
      <hr style={{ borderTop: "3px solid black", marginBottom: "20px" }} />
      <div className="row ">
        {showData.map((show) => (
          <div key={show.show.id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ borderRadius: "20px", border: "4px solid black" }}
            >
              <img
                src={
                  show.show.image
                    ? show.show.image.medium
                    : "https://static.tvmaze.com/uploads/images/original_untouched/437/1093589.jpg"
                }
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                  marginTop: "15px",
                  zIndex: "0",
                }}
                className="card-img-top  "
                alt={show.show.name}
              />
              <div className="card-body m-2" style={{}}>
                <h5 className="card-title text-center mb-2 text0">
                  {show.show.name}
                </h5>
                <p>
                  <strong>Genres:</strong> {show.show.genres.join(", ")}
                </p>
                <p>
                  <strong>Language:</strong> {show.show.language}
                </p>
                <p>
                  <strong>Status:</strong> {show.show.status}
                </p>
                <p>
                  <strong>Average Rating:</strong>{" "}
                  {show.show.rating?.average || "Null"}
                </p>
              </div>

              <div className=" containerd-flex text-center m-2">
              <Link
                to={`/show/${show.show.id}`}
                className="btn btn-primary m-2"
                style={{border:"1px solid black",borderRadius:"20px"}}
              >
                View Summary
              </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
      <hr style={{ borderTop: "3px solid black", marginBottom: "20px" }} />
      <div style={{ height: "100px" }} />{" "}
    </div>
  );
};

export default Body;
