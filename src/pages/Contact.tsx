import { Link } from "react-router-dom";
import Layout from "./Layout";

function Contact() {
  return (
    <Layout pageName="Contact">
      <div style={{ color: "white", textAlign: "center", padding: "2rem" }}>
        <h1>Contact</h1>
        <Link to="/" style={{ color: "#e8e8e8" }}>← Back to Home</Link>
      </div>
    </Layout>
  );
}

export default Contact;
