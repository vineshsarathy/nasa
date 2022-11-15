import React from "react";
import "./modal.css";
const Modal = ({ content, closePopup }) => {
  return (
    <div className="modal-container">
     <div className="modal-body">
        <div>
        <img className='modelImg' 
        src={content.img} alt="" />
        <h3>{content.title}</h3>
        <p className="modalPara">{content.desc.slice(0,300)}...</p>
</div>
      <button className="closeBtn" onClick={()=>closePopup(false)}>close</button> 
     </div>
    </div>
  );
};
export default Modal 