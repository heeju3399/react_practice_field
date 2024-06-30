import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-normal flex-wrap">
                    {
                        movies.map(v => <MovieCard key={v.id} movie={v} />)
                    }

                </div>
            </section>
        </main>
    );
}