import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import "./Cart.css"

export const CartContainer = () => {
   const {cart,limpiarCart,removeById,totalPriceCart} = useContext(CartContext)

   let total = totalPriceCart()
   const cleanAlert = ()=>{
    Swal.fire({
      title:"¿Quieres borrar los productos del carrito?",
      showDenyButton:true,
      showCancelButton:false,
      confirmButtonText:"Limpiar",
      denyButtonText:"Cancelar",
    }).then((result)=>{
      if(result.isConfirmed){
        limpiarCart()
        Swal.fire("Limpieza Exitosa")
      }else if(result.isDenied){
        Swal.fire("Los productos no fueron removidos")
      }
    })
   }
  return (
<div>
  <div>      
    <div>
        {
        cart.map((product)=>(
        <div className='cartCard' key={product.id}>
          <img className='imgCartArt' src={product.img} alt="" />
          <h2>{product.title}</h2>
          <h3>${product.price}c/u</h3>
          <h3>Unidades: {product.quantity}</h3>

          <button className='btnEliminar' onClick={ ()=> removeById(product.id)}>Eliminar</button>
        </div>))}    
        <button onClick={cleanAlert}>Limpriar Carrito</button>
    </div>
    <div className="cart-info">
          <h3>Precio total: ${total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Link to="/checkout">
                <button>Finalizar Compra</button>
              </Link>
            </div>
          ) : (
            <h1>Parece que no tienes productos en el carrito... ¡Deberias ver nuestros productos!</h1>,
            <Link to="/">
              <button>Agrega Articulos</button>
            </Link>
          )}
        </div>



  </div> 
</div>
  )
}
