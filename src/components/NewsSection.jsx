import './NewsSection.css';

import { useEffect, useMemo, useState } from 'react';

const GNEWS_API = import.meta.env.VITE_GNEWS_API;

const categories = [
  {
    name: 'All',
    query: 'oil gas Nigeria',
  },

  {
    name: 'NNPC',
    query: 'NNPC Nigeria',
  },

  {
    name: 'LNG',
    query: 'LNG gas',
  },

  {
    name: 'OPEC',
    query: 'OPEC crude oil',
  },

  {
    name: 'Refinery',
    query: 'Dangote refinery',
  },

  {
    name: 'Upstream',
    query: 'upstream oil gas',
  },

  {
    name: 'Downstream',
    query: 'downstream petroleum',
  },
];

const NewsSection = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [nigeriaOnly, setNigeriaOnly] = useState(true);

  const pageSize = 3;

  // =========================
  // FETCH NEWS
  // =========================
  const fetchNews = async () => {
    setLoading(true);

    try {
      let query = activeCategory.query;

      // NIGERIA FILTER
      if (nigeriaOnly) {
        query = `${query} Nigeria`;
      }

      const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=20&sortby=publishedAt&apikey=${GNEWS_API}`;

      console.log('Fetching:', url);

      const response = await fetch(url);

      const data = await response.json();

      console.log('NEWS DATA:', data);

      const articles = data.articles || [];

      // SORT LATEST → OLDEST
      const sorted = articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      // IMPORTANT
      setAllArticles([...sorted]);
    } catch (error) {
      console.log('ERROR:', error);
      setAllArticles([]);
    }

    setLoading(false);
  };

  // =========================
  // AUTO LOAD + AUTO REFRESH
  // =========================
  useEffect(() => {
    fetchNews();

    const interval = setInterval(
      () => {
        fetchNews();
      },
      10 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, [activeCategory, nigeriaOnly]);

  // =========================
  // PAGINATION
  // =========================
  const totalPages = Math.ceil(allArticles.length / pageSize);

  const currentArticles = useMemo(() => {
    const start = (page - 1) * pageSize;

    return allArticles.slice(start, start + pageSize);
  }, [page, allArticles]);

  // =========================
  // UI
  // =========================
  return (
    <section className="news-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-title">
          <h2>Oil & Gas Industry News</h2>

          <p>Latest updates on NNPC, LNG, OPEC, crude oil, refinery, upstream and downstream sectors.</p>
        </div>

        {/* TOP BAR */}
        <div className="top-bar">
          {/* CATEGORY TABS */}
          <div className="category-tabs">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={activeCategory.name === cat.name ? 'active-tab' : ''}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FILTERS */}
          <div className="filters">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={nigeriaOnly}
                onChange={() => {
                  setNigeriaOnly(!nigeriaOnly);
                  setPage(1);
                }}
              />
              Nigeria Only
            </label>

            <button onClick={fetchNews}>Refresh Now</button>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="loading">Loading latest news...</div>
        ) : (
          <>
            {/* EMPTY STATE */}
            {currentArticles.length === 0 ? (
              <div className="empty-news">No news found.</div>
            ) : (
              <div className="news-grid">
                {currentArticles.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noreferrer" className="news-card">
                    <img src={item.image || 'https://via.placeholder.com/500x300'} alt={item.title} />

                    <div className="news-content">
                      <span>{item.source?.name || 'News Source'}</span>

                      <h3>{item.title}</h3>

                      <p>{item.description?.slice(0, 120)}...</p>

                      <small>{new Date(item.publishedAt).toLocaleString()}</small>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* PAGINATION */}
            <div className="pagination">
              {/* PREV */}
              <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
                Prev
              </button>

              <span>
                Page {page} of {totalPages || 1}
              </span>

              {/* NEXT */}
              <button disabled={page >= totalPages} onClick={() => setPage((prev) => prev + 1)}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
