import React, { useState, useEffect } from "react";
import rLogo from "../logo.svg";
const MainContent = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(category + " - " + country);
  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]); // Fetch news when the category changes

  return (
    <div className="main-content">
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div id="news-container">
          {articles.map((article) => (
            <div key={article.url} className="news-article">
              <img
                src={article.urlToImage ? article.urlToImage : rLogo}
                alt={article.title}
                className="news-article-img"
              />
              <div className="news-article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;
