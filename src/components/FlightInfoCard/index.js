import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './FlightInfoCard.module.css';
export function FlightInfoCard({ flight }) {
    //Formata a data para o formato DD/MM/AAAA
    const formattedDate = new Date(flight.data).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    return (_jsxs("div", { className: styles.card, children: [_jsxs("div", { className: styles.column, children: [_jsx("span", { className: styles.title, children: "Aeronave" }), _jsx("span", { className: styles.value, children: flight.aeronave }), _jsx("span", { className: styles.subtitle, children: flight.companhia })] }), _jsxs("div", { className: `${styles.column} ${styles.columnCenter}`, children: [_jsx("span", { className: styles.title, children: "Trajeto" }), _jsxs("div", { className: styles.pathVisual, children: [_jsx("div", { className: styles.pathDot }), _jsx("div", { className: styles.pathLine }), _jsx("div", { className: styles.pathDot })] }), _jsxs("div", { className: styles.pathAirports, children: [_jsx("span", { className: styles.pathAirport, children: flight.origem }), _jsx("span", { className: styles.pathAirport, children: flight.destino })] })] }), _jsxs("div", { className: `${styles.column} ${styles.columnCenter}`, children: [_jsx("span", { className: styles.title, children: "Matr\u00EDcula" }), _jsx("span", { className: styles.value, children: flight.registro })] }), _jsxs("div", { className: `${styles.column} ${styles.columnCenter}`, children: [_jsx("span", { className: styles.title, children: "Data" }), _jsx("span", { className: styles.value, children: formattedDate })] })] }));
}
