import React from 'react';

const mainlayout = ({children}) => {
  return (
    <div className="bg-red-500 px-4 py-2">
        helloWorld{children}
    </div>
  );
};

export default mainlayout;
