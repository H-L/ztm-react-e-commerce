import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
