import { useEffect, useState, useCallback } from "react";
import { Carousel, Card, Button } from "react-bootstrap";

import MovieDetail from "../components/MovieDetail";

import styles from "./home.module.css";

const Home = () => {
  //state danh sách phim Xu hướng
  const [trending, setTrending] = useState([]);
  //state danh sách phim Xếp hạng cao
  const [rating, setRating] = useState([]);
  //state danh sách phim Hành động
  const [action, setAction] = useState([]);
  //state danh sách phim Hài
  const [comedy, setComedy] = useState([]);
  //state danh sách phim Kinh dị
  const [horror, setHorror] = useState([]);
  //state danh sách phim Lãng mạn
  const [romance, setRomance] = useState([]);
  //state danh sách phim Tài liệu
  const [documentary, setDocumentary] = useState([]);

  //state phim được click
  const [selectedMovie, setSelectedMovie] = useState([]);
  //state hiển thị thông tin chi tiết phim trong danh sách phát hành gần nhất
  const [hideLastestDetail, setHideLastestDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Xu hướng
  const [hideTrendingDetail, setHideTrendingDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Xếp hạng cao
  const [hideRatingDetail, setHideRatingDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Hành động
  const [hideActionDetail, setHideActionDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Hài
  const [hideComedyDetail, setHideComedyDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Kinh dị
  const [hideHorrorDetail, setHideHorrorDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Lãng mạn
  const [hideRomanceDetail, setHideRomanceDetail] = useState(true);
  //state hiển thị thông tin chi tiết phim Tài liệu
  const [hideDocumentaryDetail, setHideDocumentaryDetail] = useState(true);
  //state thể loại đang xem thông tin chi tiết
  const [currentType, setCurrentType] = useState("");
  //state thông tin video của bộ phim để hiển thị trailer
  const [videos, setVideos] = useState([]);

  //state bộ phim dùng để hiển thị lên banner
  const [banner, setBanner] = useState({
    title: "Top Gun: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy's top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
  });
  //state danh sách 20 bộ phim có ngày ra mắt gần nhất
  const [latestMovies, setLatestMovies] = useState([]);

  //Hàm lấy ngẫu nhiên 1 bộ phim trong số 20 bộ phim có ngày ra mắt gần nhất
  //để hiển thị lên banner
  const fetchMovie = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-latest-movies"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(
        //   data.result[Math.ceil(Math.random() * data.result.length - 1)]
        // );
        setLatestMovies(data.result);
        setBanner(
          data.result[Math.ceil(Math.random() * data.result.length - 1)]
        );
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchMovie(), [fetchMovie]);

  //Hàm lấy danh sách phim Xu hướng
  const fetchTrending = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-trending-movies"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTrending(data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchTrending(), [fetchTrending]);

  //Hàm lấy danh sách phim Xếp hạng cao
  const fetchRating = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies-by-rating"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setRating(data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchRating(), [fetchRating]);

  //Hàm lấy danh sách phim Hành động
  const fetchAction = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies/action"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAction(data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchAction(), [fetchAction]);

  //Hàm lấy danh sách phim Hài
  const fetchComedy = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies/comedy"
    )
      .then((response) => response.json())
      .then((data) => setComedy(data.result))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchComedy(), [fetchComedy]);

  //Hàm lấy danh sách phim Kinh dị
  const fetchHorror = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies/horror"
    )
      .then((response) => response.json())
      .then((data) => setHorror(data.result))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchHorror(), [fetchHorror]);

  //Hàm lấy danh sách phim Lãng mạn
  const fetchRomance = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies/romance"
    )
      .then((response) => response.json())
      .then((data) => setRomance(data.result))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchRomance(), [fetchRomance]);

  //Hàm lấy danh sách phim Tài liệu
  const fetchDocumentary = useCallback(() => {
    fetch(
      "https://movie-app-backend-woeq.onrender.com/movies/get-movies/documentary"
    )
      .then((response) => response.json())
      .then((data) => setDocumentary(data.result))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => fetchDocumentary(), [fetchDocumentary]);

  //Hàm lấy thông tin của phim được click
  const selectMovie = (movie, type) => {
    if (selectedMovie.length === 0) {
      fetch(
        `https://movie-app-backend-woeq.onrender.com/movies/get-video/${movie._id}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setVideos(data.result);
        })
        .catch((err) => console.log(err));
      setSelectedMovie([movie]);
      setCurrentType(type);
    } else if (selectedMovie.length > 0) {
      if (movie._id !== selectedMovie[0]._id) {
        fetch(
          `https://movie-app-backend-woeq.onrender.com/movies/get-video/${movie._id}`
        )
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            setVideos(data.result);
          })
          .catch((err) => console.log(err));
        setSelectedMovie([movie]);
        if (currentType !== type) {
          if (currentType === "lastest") {
            setHideLastestDetail(true);
          } else if (currentType === "trending") {
            setHideTrendingDetail(true);
          } else if (currentType === "rating") {
            setHideRatingDetail(true);
          } else if (currentType === "action") {
            setHideActionDetail(true);
          } else if (currentType === "comedy") {
            setHideComedyDetail(true);
          } else if (currentType === "horror") {
            setHideHorrorDetail(true);
          } else if (currentType === "romance") {
            setHideRomanceDetail(true);
          } else if (currentType === "documentary") {
            setHideDocumentaryDetail(true);
          }
          setCurrentType(type);
        }
      } else if (movie._id === selectedMovie[0]._id) {
        setSelectedMovie([]);
        setCurrentType("");
        if (type === "lastest") {
          setHideLastestDetail(true);
        } else if (type === "trending") {
          setHideTrendingDetail(true);
        } else if (type === "rating") {
          setHideRatingDetail(true);
        } else if (type === "action") {
          setHideActionDetail(true);
        } else if (type === "comedy") {
          setHideComedyDetail(true);
        } else if (type === "horror") {
          setHideHorrorDetail(true);
        } else if (type === "romance") {
          setHideRomanceDetail(true);
        } else if (type === "documentary") {
          setHideDocumentaryDetail(true);
        }
      }
    }
  };

  return (
    <div>
      <div>
        <Card className="bg-dark text-white rounded-0">
          <Card.Img
            style={{ height: "500px" }}
            src={
              banner.backdrop_path
                ? `https://image.tmdb.org/t/p/original${banner.backdrop_path}`
                : `https://image.tmdb.org/t/p/original${banner.poster_path}`
            }
            alt="image"
          />
          <Card.ImgOverlay>
            <div className={styles.overlay}>
              <Card.Title className={styles.title}>{banner.title}</Card.Title>
              <Button className={styles.btns}>Play</Button>
              <Button className={styles.btns}>My List</Button>
              <Card.Text className={styles.text}>{banner.overview}</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {latestMovies.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideLastestDetail(false);
                  selectMovie(movie, "lastest");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {latestMovies.slice(10).map((movie) => (
              <img
                onClick={() => {
                  setHideLastestDetail(false);
                  selectMovie(movie, "lastest");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideLastestDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
      </div>
      <div className="p-3" style={{ color: "white" }}>
        <h3>Xu hướng</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {trending.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideTrendingDetail(false);
                  selectMovie(movie, "trending");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {trending.slice(10).map((movie) => (
              <img
                onClick={() => {
                  setHideTrendingDetail(false);
                  selectMovie(movie, "trending");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideTrendingDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Xếp hạng cao</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {rating.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideRatingDetail(false);
                  selectMovie(movie, "rating");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {rating.slice(10).map((movie) => (
              <img
                onClick={() => {
                  setHideRatingDetail(false);
                  selectMovie(movie, "rating");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideRatingDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Hành động</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {action.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideActionDetail(false);
                  selectMovie(movie, "action");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {action.slice(10).map((movie) => (
              <img
                onClick={() => {
                  setHideActionDetail(false);
                  selectMovie(movie, "action");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideActionDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Hài</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {comedy.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideComedyDetail(false);
                  selectMovie(movie, "comedy");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {comedy.slice(10).map((movie) => (
              <img
                onClick={() => {
                  setHideComedyDetail(false);
                  selectMovie(movie, "comedy");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideComedyDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Kinh dị</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {horror.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideHorrorDetail(false);
                  selectMovie(movie, "horror");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideHorrorDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Lãng mạn</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {romance.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideRomanceDetail(false);
                  selectMovie(movie, "romance");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideRomanceDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
        <h3>Tài liệu</h3>
        <Carousel className="d-flex px-5 mt-4 mb-5">
          <Carousel.Item>
            {documentary.slice(0, 10).map((movie) => (
              <img
                onClick={() => {
                  setHideDocumentaryDetail(false);
                  selectMovie(movie, "documentary");
                }}
                key={movie._id}
                className={`px-1 ${styles.img}`}
                width="10%"
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt=""
              />
            ))}
          </Carousel.Item>
        </Carousel>
        {selectedMovie.length > 0 && !hideDocumentaryDetail && (
          <MovieDetail movie={selectedMovie} videos={videos} />
        )}
      </div>
    </div>
  );
};

export default Home;
