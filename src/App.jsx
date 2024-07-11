import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter'

function App() {


  const {counter} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
     
      <h1>count is {counter}</h1>
      <button onClick={() => dispatch(increment())}>
          INCREMENTAR
        </button>
        <button onClick={() => dispatch(decrement())}>
          DECREMENTAR
        </button>
        <button onClick={() => dispatch(incrementBy(5))}>
          INCREMENTAR POR 5
        </button>
  
    </>
  )
}

export default App
