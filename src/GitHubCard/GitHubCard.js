import React from "react"
import Card from "react-bootstrap/Card"
import Mermaid from './Mermaid.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Mermaid} />
        <Card.Body>
            <Card.Title>Mermaid</Card.Title>
            <Card.Text>
            I am a cartoon character and am one of the world's most recognizable fictional characters.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard