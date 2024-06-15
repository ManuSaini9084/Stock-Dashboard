import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faUser, faCog, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <aside className="w-10 text-white flex flex-col justify-center mb-40 items-center py-4">
    <div className="mb-6">
      <FontAwesomeIcon icon={faHome} />
    </div>
    <div className="mb-6">
      <FontAwesomeIcon icon={faChartLine} />
    </div> 
    <div className="mb-6">
      <FontAwesomeIcon icon={faUser} />
    </div>
    <div className="mb-6">
      <FontAwesomeIcon icon={faCog} />
    </div>
    <div className="mb-6">
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  </aside>
);

export default Sidebar;
