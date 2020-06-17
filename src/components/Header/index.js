import React from 'react';

import logoImage from '../../assets/images/logo.png';

export default React.memo(function Header({ id, children, title, subtitle }) {
  return (
    <header className="bg-primary-light bg-diagonal bg-diagonal-primary-light">
      <div className="main-cont container pt-20 pb-10 flex">
        <div className="flex-1">
          <h1 id={id} className="font-display font-semibold text-white text-7xl uppercase tracking-wider leading-tight md:whitespace-pre">{title}</h1>
          {subtitle && <p className="text-white text-sans text-2xl mb-4 font-body font-hairline leading-tight">{subtitle}</p>}
          {children}
        </div>
        <div className="md:block flex-1">
          <img src={logoImage} className="float-right" alt="Futury.me logo" />
        </div>
      </div>
    </header>
  );
});
