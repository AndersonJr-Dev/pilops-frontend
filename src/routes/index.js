import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FlightsList } from '../pages/FlightsList';
import { FlightDetails } from '../pages/FlightDetails';
// Cria o mapa de rotas da aplicação
const router = createBrowserRouter([
    {
        path: '/', // Rota raiz que exibe a lista de voos
        element: _jsx(FlightsList, {}),
    },
    {
        path: '/flight/:id', // Rota para exibir os detalhes de um voo específico
        element: _jsx(FlightDetails, {}),
    },
]);
export function AppRoutes() {
    return _jsx(RouterProvider, { router: router });
}
