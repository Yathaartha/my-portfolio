import { Link } from "react-router-dom";
import Layout from "./Layout";

function Projects() {
  return (
    <Layout pageName="Projects">
      <div style={{ color: "white", textAlign: "center", padding: "2rem" }}>
        <h1>Projects</h1>
        <Link to="/" style={{ color: "#e8e8e8" }}>← Back to Home</Link>
      </div>
    </Layout>
  );
}

export default Projects;
