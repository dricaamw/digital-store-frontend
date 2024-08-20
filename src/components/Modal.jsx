import { modalPropTypes } from "../utils/modalPropTypes";

const Modal = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center transition-colors">
      {children}
    </div>
  );
};

Modal.propTypes = modalPropTypes;

export default Modal;
