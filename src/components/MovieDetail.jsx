import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";

const MovieDetail = React.memo((props) => {
  return (
    <Container className="mb-4" style={{ color: "white" }}>
      <Row>
        <Col>
          <h3 className="border-bottom py-3">
            {props.movie[0].title
              ? props.movie[0].title
              : props.movie[0].original_title
              ? props.movie[0].original_title
              : props.movie[0].original_name}
          </h3>
          <p style={{ fontWeight: "bold" }}>
            Release Date:{" "}
            {props.movie[0].release_date
              ? props.movie[0].release_date
              : props.movie[0].first_air_date}
          </p>
          <p
            style={{
              fontWeight: "bold",
              marginTop: "-1rem",
              marginBottom: "1rem",
            }}
          >
            Vote: {props.movie[0].vote_average} / 10
          </p>
          <p>{props.movie[0].overview}</p>
        </Col>
        {props.videos.length === 0 && (
          <Col>
            <Image
              width="100%"
              src={`https://image.tmdb.org/t/p/original/${props.movie[0].backdrop_path}`}
            />
          </Col>
        )}
        {props.videos.length > 0 && (
          <Col>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                height="400"
                width="100%"
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${props.videos[0].key}`}
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
});

export default MovieDetail;
