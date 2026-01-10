import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'drop' | 'center' | 'move' | 'cover' | 'complete'>('drop');
  const [logoStyle, setLogoStyle] = useState({
    top: '-150px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
    height: '120px',
    opacity: 1,
  });
  const [showLogoTwo, setShowLogoTwo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const totalDuration = 3700;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (totalDuration / 50));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    const timer1 = setTimeout(() => {
      setLogoStyle({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '120px',
        opacity: 1,
      });
      setPhase('center');
    }, 1000);

    const timer2 = setTimeout(() => {
      setPhase('move');
    }, 1500);

    const timer3 = setTimeout(() => {
      let mobileLeft = '133px';
      if (isMobile) {
        const screenWidth = window.innerWidth;
        const sidebarMaxWidth = 420;
        const sidebarLeft = Math.max(0, (screenWidth - sidebarMaxWidth) / 2);
        mobileLeft = `${sidebarLeft + 16 + 50 + 12 + 55}px`;
      }
      
      setLogoStyle({
        top: isMobile ? '40px' : '50px',
        left: isMobile ? mobileLeft : '161px',
        transform: 'translateX(-50%)',
        width: isMobile ? '110px' : '115px',
        height: isMobile ? '60px' : '65px',
        opacity: 1,
      });
      setPhase('cover');
    }, 2500);

    const timer4 = setTimeout(() => {
      setShowLogoTwo(true);
    }, 3200);

    const timer5a = setTimeout(() => {
      setPhase('complete');
    }, 3500);

    const timer6 = setTimeout(() => {
      setProgress(100);
      onComplete();
    }, 3700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5a);
      clearTimeout(timer6);
    };
  }, [onComplete, isMobile]);

  return (
    <div className="fixed inset-0 z-[999] bg-white overflow-hidden">
      <div
        className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-[1000]"
        style={
          phase === 'center' 
            ? {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '200px',
                height: '120px',
                opacity: 1,
              }
            : phase === 'move' || phase === 'cover' || phase === 'complete'
            ? {
                ...logoStyle,
                width: isMobile ? '110px' : '115px',
                height: isMobile ? '60px' : '65px',
              }
            : logoStyle
        }
      >
        <img
          src={showLogoTwo ? "/logo_two.png" : "/logo_three.png"}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-black transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] z-[999] ${
          phase === 'cover' || phase === 'complete' ? 'h-full' : 'h-0'
        }`}
        style={{
          transitionDelay: phase === 'cover' ? '0ms' : '0ms',
        }}
      />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[1001] w-64 max-w-[80%]">
        <div className="h-0.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-black dark:bg-white transition-all duration-50 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
