import styles from './FlightInfoCard.module.css';

interface FlightInfoProps {
    flight: {
        aeronave: string;
        companhia: string;
        origem: string;
        destino: string;
        registro: string;
        data: string;
    }
}

export function FlightInfoCard({ flight }: FlightInfoProps) {
    //Formata a data para o formato DD/MM/AAAA
    const formattedDate = new Date(flight.data).toLocaleDateString('pt-BR', { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
});

    return (
        <div className={styles.card}>
            {/* Coluna 1: Aeronave (Fica como está, alinhada à esquerda) */}
            <div className={styles.column}> 
                <span className={styles.title}>Aeronave</span>
                <span className={styles.value}>{flight.aeronave}</span>
                <span className={styles.subtitle}>{flight.companhia}</span>
            </div>

            {/* Coluna 2: Trajeto (ADICIONA a classe .columnCenter) */}
            <div className={`${styles.column} ${styles.columnCenter}`}> 
              <span className={styles.title}>Trajeto</span>

              {/* 1. LINHA DO VISUAL */}
              <div className={styles.pathVisual}> 
                <div className={styles.pathDot}></div>
                <div className={styles.pathLine}></div>
                <div className={styles.pathDot}></div>
              </div>

              {/* 2. LINHA DOS TEXTOS */}
              <div className={styles.pathAirports}> 
                <span className={styles.pathAirport}>{flight.origem}</span>
                <span className={styles.pathAirport}>{flight.destino}</span>
              </div>
            </div>

            {/* Coluna 3: Matrícula (ADICIONA a classe .columnCenter) */}
            <div className={`${styles.column} ${styles.columnCenter}`}>
              <span className={styles.title}>Matrícula</span>
              <span className={styles.value}>{flight.registro}</span>
            </div>

              {/* Coluna 4: Data (ADICIONA a classe .columnCenter) */}
            <div className={`${styles.column} ${styles.columnCenter}`}>
                <span className={styles.title}>Data</span>
                <span className={styles.value}>{formattedDate}</span>
            </div>
        </div>
    );
}