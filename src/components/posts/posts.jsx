import React, { useEffect, useState } from "react";
import "./posts.css";
import axios from '../../utils/tmdbAxiosInstance'
import { API_KEY, IMAGE_URL } from '../../constants/consts';
import Youtube from 'react-youtube';
import { useAlert } from "react-alert";


function Posts({ title, endPoints }) {


     const alert = useAlert();

     const [movies, setMovies] = useState([]);
     const [movieTrailer, setMovieTrailer] = useState('')
     useEffect(() => {
          axios.get(endPoints)
               .then((res) => {
                    console.log(res.data.results);
                    setMovies(res.data.results);
               })
     }, [])


     const opts = {
          height: '390',
          width: '100%',
          playerVars: {
               autoplay: 1,
          },
     };

     function handelMovie(id) {
          console.log(id)

          axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
               .then((res) => {
                    res.data.results.length <= 0 ?
                         alert.show("This Movie Trailer Not available ", {
                              type: 'error',
                         }) :
                         setMovieTrailer(res.data.results[0].key);
               })

     }


     return (
          <>
               <div className="cards">
                    <h3>{title} </h3>

                    <div className="cardRow">
                         <div className="leftFade"></div>
                         <div className="imgRowPost">
                              {/* iterte here */}
                              {movies.map(item => {
                                   return (

                                        <img
                                             key={item.id}
                                             onClick={() => handelMovie(item.id)}
                                             src={IMAGE_URL + item.backdrop_path}
                                             alt=""
                                        />

                                   );
                              })}

                              {/* stop itere here */}
                         </div>
                         <div className="rightFade"> </div>
                         <center>
                              {
                                   movieTrailer !== "" ?
                                        <Youtube videoId={movieTrailer} opts={opts} /> :
                                        null
                              }
                         </center>
                    </div>
               </div>
          </>
     );
}

export default Posts;
