import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'

function Banner() {

  const [movie, setMovie] = useState([]);
  // const [mov,setmov] = useState([]);

  useEffect(() => {

    async function fetchData() {
        const request = await axios.get("/banner.json");
        setMovie(request?.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ]
        );
         console.log(request);
        return request;
      }
      fetchData();  
    }, []);

    console.log(movie)

    function truncate(str,n) {
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }

  return (
    <div>
    <header className='banner bg-gradient-to-r from-black' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // https://image.tmdb.org/t/p/original//4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg
        backgroundPosition: "center center",
    }}
    >

        <div className="banner__contents">
            <h1 className="banner__title">
                {movie.title || movie.name || movie.original_name}
            </h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className='banner__description'>
            <p>Released:{movie?.first_air_date}</p>
            {truncate(movie?.overview)}
            </h1>
            
        </div>
        <div className="banner__fadeBottom bg-gradient-to-r from-black">
        </div>

    </header>
   
    {/* <div className='w-full h-[550px] text-white'>
      <div className="w-full h-full">
        <div className="absolute w-full h-[50px] bg-gradient-to-r from-black"></div>
        <img src ={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` }
           alt={movie?.title}   />

           <div className="absolute w-full top-[20%] p-4 md:p-8">
            <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
              <button className='boder text-white border-gray-300 py-2 px-5 ml-4'>My List</button>
            </div>
           </div>
        </div>

    </div> */}
    </div>
  )
}

export default Banner