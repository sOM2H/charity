import React from 'react';

export function HeaderBalance(props) {
  return (
    <ul className="nav navbar-nav header-balance">
      <li>
        <p className="navbar-text">
          <span>Charity contract balance </span>
          <strong>{props.balance} eth</strong>
        </p>
      </li>
    </ul>
  );
}

export default HeaderBalance;