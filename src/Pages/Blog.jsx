import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { IoCloudDownloadSharp } from "react-icons/io5";


function Blog() {
  useEffect(() => {
  ScrollReveal().reveal('.cv-button', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
});

  }, []);

  return (
    <div>

      <div className="cv">
        <button
          className="cv-button"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/CV - Nasib Karimzade.pdf';
            link.download = 'Nasib_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <IoCloudDownloadSharp />
          <br />
          CV İndir
        </button>
      </div>
    </div>
  );
}

export default Blog;
