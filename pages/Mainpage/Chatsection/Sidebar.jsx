import Ccislogo from '../../../src/assets/ccislogo.svg';
import '../../../src/Css/Mainpage/Chatsection/Sidebar.css';
import { FaMessage, FaUpload } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { MdAccountCircle } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Sidebar component renders a navigation menu with links to different sections of the application.
 * It highlights the active link based on the current route and allows navigation to other sections.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Sidebar component.
 *
 * @example
 * // Usage in a parent component
 * import Sidebar from './Sidebar';
 *
 * function App() {
 *   return (
 *     <div>
 *       <Sidebar />
 *     </div>
 *   );
 * }
 *
 * @description
 * The Sidebar includes the following navigation items:
 * - Message: Navigates to the ChatSection.
 * - Upload: Navigates to the Uploadsection.
 * - Settings: Navigates to the Settings page.
 * - Account: Navigates to the Account page.
 * - Logout: Navigates to the Logout page.
 *
 * Each navigation item is highlighted when its corresponding route is active.
 * The `useNavigate` hook is used for programmatic navigation, and the `useLocation` hook is used to determine the current route.
 */

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    // Determine which link is active based on the current route
    const focusChat = location.pathname === '/ChatSection';
    const focusUpload = location.pathname === '/Uploadsection';
    const focusSettings = location.pathname === '/Settings';
    const focusAccount = location.pathname === '/Account';
    const focusLogout = location.pathname === '/Logout';

    function handleNavigation(link) {
        navigate(link);
    }

    return (
        <>
            {/* Aside start */}
            <aside>
                <div className="nav-header-logo">
                    <img src={Ccislogo} alt="ccislogo" />
                </div>

                <div className="list-container">
                    <ul className="nav-list">
                        {/* Message */}
                        <li
                            className={`nav-item ${
                                focusChat ? 'nav-item-active' : ''
                            }`}
                            onClick={() => handleNavigation('/ChatSection')}
                        >
                            <a href="#" className="nav-link">
                                <FaMessage
                                    className={
                                        focusChat ? 'nav-icon-active' : 'nav-icon'
                                    }
                                />
                            </a>
                            <div className="tooltip">
                                <p>Message</p>
                            </div>
                        </li>

                        {/* Upload */}
                        <li
                            className={`nav-item ${
                                focusUpload ? 'nav-item-active' : ''
                            }`}
                            onClick={() => handleNavigation('/Uploadsection')}
                        >
                            <a href="#" className="nav-link">
                                <FaUpload
                                    className={
                                        focusUpload ? 'nav-icon-active' : 'nav-icon'
                                    }
                                />
                            </a>
                            <div className="tooltip">
                                <p>Upload</p>
                            </div>
                        </li>

                        {/* Settings */}
                        <li
                            className={`nav-item ${
                                focusSettings ? 'nav-item-active' : ''
                            }`}
                            onClick={() => handleNavigation('/Settings')}
                        >
                            <a href="#" className="nav-link">
                                <IoMdSettings
                                    className={
                                        focusSettings ? 'nav-icon-active' : 'nav-icon'
                                    }
                                />
                            </a>
                            <div className="tooltip">
                                <p>Settings</p>
                            </div>
                        </li>

                        {/* Account */}
                        <li
                            className={`nav-item ${
                                focusAccount ? 'nav-item-active' : ''
                            }`}
                            onClick={() => handleNavigation('/Account')}
                        >
                            <a href="#" className="nav-link">
                                <MdAccountCircle
                                    className={
                                        focusAccount ? 'nav-icon-active' : 'nav-icon'
                                    }
                                />
                            </a>
                            <div className="tooltip">
                                <p>Account</p>
                            </div>
                        </li>

                        {/* Logout */}
                        <li
                            className={`nav-item ${
                                focusLogout ? 'nav-item-active' : ''
                            }`}
                            onClick={() => handleNavigation('/Logout')}
                        >
                            <a href="#" className="nav-link">
                                <CiLogout
                                    className={
                                        focusLogout ? 'nav-icon-active' : 'nav-icon'
                                    }
                                />
                            </a>
                            <div className="tooltip">
                                <p>Logout</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
            {/* Aside end */}
        </>
    );
}

export default Sidebar;