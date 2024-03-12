import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Dropdown = ({
  title,
  subItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // const handleToggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {title === 'Destination' ? (
        <Link to="/Destination" onClick={handleMouseLeave} style={{ color: "#4fa7b0", fontWeight: "500" }}>
          <div className="selected-option">
            {title}
          </div>
        </Link>
      ) : (
        <div className="selected-option">
          {title}
        </div>
      )}
      {isOpen && subItems && subItems.length > 0 && (
        <ul className="options">
          {subItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              oonClick={handleMouseLeave}
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
