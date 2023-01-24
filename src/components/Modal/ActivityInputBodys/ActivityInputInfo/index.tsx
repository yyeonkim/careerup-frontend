import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Info } from './styles';
import { Title } from '../../ActivityInput/styles';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider, DatePicker, DatePickerProps, Space } from 'antd';
const { RangePicker } = DatePicker;
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  changeDate,
  changeEach,
  changeInstitution,
  changePeriod,
  changeProjectName,
  changeTitle,
  editMode,
} from '../../../../redux/reducers/RoadMapSlice';
import dayjs from 'dayjs';

moment.locale('ko');

const ActivityInputInfo = () => {
  const dispatch = useAppDispatch();
  const {
    isCertificate,
    isClub,
    isContest,
    isExternalActivity,
    isStudy,
    isEtc,
    nowType,
    projectName,
    institution,
    each,
    nowTypeKr,
    isEditMode,
    itemInfo,
    date,
  } = useAppSelector((state) => state.roadMap);

  const [eachName, setEachName] = useState('');

  const eachList = ['맡은 역할', '공모 분야', '분야', '스터디 주제'];

  const onChangeProjectName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeProjectName(e.target.value));
  }, []);

  const onChangeInstitution = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInstitution(e.target.value));
  }, []);

  const onChangeEach = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEach(e.target.value));
  }, []);

  useEffect(() => {
    if (isClub || isEtc) setEachName(eachList[0]);
    else if (isContest) setEachName(eachList[1]);
    else if (isExternalActivity) setEachName(eachList[2]);
    else setEachName(eachList[3]);
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

  const onChangeRange = useCallback((e: any) => {
    if (e) {
      const day = [e[0]['$M'] + 1, e[1]['$M'] + 1];
      if (day[0] < 10) day[0] = '0' + day[0];
      if (day[1] < 10) day[1] = '0' + day[1];

      dispatch(changePeriod(`${e[0]['$y']}.${day[0]}-${e[1]['$y']}.${day[1]}`));
    }
  }, []);

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    let temp = dateString.split(/ |년|월|일/);
    temp = temp.filter((day) => day !== '');

    dispatch(changeDate(temp.join('.')));
  };

  useEffect(() => {
    dispatch(changeProjectName(''));
    dispatch(changeInstitution(''));
    dispatch(changeEach(''));
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc, nowType]);

  useEffect(() => {
    if (itemInfo) {
      dispatch(changeProjectName(itemInfo.subtitle));
      dispatch(changeInstitution(itemInfo.institution));
      dispatch(changePeriod(itemInfo.period));
      dispatch(changeDate(itemInfo.acquisition));
      dispatch(changeEach(itemInfo.field ?? itemInfo.role));
    }
  }, [itemInfo]);

  return (
    <Info isEditMode={isEditMode}>
      <div>
        <div>
          <Title>{isEtc ? '활동' : nowTypeKr}명</Title>
        </div>
        <input
          type="text"
          value={projectName}
          onChange={onChangeProjectName}
          placeholder={'ex) 커리업(Career-up)'}
          spellCheck={false}
          disabled={!isEditMode}
          required
        />
      </div>
      {(isExternalActivity || isContest) && (
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
            disabled={!isEditMode}
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
            {!itemInfo && (
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
            )}
            {itemInfo && (
              <RangePicker
                suffixIcon={null}
                picker={'month'}
                format={'YYYY년 MM월'}
                separator={'~'}
                bordered={false}
                onChange={(e) => {
                  onChangeRange(e);
                }}
                className={'date exist'}
                defaultValue={[
                  dayjs(itemInfo.period.split('-')[0], 'YYYY년 MM월'),
                  dayjs(itemInfo.period.split('-')[1], 'YYYY년 MM월'),
                ]}
                disabled={!isEditMode}
              />
            )}
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
            disabled={!isEditMode}
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
              {!itemInfo && <DatePicker format={'YYYY년 MM월 DD일'} onChange={onChangeDate} bordered={false} />}
              {itemInfo && (
                <DatePicker
                  suffixIcon={isEditMode ? false : null}
                  format={'YYYY년 MM월 DD일'}
                  onChange={onChangeDate}
                  bordered={false}
                  defaultValue={dayjs(itemInfo.acquisition, 'YYYY년 MM월 DD일')}
                  disabled={!isEditMode}
                />
              )}
            </ConfigProvider>
          </Space>
        </div>
      )}
    </Info>
  );
};

export default ActivityInputInfo;
