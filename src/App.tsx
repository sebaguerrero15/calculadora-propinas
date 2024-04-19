import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
     <header className="p-5 bg-slate-900">
        <h1 className="text-white uppercase text-center text-3xl font-bold">Calculadora de Popinas y consumo</h1>
     </header>

     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-2">
      <div className="p-5">
        <h2 className="font-semibold text-4xl mb-4">Menú</h2>
        {menuItems.map(menu => (
          <MenuItem 
            key={menu.id}
            menu={menu}
            dispatch={dispatch}
            
           />
        ))}
      </div>

      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {state.order.length > 0 ? (
          <>
        <OrderContents 
        order={state.order} 
        dispatch={dispatch} 
        />

        <TipPercentageForm 
        dispatch={dispatch}
        tip={state.tip}
        />

        <OrderTotals
        order={state.order}
        tip={state.tip}
        dispatch={dispatch}
        />
        </>
        ):
        <p className="text-center text-xl">La orden esta vacia</p>
        }
      </div>
     </main>
    </>
  )
}

export default App
