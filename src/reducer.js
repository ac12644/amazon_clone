

export const initialState ={
    basket: [],  
    user: []
};

export const getBasketTotal= (basket) => 
basket.reduce((amount,item)=>item.price+amount,0);

const reducer = (state, action) => {
    console.log(action);
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
               basket: [...state.basket, action.item]
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            };
            
            case 'REMOVE_FROM_BASKET':           //by Abhishek Chauhan
                //Logic for Removing Item from basket 
                    let newBasket=[...state.basket];
        
                    const index=state.basket.findIndex((basketItem) => basketItem.id === action.id);
                    if (index>=0){
                        newBasket.splice(index,1);
                    }
                    else{
                        console.warn(`Cant remove product (id: ${action.id} ) as its not present`);
                    }
                
                    return {...state ,basket :newBasket};  
                default:
                    return state;
    }
};
export default reducer;