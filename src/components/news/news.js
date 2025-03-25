import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://min-api.cryptocompare.com/data/v2/news/?lang=EN',
          {
            headers: {
              authorization: `Apikey b78698c1ca05f870710a0aff02752d49822d719b1ad1aae0ee7d7870a3ded828`,
            },
          }
        );
        setNews(response.data.Data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading news...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Latest Cryptocurrency News</h1>
      <div className="row">
        {news.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              {item.imageurl && (
                <img
                  src={item.imageurl}
                  className="card-img-top"
                  alt={item.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body.slice(0, 100)}...</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published on: {new Date(item.published_on * 1000).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
