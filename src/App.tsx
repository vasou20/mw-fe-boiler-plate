import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Components from './components';


function App() {

  const [theme, setTheme] = useState<any>(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'theme-a'
  );
  
  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      // updateThemeSkin(theme);
    }
    else{
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
        <Components/>
    </div>
  );
}

export default App;
