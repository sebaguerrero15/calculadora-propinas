import { MenuItem, OrderItem } from "../types"

export type OrderActions = 
{type: 'add-item', payload: { menu: MenuItem } } |
{type: 'remove-item', payload: { id: MenuItem['id'] }} |
{type: 'place-order'} |
{type:'add-tip', payload: { value: number }}

export type OrderState = {
    order: OrderItem[],
    tip: number    
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if(action.type === 'add-item'){

        const itemExiste = state.order.find(orderItem => orderItem.id === action.payload.menu.id)
        let order: OrderItem[] = []
        if(itemExiste){
            order = state.order.map(orderItem => orderItem.id === action.payload.menu.id ?
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
        }else{
            const newItem : OrderItem = {...action.payload.menu, quantity:1}
        order = [...state.order, newItem]
    }
        return {
            ...state,
            order
        }
    }

    if(action.type === 'remove-item'){
        const order = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order
        }
    }

    if(action.type === 'place-order'){
        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if(action.type === 'add-tip'){
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    return state
}