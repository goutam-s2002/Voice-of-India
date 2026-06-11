import React, { useState, useEffect } from 'react';

const MainContent = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch news or mock API call
        setTimeout(() => {
            setNews([{ id: 1, title: 'Sample News Headline' }]); // Mock data
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <main>
            <section id="news">
                <h2 id="headline">Top General Headlines</h2>
                {loading ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div id="news-container">
                        {news.map((article) => (
                            <div key={article.id}>
                                <h3>{article.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default MainContent;
