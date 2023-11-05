import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

import MovieDetail from "../components/MovieDetail.jsx";

import styles from "./search.module.css";

const SearchPage = () => {
  //state từ khóa tìm kiếm
  const [keyword, setKeyword] = useState("");
  //state tên thể loại genre
  const [genre, setGenre] = useState("Select Genre");
  //state thể loại phim media type
  const [mediaType, setMediaType] = useState("Select Media Type");
  //state ngôn ngữ
  const [lang, setLang] = useState("Select Language");
  //state năm phát hành
  const [year, setYear] = useState("Select Year");
  //state danh sách phim thỏa điều kiện
  const [movies, setMovies] = useState([]);
  //state không tìm thấy phim thỏa điều kiện
  const [foundNo, setFoundNo] = useState(false);

  //state phim được click
  const [selectedMovie, setSelectedMovie] = useState([]);
  //state thông tin video của bộ phim để hiển thị trailer
  const [videos, setVideos] = useState([]);
  //state ẩn, hiện thông tin chi tiết của phim
  const [hideDetail, setHideDetail] = useState(true);

  //Hàm xử lý reset
  const resetHandler = () => {
    setKeyword("");
    setGenre("Select Genre");
    setMediaType("Select Media Type");
    setLang("Select Language");
    setYear("Select Year");
  };
  //Hàm tìm kiếm phim
  const submitForm = () => {
    console.log({
      keyword: keyword.toLowerCase(),
      genre: genre.toLowerCase(),
      mediaType: mediaType.toLowerCase(),
      lang: lang.toLowerCase(),
      year: year.toLowerCase(),
    });
    if (keyword === "") {
      alert("Bạn chưa nhập từ khóa tìm kiếm");
    } else {
      fetch("https://movie-app-backend-woeq.onrender.com/movies/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: keyword.toLowerCase(),
          genre: genre.toLowerCase(),
          mediaType: mediaType.toLowerCase(),
          lang: lang.toLowerCase(),
          year: year.toLowerCase(),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result.length === 0) {
            setFoundNo(true);
          } else if (data.result.length > 0) {
            setMovies(data.result);
            setFoundNo(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //Hàm lấy thông tin của phim được click
  const selectMovie = (movie) => {
    // console.log(movie, selectedMovie[0]);
    if (selectedMovie.length === 0) {
      setSelectedMovie([movie]);
    } else if (selectedMovie.length > 0) {
      if (movie._id !== selectedMovie[0]._id) {
        setSelectedMovie([movie]);
      } else if (movie._id === selectedMovie[0]._id) {
        setSelectedMovie([]);
        setHideDetail(true);
      }
    }
    fetch(
      `https://movie-app-backend-woeq.onrender.com/movies/get-video/${movie._id}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setVideos(data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Container className="col-5" style={{ backgroundColor: "white" }}>
        <Form className="py-2">
          <Form.Group
            as={Row}
            className="border-bottom border-primary d-flex justify-content-between"
            style={{ marginBottom: "1rem" }}
          >
            <Col style={{ marginLeft: "1rem" }}>
              <Form.Control
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                className="border-0"
                type="text"
                placeholder="batman"
              />
            </Col>
            <Col className="col-1" style={{ marginRight: "1rem" }}>
              <Search size={20} style={{ color: "#cccccc" }} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Select
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              >
                <option value={genre}>{genre}</option>
                {["Action", "Comedy", "Documentary", "Horror", "Romance"]
                  .filter((item) => item !== genre)
                  .sort((a, b) => a - b)
                  .map((item) => (
                    <option key={(Math.random() * 10).toString()} value={item}>
                      {item}
                    </option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={mediaType}
                onChange={(e) => {
                  setMediaType(e.target.value);
                }}
              >
                <option value={mediaType}>{mediaType}</option>
                {["All", "Movie", "TV", "Person"]
                  .filter((item) => item !== mediaType)
                  .sort((a, b) => a - b)
                  .map((item) => (
                    <option key={(Math.random() * 10).toString()} value={item}>
                      {item}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                }}
              >
                <option value={lang}>{lang}</option>
                {["English", "Japan", "Korean"]
                  .filter((item) => item !== lang)
                  .sort((a, b) => a - b)
                  .map((item) => (
                    <option
                      key={(Math.random() * 10).toString()}
                      value={
                        item === "English"
                          ? "en"
                          : item === "Japan"
                          ? "ja"
                          : "ko"
                      }
                    >
                      {item}
                    </option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              >
                <option value={year}>{year}</option>
                {[
                  "2024",
                  "2023",
                  "2022",
                  "2021",
                  "2020",
                  "2019",
                  "2018",
                  "2017",
                  "2016",
                ]
                  .filter((item) => item !== year)
                  .sort((a, b) => b - a)
                  .map((item) => (
                    <option key={(Math.random() * 10).toString()} value={item}>
                      {item}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group className="my-4" style={{ textAlign: "right" }}>
            <Button
              onClick={resetHandler}
              style={{
                marginRight: "1rem",
                backgroundColor: "white",
                color: "gray",
                fontWeight: "600",
                border: "none",
              }}
            >
              RESET
            </Button>
            <Button
              onClick={submitForm}
              style={{ marginRight: "1rem", fontWeight: "600" }}
            >
              SEARCH
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <div className="mx-4" style={{ color: "white" }}>
        <h3>Search Result</h3>
        {foundNo && <h4>Found no movies.</h4>}
        {movies.length > 0 && !foundNo && (
          <Container className="my-5">
            {/* <Carousel.Item> */}
            {movies.map((movie) => (
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  selectMovie(movie);
                  setHideDetail(false);
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            ))}
            {/* </Carousel.Item> */}
          </Container>
        )}
        {selectedMovie.length > 0 && !hideDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
