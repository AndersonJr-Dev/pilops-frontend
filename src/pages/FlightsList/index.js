import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './FlightsList.module.css';
import { Header } from '../../components/Header';
import { FlightInfoCard } from '../../components/FlightInfoCard';
// Sub-componente para o Saldo
function FlightBalance({ value }) {
    const isNegative = value < 0;
    const formattedValue = (value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).replace('R$', 'P$ ');
    return (_jsxs("div", { className: styles.saldo, children: [_jsx("span", { children: "Saldo" }), _jsx("p", { className: isNegative ? styles.negative : styles.positive, children: isNegative ? formattedValue.replace('-', '- ') : formattedValue })] }));
}
export function FlightsList() {
    // Lógica de Estado
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // Lógica de Fetch
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                setError(null);
                // Busca do backend a lista de voos
                const response = await api.get('/flights');
                setFlights(response.data);
            }
            catch (err) {
                setError('Não foi possível carregar os voos.');
            }
            finally {
                setIsLoading(false);
            }
        })();
    }, []); // [] = Roda só uma vez
    // Renderização Condicional
    if (isLoading) {
        return _jsx("div", { className: styles.loading, children: "Carregando voos..." });
    }
    if (error) {
        return _jsx("div", { className: styles.error, children: error });
    }
    // Renderização de Sucesso
    return (_jsxs("div", { className: styles.container, children: [_jsx(Header, {}), _jsxs("section", { className: styles.titleSection, children: [_jsx("h1", { children: "Hist\u00F3rico de Voos" }), _jsx("p", { children: "Visualize seu hist\u00F3rico completo de voos realizados" })] }), _jsx("main", { children: _jsx("ul", { children: flights.map(flight => (_jsx("li", { children: _jsxs(Link, { to: `/flight/${flight.id}`, className: styles.flightItem, children: [_jsx("div", { className: styles.flightInfo, children: _jsx(FlightInfoCard, { flight: flight }) }), _jsx(FlightBalance, { value: flight.saldo })] }) }, flight.id))) }) })] }));
}
