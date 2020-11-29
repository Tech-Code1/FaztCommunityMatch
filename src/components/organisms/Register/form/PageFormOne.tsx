import React, { ChangeEvent, useState } from 'react'
import BtnNext from '../../../atoms/Register/BtnNext'
import DescriptionLogin from '../../../molecules/Register/description-login'
import EmailInput from '../../../molecules/Register/inputs/EmailInput'
import NameInput from '../../../molecules/Register/inputs/NameInput'

interface FormStateValues {
  firstName: string
  lastName: string
  email: string
}

const formInitialValues: FormStateValues = {
  firstName: '',
  lastName: '',
  email: ''
}

interface FormErrors {
  firstName: boolean
  lastName: boolean
  email: boolean
}

const formInitialErrors: FormErrors = {
  firstName: false,
  lastName: false,
  email: false
}

function PageFormOne() {
  const [formState, setFormState] = useState<FormStateValues>(formInitialValues)
  const [formErrors, setFormErrors] = useState<FormErrors>(formInitialErrors)
  const isEmpty = (value: string): boolean => {
    return value.trim().length === 0
  }

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.target.name)
    const hasError = isEmpty(e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: hasError })
  }

  return (
    <>
      <NameInput
        required
        placeHolder="*Ingresa tu nombre"
        handleOnChange={handleOnChange}
        error={formErrors.firstName}
        name="firstName"
        value={formState.firstName}
      />

      <NameInput
        required
        placeHolder="*Ingresa tu Apellido"
        handleOnChange={handleOnChange}
        error={formErrors.lastName}
        name="lastName"
        value={formState.lastName}
      />

      {/*  <LastnameInput aria-label="write your last name" /> */}
      <EmailInput
        className='gg'
        required
        placeHolder="*Ingresa tu Correo"
        handleOnChange={handleOnChange}
        error={formErrors.email}
        name="email"
        value={formState.email}
      />

      <DescriptionLogin />

      <div className="container-btn-next">
        <BtnNext />
      </div>

      {/* <div className="content-input">
        <InputPass />
        <ConfirmPass />
      </div>
      <div className="container-btns-register">
        <div className="containerbtn-return">
          <BtnmReturn />
        </div>
        <div className="containerbtn-blue">
          <BtnRegister />
        </div>
      </div> */}
    </>
  )
}

export default PageFormOne
