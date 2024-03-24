import React from 'react'

export const CheckOut = (envioFormulario,capturar,orderId) => {
  return (
    <div>
    <h1>CheckOut</h1>
        {
            orderId ? <h1>Gracias por su compra El numero de su compra es {orderId}</h1> :
            <form onSubmit={envioFormulario}>
            <input
            type='"text'
            placeholder='Ingresa Tu Nombre'
            onChange={capturar}
            name='name'
            />
            <input
            type='"text'
            placeholder='Ingresa Tu Telefono'
            onChange={capturar}
            name='phone'
            />
            <input
            type='"text'
            placeholder='Ingresa Tu Email'
            onChange={capturar}
            name='email'
            />
            <button type='submit'>Enviar</button>
            </form>    
        }
    
    
    </div>
  )
}
