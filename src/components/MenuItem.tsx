import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemsProps = {
  menu: MenuItem,
  dispatch: Dispatch<OrderActions>
}

const MenuItem = ({menu, dispatch}: MenuItemsProps)  => {
  return (
    <button 
      onClick={() => dispatch({type: 'add-item', payload: {menu}})} 
      className="border-2 p-3 w-full m-2 rounded-lg text-white flex justify-between bg-orange-600 hover:bg-orange-400 hover:cursor-pointer">
      
      <p className="text-xl">{menu.name}</p>
      <p className="font-black text-xl">${menu.price}</p>
    </button>
  )
}

export default MenuItem