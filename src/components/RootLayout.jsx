import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
import { useState } from "react";

const RootLayout = () => {
  //state màu nền
  const [bgColor, setBgColor] = useState("transparent");
  //Tạo sự kiện thay đổi màu nền khi cuộn xuống quá 100px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      //100px
      setBgColor("black");
    } else {
      setBgColor("transparent");
    }
  });

  const navigate = useNavigate();
  return (
    <div>
      <Nav
        className="position-fixed z-3 p-4 d-flex justify-content-between"
        style={{ background: bgColor, width: "100vw" }}
      >
        <Nav.Item>
          <h3
            onClick={() => navigate("/")}
            style={{
              color: "red",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Movie App
          </h3>
        </Nav.Item>
        <Nav.Item>
          <Search
            onClick={() => navigate("/search")}
            size={25}
            style={{
              color: "#cccccc",
              cursor: "pointer",
              marginRight: "1rem",
            }}
          />
        </Nav.Item>
      </Nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
