import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getFirestore } from '../service/getFirebase'
import swal from 'sweetalert';

let styles = {
    fontSize:30,
    backgroundColor:"transparent",
    width:250,
    height: 50
}


let styles2 ={
    backgroundColor:"rgb(18, 17, 17)"
}

function PreCart() {
    const {borrarCarrito,producto,borrarJuego} = useCartContext ()
    let total=0

    const [formData,setFormData] =useState({
        nombre:'',
        email:'',
        tel:'',
        reEmail:''
    })

    let [validado, setvalidado] = useState("false")
    

    function Validar(e){
        e.preventDefault()
        if ( (formData.nombre.length !==0) && (formData.tellength !==0) && (formData.email.length !==0) && (formData.reEmail===formData.email)){
            setvalidado("true")
        }
        else{
            alert("Error , revise sus datos")
            setvalidado("false")
        }
    }

    function cambiar(e){
        setFormData(
            {
            ...formData,
            [e.target.name]:e.target.value
            }
        )
    }

    function enviar(e){
    e.preventDefault()
    const nuevaOrden={
                    comprador: formData,
                    items: producto,
                    total: total
    }

        const db = getFirestore()
        const ordenes = db.collection('ordenes')
        ordenes.add(nuevaOrden)
        
        .then (resp=> swal("Gracias por su compra", `Su orden de compra es: ${resp.id}`, "success")
        )
        .finally(()=>{
            setFormData({
                nombre:'',
                email:'',
                tel:''
            })
            borrarCarrito()
            setvalidado("false")
        })
    }

    return (
        <div >
            {producto.length ===0 ? ( <div><h1 className="text-danger">El carrito esta vacio</h1><br/>  <Link exact path to={'/'}> <button className="btn btn-outline-danger" >Seguir comprando</button></Link> </div> ) : (<div>
            {producto.map((item)=> 
            <div className="app" >
            <div key={item.item.id} className="card border-danger" style={styles2}>
            <div className="card-body text-danger ">
            <img src={item.item.urlImg} alt="Imagen del juego" width="600" height="400"/>
            <div className="card-title "> {item.item.nombre} </div>
            </div>       
            <div>
                <div className="card-text text-danger">Precio por unidad: {item.item.precio} AR$</div> <br />
                <div className="card-text text-danger">Genero: {item.item.genero}</div> <br />
                <div className="card-text text-danger"> Cantidad: {item.quantity} </div> <br />
                <div className="card-text text-danger"> precio total de este juego: {(item.quantity)*(item.item.precio)} </div>
                <div className="ocultar">{total=total+(item.quantity)*(item.item.precio)}</div><br/>
                <button className="btn btn-outline-danger" onClick={()=>borrarJuego(item.item.id)} style={styles}>Borrar Juego</button>
                <br/> <br/>
                </div>
                </div>
                
                <h1 className="text-danger">El total a pagar es de  {total} AR$ </h1> <button className="btn btn-outline-danger" onClick={borrarCarrito} style={styles}>Borrar Carrito</button><br/> <br/></div>)}
                {validado ==="false"? (
                <form onChange={cambiar} >
                <input type="text" style={styles2} className="form-control border-danger text-danger is-invalid" placeholder="nombre" name="nombre" defaultValue={formData.nombre}/>
                <input type="text"style={styles2} className="form-control border-danger text-danger is-invalid" placeholder="telefono" name="tel" defaultValue={formData.tel}/>
                <input type="email" style={styles2} className="form-control border-danger text-danger is-invalid" placeholder="email" name="email" defaultValue={formData.email}/>
                <input type="email"style={styles2}  className="form-control border-danger text-danger is-invalid" placeholder="confirme email" name="reEmail" defaultValue={formData.reEmail}/>
                <button onClick={Validar} className="btn btn-outline-danger" style={styles}>Validar</button>
                </form>):(<div>
                <input type="text" style={styles2} className="form-control is-valid" placeholder="nombre" name="nombre" defaultValue={formData.nombre}/>
                <input type="text" style={styles2} className="form-control is-valid" placeholder="telefono" name="tel" defaultValue={formData.tel}/>
                <input type="email" style={styles2} className="form-control is-valid" placeholder="email" name="email" defaultValue={formData.email}/>
                <input type="email" style={styles2} className="form-control is-valid" placeholder="confirme email" name="reEmail" defaultValue={formData.reEmail}/>
                    <br/> <br/>
                <button onClick={enviar} className="btn btn-outline-danger" style={styles}>Terminar compra</button>
                </div>
                )}
                </div>
                
            )
}
</div>
    )
}

export default PreCart
