import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Wrapper, Line, Info, Content, Title, TextArea, Form, ProjectImage, Review } from './styles';
import useInput from '../../../hooks/useInput';
import autosize from 'autosize';
import { FiChevronDown } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { closeIsActivityTypeModal, toggleIsModal } from '../../../redux/reducers/RoadMapSlice';
import { ConfigProvider, DatePicker, Space } from 'antd';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import ActivityInputHeader from '../../ActivityInputHeader';
const { RangePicker } = DatePicker;

const ActivityInput = () => {
  const dispatch = useAppDispatch();

  const [projectName, onChangeProjectName, setProjectName] = useInput('');
  const [content, , setContent] = useInput('');
  const [role, onChangeRole, setRole] = useInput('');
  const [review, , setReview] = useInput('');
  const [range, setRange] = useState([]);

  const onChangeRange = useCallback((e: any) => {
    setRange(e);
  }, []);

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onChangeReview = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  }, []);

  const onClickBackGround = useCallback(() => {
    dispatch(toggleIsModal());
  }, []);

  const onClose = useCallback(() => {
    dispatch(closeIsActivityTypeModal());
  }, []);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const reviewTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (contentTextareaRef) {
      autosize(contentTextareaRef.current as HTMLTextAreaElement);
    }
  }, []);

  useEffect(() => {
    if (reviewTextareaRef) {
      autosize(reviewTextareaRef.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <Wrapper onClick={onClickBackGround}>
      <Form
        onClick={(e) => {
          stopPropagation(e);
          onClose();
        }}
      >
        <ActivityInputHeader />
        <Line>
          <div />
        </Line>
        <Info>
          <div>
            <div>
              <Title>프로젝트 명</Title>
            </div>
            <input
              type="text"
              value={projectName}
              onChange={onChangeProjectName}
              placeholder={'ex) 커리업(Career-up)'}
              required
            />
          </div>
          <div>
            <div>
              <Title>기간</Title>
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
          <div>
            <div>
              <Title>맡은 역할</Title>
            </div>
            <input type="text" value={role} onChange={onChangeRole} placeholder={'ex) 기획 / 디자인'} required />
          </div>
        </Info>
        <Line>
          <div />
        </Line>
        <Content>
          <div>
            <Title>프로젝트 활동 내용</Title>
            <div>
              <TextArea
                value={content}
                onChange={onChangeContent}
                ref={contentTextareaRef}
                placeholder={'활동 내용을 입력해주세요.'}
                required
              />
            </div>
          </div>
          <ProjectImage>
            <span>프로젝트 관련 사진을 넣어보세요.</span>
            <span>
              <FiChevronDown />
            </span>
          </ProjectImage>
        </Content>
        <Line>
          <div />
        </Line>
        <Review>
          <Title>활동하면서 배운점/느낀점</Title>
          <div>
            <TextArea
              value={review}
              onChange={onChangeReview}
              ref={reviewTextareaRef}
              placeholder={'배운점/느낀점을 입력해주세요.'}
              required
            />
          </div>
        </Review>
      </Form>
    </Wrapper>
  );
};

export default ActivityInput;
