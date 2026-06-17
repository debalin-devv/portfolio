import { useEffect, useState } from 'react';

export const useKonamiCode = (secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']) => {
  const [success, setSuccess] = useState(false);
  const [inputSequence, setInputSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setInputSequence(prev => {
        const nextSequence = [...prev, e.key];
        if (nextSequence.length > secretCode.length) {
          nextSequence.shift();
        }
        
        if (nextSequence.join('') === secretCode.join('')) {
          setSuccess(true);
        }
        
        return nextSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secretCode]);

  return success;
};
