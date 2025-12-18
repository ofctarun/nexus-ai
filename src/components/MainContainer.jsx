import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;


    return (
        <div className="relative w-full h-screen">
            <VideoBackground movieId={id} />
            <div className="relative z-10 h-full flex items-center px-4 md:px-12">
                <VideoTitle title={original_title} overview={overview} />
            </div>
        </div>
    )
}

export default MainContainer
