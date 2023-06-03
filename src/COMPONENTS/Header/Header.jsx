import React, { useEffect, useRef } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="header-container">
      <div className="video-container">
        <div className="dark-layer"></div> {/* New: Dark layer on top of the video */}
        <video ref={videoRef} loop muted className="bg-vid">
          <source src="images/video.mp4" type="video/mp4" />
          <source src="images/video.webm" type="video/webm" />
          <source src="images/video.ogg" type="video/ogg" />
        </video>
      </div>

      <div className="content-container container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-1">
          <img className="nav headimg" src="Images/white.png" alt="Description of the image" />

            <div className="header-content">
            <p>
                Where Pets are Family! Discover a comprehensive directory of pet
                clinics, expert articles, and helpful resources for optimal pet
                care. Join our community of passionate pet lovers and ensure your
                furry friends live their happiest, healthiest lives. Find trusted
                veterinarians, explore pet care topics, and connect with like-minded
                individuals at Wans. Your go-to destination for all things pets.
              </p>
              <button className="btn btn-primary">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
