import React, { useState, useEffect } from 'react';
import memefetch from '../api/fetchmemes';
import MemeCard from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    memefetch().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">Meme Gallery</h2>
      <div className="row g-4">
        {data &&
          data.map((meme) => (
            <div className="col-12 col-sm-6 col-md-4" key={meme.id}>
              <MemeCard title={meme.name} url={meme.url} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Homepage;
