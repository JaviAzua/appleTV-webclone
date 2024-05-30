import { Movie } from "../../../movies";

export const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip mb-4">
      <div className="flex gap-3 relative animate-carousel-move left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div
            className="w-[40vw] md:w-[23vw] aspect-video shrink-0"
            key={`${movie.name}-${index}`}
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
