import MovieCard from "components/MovieCard";
import Pagnation from "components/Pagination";

function Listing(){

    return (
        <>
        <Pagnation />
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />     
                </div> 
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />     
                </div> 
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />     
                </div> 
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />     
                </div> 
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard />     
                </div> 
            </div>
        </div>

        </>
    );
}

export default Listing;
