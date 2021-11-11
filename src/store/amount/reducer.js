/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */




const initialState = {
    amount : 0,
}

export default (state = initialState ,action) => {
    switch(action.type){
        case "DEPOSIT_MONEY":
            return{
                ...state,
                amount: state.amount + 10
            }
            
    }
    switch(action.type){
        case "WITHDRAW_MONEY":
            return{
                ...state,
                amount: state.amount - 10
            }
        default:
            return state
    
    }
    
}

export const selectCurrentAmount = (state) =>{
    return state.amountReducer.amount
}