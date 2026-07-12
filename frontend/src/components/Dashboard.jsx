import { Users, FileText, Network } from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="stat-card">

        <Users className="card-icon" />

        <h3>Research Community</h3>

        <p>Author Mapping</p>

        <span>
          Identify researcher connections and collaboration patterns
        </span>

      </div>


      <div className="stat-card">

        <FileText className="card-icon" />

        <h3>Publication Analysis</h3>

        <p>Paper Insights</p>

        <span>
          Analyze research output, topics, and citation relationships
        </span>

      </div>


      <div className="stat-card">

        <Network className="card-icon" />

        <h3>Network Intelligence</h3>

        <p>Collaboration Graphs</p>

        <span>
          Visualize links between authors and institutions
        </span>

      </div>

    </div>
  );
}

export default Dashboard;