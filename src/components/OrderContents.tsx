import { Dispatch } from "react"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-semibold text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-t-2 border-gray-300 py-5 last-of-type:border-b">
                        <div>
                       <p>{item.name} - ${item.price}</p>
                       <p className="font-bold">Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                        </div>

                        <button 
                        className="bg-red-600 h-8 w-8 text-white font-bold rounded-md hover:bg-red-400 hover:cursor-pointer"
                        onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
