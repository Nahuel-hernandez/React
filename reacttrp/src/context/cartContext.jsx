import { useContext, createContext ,  useState} from 'react'

const CartContext = createContext()

export const  useCartContext = () => useContext(CartContext) 



function CartContextProvider({children}) {
const [producto, setProducto] = useState ([])

const agregarAlCarrito =(prod, cant)=>{
    if (isInCart(prod.id)){
        const updateCart = [...producto];

        updateCart.forEach((element) => {
            if(element.prod.id === prod.id) {
                element.cant += cant
            }
        })
        setProducto(updateCart)
    }
    else{
    setProducto([...producto, {item: prod, quantity: cant}])
}
}

const isInCart = (id)=>{
    return producto.find((item) => item.id === parseInt (id))
}

function borrarCarrito (){
    setProducto([])
}

    console.log("test",producto ,)

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
