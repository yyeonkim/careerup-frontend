import axios from 'axios';
import { IoClose } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

import useGetMyMaps from '../../hooks/useGetMyMaps';
import useGetInputs from '../../hooks/useGetInputs';
import useSetIsEdit from '../../hooks/useSetIsEdit';
import { IMyMap } from '../../interfaces';
import { Card } from './style';

const accessToken = localStorage.getItem('accessToken');

export default function MapCard({ title, career, mapIdx }: IMyMap) {
  const { isEdit } = useSetIsEdit();
  const { myMaps, setMyMaps } = useGetMyMaps();
  const { resetInputs } = useGetInputs();

  const history = useHistory();

  const onClickMap = (mapIdx: number) => {
    if (isEdit) {
      const ok = confirm('수정을 취소할까요? 값이 저장되지 않습니다.');
      if (ok) {
        cancelEdit();
        history.push(`/career-maps/${mapIdx}`);
      }
    } else {
      history.push(`/career-maps/${mapIdx}`);
    }
  };

  const cancelEdit = () => {
    resetInputs();
    history.push('/mypage');
  };

  const onClickDeleteMap = async (mapIdx: number) => {
    const ok = confirm('커리어 맵을 삭제할까요?');
    if (ok) {
      const response = await axios.patch(
        `/map/${mapIdx}/delete`,
        { mapIdx },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (response.status === 200) {
        setMyMaps(myMaps.filter((item) => item.mapIdx !== mapIdx));
      }
    }
  };

  return (
    <Card>
      <div className="card__info" onClick={() => onClickMap(mapIdx)}>
        <span>{title}</span>
        <span>{career}</span>
      </div>
      {!isEdit && (
        <div className="card__delete-icon" onClick={() => onClickDeleteMap(mapIdx)}>
          <IoClose color="red" size="2rem" />
        </div>
      )}
    </Card>
  );
}
