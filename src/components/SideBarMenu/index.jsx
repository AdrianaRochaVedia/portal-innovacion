import React, { useState } from "react";
import "./SideBarMenu.scss";

const SideBarMenu = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className={`sidebar-menu ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="menu-list">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`menu-item ${
              activeSection === section ? "active" : ""
            }`}
          >
            <a
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => handleClick(section)}
            >
              <div className="dot-line">
                {/* Aplica la clase activa directamente a .dot */}
                <span
                  className={`dot ${
                    activeSection === section ? "active" : ""
                  }`}
                />
                {index < sections.length - 1 && <span className="line" />}
              </div>
              {isOpen && (
                <span
                  className={`menu-text ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarMenu;