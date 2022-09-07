import { dataDishes } from "../../data/dataDishes"
import deleteImage from "./delete.png"
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem =({cartItem})=>{
   const dispatch = useDispatch()
   const dishes = dataDishes.find(item=>item.id === cartItem.dishId)
   return(
      <div>
<p>{dishes.name}</p>
<p>{cartItem.quantity} portion(s)</p>
<p>{(dishes.price * cartItem.quantity).toFixed(2)}</p>
<span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
<img className="icon" src ={deleteImage} alt="delete"/>
</span>
      </div>
   )
}
export default CartItem