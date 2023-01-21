import { ChangeEventHandler, FormEventHandler } from 'react';
import { useHistory } from 'react-router-dom';

import { IMapInputs } from '../../../interfaces';
import { Modal, ModalButton } from './style';

interface Props {
  inputs: IMapInputs;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  resetInputs: () => void;
}

function MapModal({ inputs, onChange, onSubmit, resetInputs }: Props) {
  const history = useHistory();

  const cancelEditMap = () => {
    const ok = confirm('작성을 취소할까요?');
    if (ok) {
      history.push('/mypage');
      resetInputs();
    }
  };

  return (
    <Modal>
      <form onSubmit={onSubmit}>
        <input
          required={true}
          maxLength={30}
          type="text"
          name="title"
          value={inputs.title}
          onChange={onChange}
          placeholder="커리어맵 제목을 입력하세요."
        />
        <textarea
          required={true}
          maxLength={30}
          name="career"
          value={inputs.career}
          onChange={onChange}
          placeholder="희망 커리어를 입력하세요.&#10;ex) 프론트엔드 개발자"
        />
        <div className="button-field">
          <ModalButton>확인</ModalButton>
          <ModalButton onClick={cancelEditMap}>취소</ModalButton>
        </div>
      </form>
    </Modal>
  );
}

export default MapModal;
