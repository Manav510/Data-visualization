import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const useCookie = (userId, cookieName, defaultValue) => {
  const prefixedCookieName = userId ? `${userId}_${cookieName}` : null;
  
  // const [value, setValue] = useState(defaultValue);
  const [value, setValue] = useState(() => {
    const cookieValue = userId ? Cookies.get(prefixedCookieName) : null;
    return cookieValue ? JSON.parse(cookieValue) : defaultValue;
  });
  
  useEffect(() => {
    if(userId){
    if (value === undefined || value === null) {
      Cookies.remove(prefixedCookieName);
    } else {
      Cookies.set(prefixedCookieName, JSON.stringify(value));
    }
  }
  }, [prefixedCookieName, value]);

  return [value, setValue];
};

export default useCookie;