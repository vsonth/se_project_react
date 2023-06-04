import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit
}) => {

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h3> {title}</h3>
        <form onSubmit={onSubmit}>
          {children}
        <button type="submit"> {buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
