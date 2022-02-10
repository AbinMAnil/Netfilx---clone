import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from '../../utils/tmdbAxiosInstance';
import { API_KEY, IMAGE_URL } from '../../constants/consts'


function Banner() {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`)
      .then(res => {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        const obj = {
          imageUrl: IMAGE_URL + res.data.results[randomNumber].backdrop_path,
          movieName: res.data.results[randomNumber].title,
          discription: res.data.results[randomNumber].overview
        }
        setBanner(obj);
      })
  })

  return (
    <>
      <div className="bannerOuter">
        {/* button and discription row  */}
        <div className="text">
          <h1>{banner.movieName}</h1>
          <div className="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>
            {
              banner.discription
            }
          </p>

          <div className="buttonRow">
            <button>
              <i className="fas fa-play"></i> PLAY
            </button>
            <button>
              <i class="fas fa-plus"></i> MY LIST
            </button>
          </div>
        </div>
        {/* end of  button and discription row  */}

        <div className="imgRow">
          <div className="fade top-fade"></div>
          <img
            src={banner.imageUrl == "" ? 'loading' : banner.imageUrl}
            alt=""
          />
          <div className="fade bottom-fade"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
