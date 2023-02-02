function CommonPopup(props) {



  return (
    <div>

      <div class="popup360">
        <h1>알림</h1>

        <article>
          <div class="btn_area" >
            <div style="font-size:20px;">
              {{ popupmsg }}
              <div>
                &nbsp;&nbsp; </div>
            </div>
            <button
              type="button"
              class="button_05"
            // @click="[$emit('popup', true), $emit('AGREE')]"
            >확인
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="button_04"
            // @click="$emit('popup')"
            >취소
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CommonPopup;