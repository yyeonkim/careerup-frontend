import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  Header,
  Line,
  Info,
  Content,
  Title,
  TextArea,
  Form,
  ProjectImage,
  SubTitle,
  UseTools,
  Tool,
  Review,
} from './styles';
import useInput from '../../../hooks/useInput';
import autosize from 'autosize';
import { FiChevronDown } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const ActivityInput = () => {
  const [projectName, onChangeProjectName, setProjectName] = useInput('');
  const [content, , setContent] = useInput('');
  const [role, onChangeRole, setRole] = useInput('');
  const [review, , setReview] = useInput('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onChangeReview = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
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
    <Wrapper>
      <Form>
        <Header>
          <img src="/images/plusBtn.png" alt="plus버튼" />
          <span>잇타(It's Time)</span>
        </Header>
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
            <DatePicker
              className={'calendar'}
              locale={ko}
              dateFormat="yyyy년 MM월    ~"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              showMonthYearPicker
            />
            <DatePicker
              className={'calendar'}
              locale={ko}
              dateFormat="yyyy년 MM월"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              showMonthYearPicker
            />
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
          <UseTools>
            <SubTitle>사용한 도구</SubTitle>
            <div>
              <Tool>Figma</Tool>
              <Tool>Figma</Tool>
              <Tool>Figma</Tool>
              <Tool>Figma</Tool>
              <Tool>Figma</Tool>
              <Tool>Figma</Tool>
            </div>
          </UseTools>
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
