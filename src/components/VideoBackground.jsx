import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto aspect-video scale-150 md:scale-125 pointer-events-none"
        style={{ minWidth: '100vw', minHeight: '100vh' }}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key +
          "&showinfo=0&modestbranding=1&rel=0&vq=hd2160"
        }
        title="Trailer Video"
        allow="autoplay; encrypted-media"
        frameBorder="0"
      ></iframe>

      {/* Multiple gradient overlays for Netflix effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoBackground;