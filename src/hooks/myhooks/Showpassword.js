import { useState } from 'react';

const useShowpassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return [passwordVisible, togglePasswordVisibility];
};

export default useShowpassword;
