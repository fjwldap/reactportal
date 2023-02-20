import '../../css/popup.css';

function CommonPopup(props) {
  const popupObject = props.popupObject;

  function closeModal(val) {
    props.closeModal(val);
  }

  return (
    <div>
      <div className="cm_popup_overlay" onClick={() => closeModal(false)}></div>

      <div className="popup360">
        <h1>알림</h1>

        <article>
          <div className="btn_area" >
            <div style={{ fontSize: "20px" }}>
              {popupObject.popupMsg}
              <div>
                &nbsp;&nbsp; </div>
            </div>
            <button
              type="button"
              className="button_05"
              onClick={() => closeModal(true)}
            >확인
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="button_04"
              onClick={() => closeModal(false)}
            >취소
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CommonPopup;