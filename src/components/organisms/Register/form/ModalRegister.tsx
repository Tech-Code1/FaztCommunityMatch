import { ButtonProps } from '@material-ui/core'
import React, { forwardRef, useImperativeHandle } from 'react'
import { useState, createContext } from 'react'
import ReactDOM from 'react-dom'

export const DisplayContext = createContext()

const ModalRegister = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [display, setDisplay] = useState(false)

    useImperativeHandle(ref, (): any => {
      return {
        openModal: () => open(),
        close: () => close()
      }
    })

    const open = () => {
      setDisplay(true)
    }

    const close = () => {
      setDisplay(false)
    }

    if (display) {
      return ReactDOM.createPortal(
        <div className={'modal-content'}>
          <div onClick={close} className={'modal-backdrop'}></div>
          <DisplayContext.Provider value={setDisplay}>
            <div className={'modal-box'}>{props.children}</div>
          </DisplayContext.Provider>
        </div>,
        document.getElementById('modal-root')
      )
    }
    return null
  }
)

export default ModalRegister
