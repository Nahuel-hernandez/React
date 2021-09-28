import swal from 'sweetalert';
import { useCartContext } from '../context/cartContext'



function Alert() {

  const {borrarCarrito} = useCartContext ()
  swal({
    title: "Desea vaciar el carrito?",
    text: "Una vez vaciado, debera volver a seleccionar los juegos que desee comprar",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((aBorrar) => {
    if (aBorrar) {
      borrarCarrito()
      swal("El carrito ha sido vaciado", {
        icon: "success"}
      );
    } else {
      swal("No se ha vaciado el carrito");
    }
  });
  

    return (
      swal()
    )
}

export default Alert
