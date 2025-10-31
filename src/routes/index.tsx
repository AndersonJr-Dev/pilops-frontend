import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FlightsList } from '../pages/FlightsList';
import { FlightDetails } from '../pages/FlightDetails';

// Cria o mapa de rotas da aplicação
const router = createBrowserRouter([
    {
        path: '/', // Rota raiz que exibe a lista de voos
        element: <FlightsList />,
    },
    {
        path: '/flight/:id', // Rota para exibir os detalhes de um voo específico
        element: <FlightDetails />,
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />;
}