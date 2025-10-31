import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import type { FlightSummary } from '../../types/flight';
import styles from './FlightsList.module.css'; 
import { Header } from '../../components/Header';
import { FlightInfoCard } from '../../components/FlightInfoCard';

// Sub-componente para o Saldo
function FlightBalance({ value }: { value: number }) {
  const isNegative = value < 0;

  const formattedValue = (value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).replace('R$', 'P$ ');

  return (
    <div className={styles.saldo}>
      <span>Saldo</span>
      <p className={isNegative ? styles.negative : styles.positive}>
        {isNegative ? formattedValue.replace('-', '- ') : formattedValue}
      </p>
    </div>
  );
}

export function FlightsList() {
  // Lógica de Estado
  const [flights, setFlights] = useState<FlightSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lógica de Fetch
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true); 
        setError(null);
        // Busca do backend a lista de voos
        const response = await api.get('/flights'); 
        setFlights(response.data); 
      } catch (err) {
        setError('Não foi possível carregar os voos.');
      } finally {
        setIsLoading(false); 
      }
    })();
  }, []); // [] = Roda só uma vez

  // Renderização Condicional
  if (isLoading) {
    return <div className={styles.loading}>Carregando voos...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  // Renderização de Sucesso
  return (
    <div className={styles.container}>
      {/* Componente Reutilizado 1 */}
      <Header /> 

      <section className={styles.titleSection}>
        <h1>Histórico de Voos</h1>
        <p>Visualize seu histórico completo de voos realizados</p>
      </section>

      <main>
        <ul>
          {flights.map(flight => (
            <li key={flight.id}>
              <Link to={`/flight/${flight.id}`} className={styles.flightItem}>

                {/* Componente Reutilizado 2! */}
                <div className={styles.flightInfo}>
                  <FlightInfoCard flight={flight} />
                </div>

                {/* Componente de Saldo */}
                <FlightBalance value={flight.saldo} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}