import "./App.css";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Posts from "./components/posts/posts";
import { API_KEY } from "./constants/consts";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      {/* <Posts title="TRENDINGS " endPoints="/trending/all/day?api_key=" />
      <Posts title="UPCOMING MOVIES" endPoints="/movie/upcoming?api_key=" />
      <Posts title="COMEDY MOVIES" endPoints="/discover/movie?api_key=" /> */}
      <Posts
        title="TRENDINGS..."
        endPoints={`movie/top_rated?api_key=${API_KEY}`}
      />
      <Posts
        title="ACTION MOVIES"
        endPoints={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <Posts
        title="HORROR MOVIES"
        endPoints={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <Posts
        title="ROMANTIC MOVIES"
        endPoints={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
      <Footer />
    </div>
  );
}

export default App;
