import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gallery } from '../../data';
import './gallery.css';
import OtherBanners from '../../components/OtherBanners';
import Map from '../../components/Map';
import ContactHome from '../../components/ContactHome';

const Gallery = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItems();

    window.addEventListener('resize', updateItems);

    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = gallery.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <OtherBanners title="Gallery" />
      <div className="gallery-page">
        <div className="gallery-grid">
          {currentItems.map((item) => (
            <Link to={`/projects/${item.id}`} className="gallery-card" key={item.id}>
              <img src={item.images[0]} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
            Prev
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
      <ContactHome />
      <Map />
    </>
  );
};

export default Gallery;
