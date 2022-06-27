import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { totalPriceCalculator } from "../../utilities/priceCalculator";

const initialValues = {
    cartItems: []
}


const CartContext = createContext(initialValues);

export const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useLocalStorage('cart',[]);
   
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
      }

    const addToCart = (id,value, price, discount) => {
      if((!id && !value )||  (!price && !discount)){
        return
      }
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
              return [...currItems, { id, quantity: value, price: price, discount: discount}]
            } else {
              return currItems.map(item => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity + value , price: price, discount: discount }
                } else {
                  return item
                }
              })
            }
          })
    }

    const decreaseCartQuantity  = (id,value) => {
      if(!id || !value){
        return
      }
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - value }
              } else {
                return item
              }
            })
          }
        })
      }
      const removeFromCart = (id) => {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }

      const totalValues = () => cartItems.reduce((accumulator, object) => {
        return accumulator + (totalPriceCalculator(object.price,object.discount) * object.quantity);
      }, 0);

    const values = {
        addToCart,
        getItemQuantity,
        decreaseCartQuantity ,
        removeFromCart,
        cartItems,
        totalValues,
        cartQuantity
    }

    return(
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error('No context available')
    }
    return context
}