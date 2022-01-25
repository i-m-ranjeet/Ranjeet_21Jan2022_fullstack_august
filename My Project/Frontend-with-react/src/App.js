import axios from 'axios';
import { useEffect} from 'react';
import './App.css';
import Home from './components/Home'
import { useSelector, useDispatch } from 'react-redux'
import {setProducts, addToCart} from './reducers/Reducers'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products').then(res => {
      dispatch(setProducts(res.data.data))
    })
    axios.get(`http://127.0.0.1:8000/all`).then((res)=>{
      // console.log(res.data);
      dispatch(addToCart(res.data))

})
  }, [])
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
