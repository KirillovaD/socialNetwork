import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogs_items}>
              <div className={s.dialog +' '+ s.active}>Dmitrii</div>
              <div className={s.dialog}>Kate</div>
              <div className={s.dialog}>Svetlana</div>
              <div className={s.dialog}>Alex</div>
              <div className={s.dialog}>Nick</div>
          </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
            </div>

        </div>
    );
};

export default Dialogs;