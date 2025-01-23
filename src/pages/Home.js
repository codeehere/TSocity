import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Trending News Section */}
      <section className="trending-news">
        <h2 className="section-title">Trending News</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img src="https://cdn.vox-cdn.com/thumbor/niXeGLAkTbyEcF3R4U8HJYPWZnQ=/0x0:2000x1333/1200x628/filters:focal(1244x544:1245x545)/cdn.vox-cdn.com/uploads/chorus_asset/file/25841472/257519_Samsung_Galaxy_S25_Ultra_hands_on_AJohnson_0006.jpg" alt="Trending News 1" />
            <div className="carousel-caption">
              <h3>Exclusive: Breaking News Headline 1</h3>
              <p>Summary of the news to catch attention...</p>
            </div>
          </div>
          {/* Add more carousel items */}
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="top-categories">
        <h2 className="section-title">Explore by Categories</h2>
        <div className="categories-container">
          <Link to="/business" className="category-card">
            <h3>Business</h3>
            <p>Stay updated on the financial world.</p>
          </Link>
          <Link to="/health" className="category-card">
            <h3>Health</h3>
            <p>Latest tips and news on health and wellness.</p>
          </Link>
          <Link to="/technology" className="category-card">
            <h3>Technology</h3>
            <p>Discover the future with tech innovations.</p>
          </Link>
          <Link to="/sports" className="category-card">
            <h3>Sports</h3>
            <p>Catch up on the latest sports action.</p>
          </Link>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="most-popular">
        <h2 className="section-title">Most Popular</h2>
        <div className="popular-articles">
          <article className="article-card">
            <h3>Top Story 1</h3>
            <p>Details about the top story 1...</p>
            <Link to="/news/top-story-1">Read More</Link>
          </article>
          <article className="article-card">
            <h3>Top Story 2</h3>
            <p>Details about the top story 2...</p>
            <Link to="/news/top-story-2">Read More</Link>
          </article>
          <article className="article-card">
            <h3>Top Story 3</h3>
            <p>Details about the top story 3...</p>
            <Link to="/news/top-story-3">Read More</Link>
          </article>
          <article className="article-card">
            <h3>Top Story 4</h3>
            <p>Details about the top story 4...</p>
            <Link to="/news/top-story-4">Read More</Link>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TSocity. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
