import cartImg from './cart.png'
import { useSelector } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice'
import CartItem from './CartItem'


const Cart = ()=>{
   const cartItems = useSelector(getCartItems)
   const totalPrice = useSelector(getTotalPrice)
   return(
      <div>
<img className='cartIcon' src ={cartImg} alt="cart"/>
<h3>TOTAL: ${totalPrice.toFixed(2)}</h3>
{cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
      </div>
   )
}
export default Cart