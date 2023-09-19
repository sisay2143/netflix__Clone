import React from 'react'
import requests from '../requests';
import Row from '../Components/Row';
import Banner from '../Components/Banner';


function Home() {
  return (
    <div>
    <Banner />
    <Row title="NETFLIX ORGINALS" fetchUrl = {requests.fetchNetflixOrginals} 
    isLargeRow
    />
    <Row title="Trending Now" fetchUrl = {requests.fetchTrending}  />
    <Row title="Top Rated" fetchUrl = {requests.fetchTopRatedMovies} />
    <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl = {requests.fetchRomanticMovies} />
    <Row title="Documentaries Movies" fetchUrl = {requests.fetchDocumentaries} />
    <Row title="upcoming Movies" fetchUrl = {requests.fetchupcoming} />
    </div>
  )
}

export default Home