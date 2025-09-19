import React, { useState, createRef } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { toJpeg } from "html-to-image";

import Text from "./Text";

function Edits() {
  const [params] = useSearchParams();
  const imgURL = params.get("url");
  const [txt, setTxt] = useState(0);
  const memeRef = createRef();

  const downloadToJpeg = () => {
    if (!memeRef.current) {
      console.error("ref is empty!");
      return;
    }
    toJpeg(memeRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meme.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Export failed:", err));
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Meme Editor</h1>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <div
                ref={memeRef}
                className="p-3 bg-light rounded meme"
                style={{
                  width: "100%",
                  textAlign: "center"
                  //border: "2px dashed #ccc",
                }}
              >
                <img
                  src={imgURL}
                  width="100%"
                  alt="meme"
                  crossOrigin="anonymous"
                />
                {Array(txt)
                  .fill(0)
                  .map((_, i) => (
                    <Text key={i} />
                  ))}
              </div>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="primary"
              onClick={() => setTxt((cnt) => cnt + 1)}
            >
              ➕ Add Text
            </Button>
            <Button variant="success" onClick={downloadToJpeg}>
              💾 Save Meme
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Edits;
