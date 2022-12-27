import React, { useCallback, useEffect, useState } from 'react';
import { Info } from './styles';
import { Title } from '../../ActivityInput/styles';
import { ConfigProvider, DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import locale from 'antd/lib/locale/ko_KR';
import useInput from '../../../../hooks/useInput';
import { useAppSelector } from '../../../../redux/hooks';

const ActivityInputContent = () => {
  const { isCertificate, isClub, isContest, isActivity, isStudy, isEtc, nowType } = useAppSelector(
    (state) => state.roadMap
  );
  const [projectName, onChangeProjectName, setProjectName] = useInput('');
  const [institution, onChangeInstitution, setInstitution] = useInput('');
  const [each, onChangeEach, setEach] = useInput('');
  const [eachName, setEachName] = useState('');
  const [range, setRange] = useState([]);

  const eachList = ['맡은 역할', '공모 분야', '분야', '스터디 주제'];

  useEffect(() => {
    if (isClub || isEtc) setEachName(eachList[0]);
    else if (isContest) setEachName(eachList[1]);
    else if (isActivity) setEachName(eachList[2]);
    else setEachName(eachList[3]);
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc]);

  const onChangeRange = useCallback((e: any) => {
    setRange(e);
  }, []);

  return (
    <Info>
      <div>
        <div>
          <Title>{isEtc ? '활동' : nowType}명</Title>
        </div>
        <input
          type="text"
          value={projectName}
          onChange={onChangeProjectName}
          placeholder={'ex) 커리업(Career-up)'}
          spellCheck={false}
          required
        />
      </div>
      {(isActivity || isContest) && (
        <div>
          <div>
            <Title>기관명</Title>
          </div>
          <input
            type="text"
            value={institution}
            onChange={onChangeInstitution}
            placeholder={'ex) 기관명'}
            spellCheck={false}
            required
          />
        </div>
      )}
      <div>
        <div>
          <Title>{isCertificate ? '공부 기간' : '기간'}</Title>
        </div>
        <Space direction="vertical" style={{ width: 'auto' }}>
          <ConfigProvider locale={locale}>
            <RangePicker
              picker={'month'}
              format={'YYYY년 MM월'}
              separator={'~'}
              bordered={false}
              autoFocus={false}
              onChange={(e) => {
                onChangeRange(e);
              }}
            />
          </ConfigProvider>
        </Space>
      </div>
      {!isCertificate && (
        <div>
          <div>
            <Title>{eachName}</Title>
          </div>
          <input
            type="text"
            value={each}
            onChange={onChangeEach}
            placeholder={'ex) 기획 / 디자인'}
            spellCheck={false}
            required
          />
        </div>
      )}{' '}
      {isCertificate && (
        <div>
          <div>
            <Title>취득일</Title>
          </div>
          <input type="text" spellCheck={false} required />
        </div>
      )}
    </Info>
  );
};

export default ActivityInputContent;
