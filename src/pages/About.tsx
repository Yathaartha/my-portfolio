import { Link } from "react-router-dom";
import Layout from "./Layout";

function About() {
  return (
    <Layout pageName="About">
      <div style={{ color: "white", textAlign: "center", padding: "2rem" }}>
        <h1>About</h1>
        <Link to="/" style={{ color: "#e8e8e8" }}>← Back to Home</Link>
      </div>
    </Layout>
  );
}

export default About;
