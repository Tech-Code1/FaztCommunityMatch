import BtnDone from '../../../atoms/Register/BtnDone'
import CheckModal from '../../../atoms/Register/CheckModal'

function ModalDone() {
  return (
    <div className="content-modal">
      <CheckModal />
      <h2 className="title-attention">¡Enhorabuena!</h2>
      <p className="paragraph-register">El usuario:</p>
      <p className="paragraph-register">Juanito</p>
      <p className="paragraph-register">Ha sido registrado con éxito.</p>
      <div className="content-buttons">
        <BtnDone />
      </div>
    </div>
  )
}

export default ModalDone
