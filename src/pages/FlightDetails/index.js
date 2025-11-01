import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './FlightDetails.module.css';
// Importa os componentes reutilizáveis
import { Header } from '../../components/Header';
import { FlightInfoCard } from '../../components/FlightInfoCard';
// Importa os ícones
import { FaArrowLeft, FaTrophy } from 'react-icons/fa';
// CORREÇÃO DE ÍCONE: Importa os ícones CHEIOS (filled) do Bootstrap
import { BsFillStarFill, BsFillPatchCheckFill } from 'react-icons/bs';
export function FlightDetails() {
    const { id } = useParams();
    const [flight, setFlight] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // Lógica de Fetch
    useEffect(() => {
        if (!id)
            return;
        (async () => {
            try {
                setIsLoading(true);
                const response = await api.get(`/flights/${id}`);
                setFlight(response.data);
            }
            catch (err) {
                console.error('Erro ao buscar detalhes:', err);
            }
            finally {
                setIsLoading(false);
            }
        })();
    }, [id]);
    // Renderização Condicional
    if (isLoading || !flight) {
        return (_jsxs("div", { className: styles.container, children: [_jsx(Header, {}), _jsx("div", { className: styles.loading, children: "Carregando..." })] }));
    }
    // Formatação de dados
    const formattedBalance = (flight.saldo).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).replace('R$', 'P$ ');
    // Renderização de Sucesso
    return (_jsxs("div", { className: styles.container, children: [_jsx(Header, {}), _jsxs("nav", { className: styles.nav, children: [_jsx(Link, { to: "/", children: _jsx(FaArrowLeft, {}) }), _jsx("h1", { children: "Detalhes do voo" })] }), _jsxs("section", { className: styles.rewardsSection, children: [_jsxs("h2", { children: [_jsx(FaTrophy, {}), " Recompensas"] }), _jsxs("div", { className: styles.rewardsGrid, children: [_jsxs("div", { className: styles.rewardItem, children: [_jsx("span", { className: styles.rewardIcon, children: "P$" }), _jsxs("div", { children: [_jsx("span", { className: styles.rewardTitle, children: "Ganhos totais" }), _jsx("div", { className: styles.rewardValue, children: formattedBalance })] })] }), _jsxs("div", { className: styles.rewardItem, children: [_jsx(BsFillStarFill, { className: styles.rewardIcon }), _jsxs("div", { children: [_jsx("span", { className: styles.rewardTitle, children: "XP CONQUISTADO" }), _jsx("div", { className: styles.rewardValue, children: flight.xp })] })] }), _jsxs("div", { className: styles.rewardItem, children: [_jsx(BsFillPatchCheckFill, { className: styles.rewardIcon }), _jsxs("div", { children: [_jsx("span", { className: styles.rewardTitle, children: "B\u00F4nus de miss\u00E3o" }), _jsxs("div", { className: styles.rewardValue, children: [flight.bonusMissao * 100, "%"] })] })] })] })] }), _jsx("section", { className: styles.flightInfoSection, children: _jsx(FlightInfoCard, { flight: flight }) })] }));
}
