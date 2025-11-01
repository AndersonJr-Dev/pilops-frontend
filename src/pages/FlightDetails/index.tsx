import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import type { FlightDetails as FlightDetailsType } from '../../types/flight';
import styles from './FlightDetails.module.css';

// Importa os componentes reutilizáveis
import { Header } from '../../components/Header';
import { FlightInfoCard } from '../../components/FlightInfoCard';

// Importa os ícones
import { FaArrowLeft, FaTrophy } from 'react-icons/fa';

export function FlightDetails() {
  const { id } = useParams<{ id: string }>(); 
  const [flight, setFlight] = useState<FlightDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de Fetch
  useEffect(() => {
    if (!id) return; 
    (async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/flights/${id}`);
        setFlight(response.data);
      } catch (err) {
        console.error('Erro ao buscar detalhes:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]); 

  // Renderização Condicional
  if (isLoading || !flight) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.loading}>Carregando...</div>
      </div>
    );
  }

  // Formatação de dados
  const formattedBalance = (flight.saldo).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).replace('R$', 'P$ ');

  // Renderização de Sucesso
  return (
    <div className={styles.container}>
      <Header /> 

      <nav className={styles.nav}>
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <h1>Detalhes do voo</h1>
      </nav>

      <section className={styles.rewardsSection}>
        <h2><FaTrophy /> Recompensas</h2>
        <div className={styles.rewardsGrid}>

          <div className={styles.rewardItem}>
            <span className={styles.rewardIcon}>P$</span> 
            <div>
              <span className={styles.rewardTitle}>Ganhos totais</span>
              <div className={styles.rewardValue}>{formattedBalance}</div>
            </div>
          </div>

          <div className={styles.rewardItem}>
            <img src="/star.svg" alt="Ícone de estrela" className={styles.rewardIcon} />
            <div>
              <span className={styles.rewardTitle}>XP CONQUISTADO</span>
              <div className={styles.rewardValue}>{flight.xp}</div>
            </div>
          </div>

          <div className={styles.rewardItem}>
            <img src="/award-star.svg" alt="Ícone de certificado" className={styles.rewardIcon} />
            <div>
              <span className={styles.rewardTitle}>Bônus de missão</span>
              <div className={styles.rewardValue}>{flight.bonusMissao * 100}%</div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.flightInfoSection}>
        <FlightInfoCard flight={flight} />
      </section>
    </div>
  );
}