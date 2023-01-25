import { createBrowserRouter } from 'react-router-dom'
import { Welcome } from '../Pages/Welcome'
import Game from '../Pages/Game'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/game',
        element: <Game />,
    },
])
