import { useAppDispatch } from '../redux/hooks'
import { useEffect } from 'react'
import { keyboardClicked } from '../redux/Features/keyboard/keyboardActions'

const Game = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            dispatch(keyboardClicked(e.key.toUpperCase()))
        })
    }, [])
    return <h1>רן אלבז המלך🇷🇺</h1>
}

export default Game
