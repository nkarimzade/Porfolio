import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Blog() {
  useEffect(() => {
    ScrollReveal().reveal('h4', {
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
      <h4>
        Coming Soon :)
      </h4>
    </div>
  );
}

export default Blog;
