import {useAppDispatch} from "../../redux/store/hooks";
import {keyboardClicked} from "../../redux/middleware/keyboardHandlerMiddleware";

const Game = () => {

    const dispatch = useAppDispatch();

    document.addEventListener("keydown", (e: KeyboardEvent)=>{
        console.log(e.key);
        dispatch(keyboardClicked(e.key))
    })

    return(
    <h1>Game!</h1>
    )
}

export default Game;