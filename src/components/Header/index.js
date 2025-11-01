import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';
export function Header() {
    return (_jsxs("header", { className: styles.header, children: [_jsx("img", { src: Logo, alt: "Pilops Logo" }), _jsx("p", { children: "Your virtual pilot career for Flight Simulator" })] }));
}
