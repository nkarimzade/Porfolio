import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // localStorage'dan tema tercihini oku veya sistem tercihini kullan
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Sistem tercihini kontrol et
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // İlk yüklemede dark class'ını ekle
  useEffect(() => {
    const initialTheme = getInitialTheme();
    if (initialTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Tema değiştiğinde güncelle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      console.log('Tema değiştiriliyor:', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-[#101012] text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-6">
          <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
