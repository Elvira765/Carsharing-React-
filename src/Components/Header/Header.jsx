import React from 'react';
import './Header.scss';

const Header = () => {
    return  <div className="header">
                <div className="header__wrap">
                  <div className="header__name">Need for drive</div>
                  <div className="header__location-wrap">
                    <svg className="header__location-icon" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="header__location">Ульяновск</div>
                  </div>
                </div>
              </div>
}

export default Header;