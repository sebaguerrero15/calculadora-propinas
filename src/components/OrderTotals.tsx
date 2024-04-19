import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total , item) => total + (item.quantity * item.price), 0) , [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])
    
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-blacl text-2xl">Totales y Propina:</h2>
            <p>Subtotal a Pagar:
                <span className="font-bold"> ${subtotalAmount}</span>
            </p>

            <p>Propina:
                <span className="font-bold"> ${tipAmount}</span>
            </p>

            <p>Total a Pagar:
                <span className="font-bold"> ${totalAmount}</span>
            </p>
        </div>

        <button 
        className="w-full font-bold bg-black uppercase text-white py-3 rounded-md hover:bg-orange-500 mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => dispatch({type: 'place-order'})}
        >
            Guardar Orden
        </button>
    </>
  )
}
