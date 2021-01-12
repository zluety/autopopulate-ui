import { FunctionComponent } from 'react';
import './NavBar.css';
import { Icon } from '@fluentui/react/lib/Icon';

export const NavBar: FunctionComponent = () => {
    return (
        <nav className="navbar">
            <button className="nav-button">
                <Icon iconName="GlobalNavButton" />
            </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <Icon iconName="Add" />
                        <span className="link-text">New</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <Icon iconName="Settings" />
                        <span className="link-text">Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}