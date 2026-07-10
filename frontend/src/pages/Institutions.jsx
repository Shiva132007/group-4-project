import { Building2, Search, Network } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Institutions() {
    const navigate = useNavigate();
  return (
    <div className="institutions-page">
     
     <Navbar />
      <h1>Institutions</h1>

      <p className="page-description">
        Explore research organizations and their scientific collaboration relationships.
      </p>
<button
  className="back-btn"
  onClick={() => navigate("/")}
>
  Back to Home
</button>

      <div className="search-box">

        <Search className="search-icon" />

        <input
          type="text"
          placeholder="Search institutions..."
        />

      </div>


      <div className="institution-features">


        <div className="feature-card">

          <Building2 className="feature-icon" />

          <h3>Institution Profiles</h3>

          <p>
            View information about research organizations.
          </p>

        </div>



        <div className="feature-card">

          <Network className="feature-icon" />

          <h3>Collaboration Insights</h3>

          <p>
            Analyze connections between institutions.
          </p>

        </div>



        <div className="feature-card">

          <Building2 className="feature-icon" />

          <h3>Research Domains</h3>

          <p>
            Explore scientific fields and expertise areas.
          </p>

        </div>


      </div>


    </div>
  );
}

export default Institutions;