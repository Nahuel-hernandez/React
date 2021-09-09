import { useContext, createContext ,  useState} from 'react'

const CartContext = createContext()

export const  useCartContext = () => useContext(CartContext) 

function CartContextProvider({children}) {
const [producto, setProducto] = useState ([{}])

function agregarAlCarrito(prod){
    setProducto([...producto,prod])
}

function borrarCarrito (){
    setProducto([])
}

    console.log(producto)

    return (
        <CartContext.Provider value={{
            producto,
            agregarAlCarrito,borrarCarrito

        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
