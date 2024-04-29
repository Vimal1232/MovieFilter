import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className=" px-20 py-10 max-sm:px-5 bg-[#081b27]">
      <div className=" mb-28">
        <Navbar />
      </div>

      <div>
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
