import { useState } from "react"
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"

const Dish = ({dish})=>{
   const [quantity, setQuantity] = useState(1)
   const dispatch = useDispatch()
   return(
      <div className="block-food">
<div className="food-frame">
<img src={`${dish.img}.jpg`}/>
</div>
<h3>{dish.name}</h3>
<p>{dish.description}</p>
<h4>${dish.price.toFixed(2)}</h4>
<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<div>
<button onClick={()=>dispatch(addItemToCart({dish, quantity}))}>ADD TO CART</button>
</div>
      </div>
   )
}
export default Dish