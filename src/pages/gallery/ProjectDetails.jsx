import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { gallery } from '../../data';
import './project-details.css';
import ProjectGallery from '../../components/ProjectGallery';
import ContactHome from '../../components/ContactHome';
import Map from '../../components/Map';

const ProjectDetails = () => {
  const { id } = useParams();

  const project = gallery.find((item) => item.id === Number(id));

  const [lightbox, setLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightbox(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <>
      <ProjectGallery title="Project Photos" />
      <div className="project-page">
        <h3>{project.title}</h3>

        <div className="project-grid">
          {project.images.map((img, index) => (
            <div className="project-image" key={index} onClick={() => openLightbox(index)}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        {lightbox && (
          <div className="lightbox">
            <button className="close-btn" onClick={() => setLightbox(false)}>
              ✕
            </button>

            <button className="prev-btn" onClick={prevImage}>
              ❮
            </button>

            <img src={project.images[currentImage]} alt="" className="lightbox-image" />

            <button className="next-btn" onClick={nextImage}>
              ❯
            </button>
          </div>
        )}
      </div>
      <ContactHome />
      <Map />
    </>
  );
};

export default ProjectDetails;
