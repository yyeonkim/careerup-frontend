import React, { useCallback, useEffect, useState } from 'react';
import { Info } from './styles';
import { Title } from '../../ActivityInput/styles';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider, DatePicker, DatePickerProps, Space } from 'antd';
const { RangePicker } = DatePicker;
import useInput from '../../../../hooks/useInput';
import { useAppSelector } from '../../../../redux/hooks';

moment.locale('ko');

const ActivityInputInfo = () => {
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

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    setProjectName('');
    setInstitution('');
    setEach('');
    setRange([]);
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc, nowType]);

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
        <Space direction="vertical" style={{ width: 'auto', marginLeft: '-1rem' }}>
          <ConfigProvider locale={locale}>
            <RangePicker
              picker={'month'}
              format={'YYYY년 MM월'}
              separator={'~'}
              bordered={false}
              onChange={(e) => {
                onChangeRange(e);
              }}
              className={'date'}
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
      )}
      {isCertificate && (
        <div>
          <div>
            <Title>취득일</Title>
          </div>
          <Space direction="vertical" style={{ width: 'auto', marginLeft: '-1rem' }}>
            <ConfigProvider locale={locale}>
              <DatePicker format={'YYYY년 MM월 DD일'} onChange={onChangeDate} bordered={false} />
            </ConfigProvider>
          </Space>
        </div>
      )}
    </Info>
  );
};

export default ActivityInputInfo;
