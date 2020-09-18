import React from 'react';
import Typed from 'react-typed';

const ImLikely = () => {

  return (
    <div>
      <Typed
      strings={[
          'I\'m likely tweaking CSS',
          'I\'m likely tweaking CSS (painstakingly)',
          'I\'m likely in a Zoom lecture',
          'I\'m likely committing my code',
          'I\'m likely listening to music',
          'I\'m likely browsing npm packages',
          'I\'m likely on a run',
          'I\'m likely working on an assignment',
          'I\'m likely completing a midterm',
          'I\'m likely at home with my family 💛',]}
          smartBackspace={true}
          typeSpeed={50}
          backSpeed={40}
          backDelay={2000}
          showCursor={true}
          cursorChar='_'
          loop >
      </Typed>
    </div>
  );
}

export default ImLikely;
