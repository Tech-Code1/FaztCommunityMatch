import React, { useContext } from 'react'
import { DisplayContext } from '../../../components/organisms/Register/form/ModalRegister'

function BtonCancel({ setDisplay }) {
  /* const setDisplay = useContext(DisplayContext) */

  return (
    <>
      <button
        onClick={() => {
          setDisplay(false)
          console.info('Clicked Cancel Button')
        }}
        className="btn-cancel"
      >
        Cancelar
      </button>
    </>
  )
}

export default BtonCancel
