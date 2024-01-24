
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowSummary = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div className="container">
      {showDetails ? (
        <div>
          <h2 className="text-center my-5">{showDetails.name} Summary</h2>
          <h5
            className="card-text"
            style={{
              fontWeight: "normal",
              wordSpacing: "0.2em",
              textAlign: "justify",
              lineHeight: "1.5",
            }}
          >
            {showDetails?.summary
              ?.replace(/<b>/g, "")
              .replace(/<\/b>/g, "")
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, "")}
          </h5>
          <div className="d-flex justify-content-center">
           
            <Link
              to={`/book/${id}/${encodeURIComponent(showDetails.name)}`}
              className="btn btn-danger m-2"
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              Book 
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default ShowSummary;
