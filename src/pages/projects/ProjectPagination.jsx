import { useState } from 'react';
import { projects } from '../../data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectPagination = () => {
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Number of rows per page
  const rowsPerPage = 5;

  // Total pages
  const totalPages = Math.ceil(projects.length / rowsPerPage);

  // Get the starting index
  const startIndex = (currentPage - 1) * rowsPerPage;

  // Get current rows
  const currentProjects = projects.slice(startIndex, startIndex + rowsPerPage);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="projects-table__section">
      <div className="container">
        <div className="projects-table__wrapper">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Project Description</th>
                <th>Client</th>
                <th>Location</th>
                <th>Year</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentProjects.map((project, index) => (
                <tr key={index}>
                  <td data-label="Project Description">{project.projectDesc || project.ProjectDesc || project.projctDesc}</td>

                  <td data-label="Client">{project.client}</td>

                  <td data-label="Location">{project.projectLocation || project.ProjectLocation}</td>

                  <td data-label="Year">{project.year}</td>

                  <td data-label="Status">
                    <span className="status completed">{project.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="pagination">
            {/* LEFT BUTTON */}
            <button onClick={prevPage} disabled={currentPage === 1} className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}>
              <FaChevronLeft />
            </button>

            {/* PAGE NUMBERS */}
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)} className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}>
                  {index + 1}
                </button>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <button onClick={nextPage} disabled={currentPage === totalPages} className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPagination;
