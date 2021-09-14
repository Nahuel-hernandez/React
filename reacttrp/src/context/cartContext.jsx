import { useContext, createContext ,  useState} from 'react'


const CartContext = createContext()

export const  useCartContext = () => useContext(CartContext) 


function CartContextProvider({children}) {
const [producto, setProducto] = useState ([])

const agregarAlCarrito = (item, quantity)=>{
	if(isInCart(item.id)) {
        const updateCart = [...producto];

        updateCart.forEach((element) => {
            if(element.item.id === item.id) {
                element.quantity += quantity
            }
        })
        setProducto(updateCart)
    } else {
        setProducto([...producto, {item, quantity}])
    }
}

console.log(producto)

const isInCart = (id) => {
    return producto.find(element => element.item.id === id)
}

const borrarCarrito =()=>{
    setProducto([])
}

const borrarJuego = (itemId) =>{
    const filtro = producto.filter (element => element.item.id !== itemId)
    return setProducto(filtro)

}

    return (
        <CartContext.Provider value={{
            producto,
            agregarAlCarrito,borrarCarrito,borrarJuego

        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
