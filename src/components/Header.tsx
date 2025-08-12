import { CiMicrophoneOn, CiSearch } from 'react-icons/ci';
import { MdOutlineLaptopChromebook } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { userImg } from '../assets/images';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <MdOutlineLaptopChromebook className="header-icon" size={42} />
        </div>
        <div className="header-mid">
          <div className="header-search-container">
            <CiSearch className="header-search-icon" size={24} />
            <input
              placeholder="Search projects, employers, etc."
              className="header-search-input"
            />
          </div>
          <CiMicrophoneOn className="header-mic-icon" size={32} />
          <img src={userImg} width={100} />
          <button className="header-button-invite">Invite Teammate</button>
          <button className="header-button-share">Share This Workspace</button>
        </div>
        <div className="header-right">
          <IoIosNotifications className="header-notif-icon" size={32} />
          <FaUserCircle className="header-profile-icon" size={32} />
          <div className="divider"></div>
          <AiOutlineAppstoreAdd className="header-menu-icon" size={32} />
          <p className="header-text-menu">Menu</p>
        </div>
      </div>
      <hr className='header-divider'/>
    </>
  );
};

export default Header;
