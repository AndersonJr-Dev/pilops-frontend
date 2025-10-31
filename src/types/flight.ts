// Recebe os dados do GET /flights
export interface FlightSummary {
    id: string;
    aeronave: string;
    companhia: string;
    registro: string;
    rota: string;
    saldo: number;
    data: string;
}

// Recebe os dados do GET /flights/:id
export interface FlightDetails {
    id: string;
    aeronave: string;
    registro: string;
    companhia: string;
    data: string;
    saldo: number;
    xp: number;
    bonusMissao: number;
    origem: string;
    destino: string;
}