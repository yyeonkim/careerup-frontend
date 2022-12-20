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
  ToolPlus,
  ToolInputModal,
  DateSelect,
  ActivityType,
  Types,
  TypeImg,
} from './styles';
import useInput from '../../../hooks/useInput';
import autosize from 'autosize';
import { FiChevronDown } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import { BiPlus } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  changeEndMonth,
  changeEndYear,
  changeStartMonth,
  changeStartYear,
  closeIsActivityTypeModal,
  closeIsToolModal,
  roadMap,
  toggleIsActivityTypeModal,
  toggleIsModal,
  toggleIsToolModal,
} from '../../../redux/reducers/RoadMapSlice';

const ActivityInput = () => {
  const dispatch = useAppDispatch();
  const [projectName, onChangeProjectName, setProjectName] = useInput('');
  const [content, , setContent] = useInput('');
  const [role, onChangeRole, setRole] = useInput('');
  const [review, , setReview] = useInput('');
  const [tool, onChangeTool, setTool] = useInput('');
  const isActivityTypeModal = useAppSelector(roadMap).isActivityTypeModal;
  const isToolModal = useAppSelector(roadMap).isToolModal;

  const year = new Date().getFullYear();
  const yearRange = Array.from({ length: year - 2010 + 11 }, (v, i) => 2010 + i);
  const monthRange = Array.from({ length: 12 }, (v, i) => 1 + i);
  const startYear = useAppSelector(roadMap).modalData.Date.startYear;
  const startMonth = useAppSelector(roadMap).modalData.Date.startMonth;
  const endYear = useAppSelector(roadMap).modalData.Date.endYear;
  const endMonth = useAppSelector(roadMap).modalData.Date.endMonth;

  const onChangeStartDateYear = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeStartYear(parseInt(e.target.value)));
  }, []);

  const onChangeStartDateMonth = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeStartMonth(parseInt(e.target.value)));
  }, []);

  const onChangeEndDateYear = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeEndYear(parseInt(e.target.value)));
  }, []);

  const onChangeEndDateMonth = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeEndMonth(parseInt(e.target.value)));
  }, []);

  const [dummyTool, setDummyTool] = useState(['Figma', 'React', 'TS', 'JS']);

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

  const onClickHeaderPlus = useCallback(() => {
    dispatch(toggleIsActivityTypeModal());
  }, []);

  const onClickToolPlus = useCallback(() => {
    dispatch(toggleIsToolModal());
  }, []);

  const onClose = useCallback(() => {
    dispatch(closeIsActivityTypeModal());
    dispatch(closeIsToolModal());
    setTool('');
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
        <Header>
          <img
            src="/images/plusBtn.png"
            alt="plus버튼"
            onClick={(e) => {
              stopPropagation(e);
              onClickHeaderPlus();
            }}
          />
          <span>잇타(It's Time)</span>
          {isActivityTypeModal && (
            <ActivityType onClick={stopPropagation}>
              <div>
                <img src="/images/activityType.png" alt="활동" />
                <Types>
                  <div>
                    <TypeImg></TypeImg>
                    <span>자격증</span>
                  </div>
                  <div>
                    <TypeImg></TypeImg>
                    <span>동아리</span>
                  </div>
                  <div>
                    <TypeImg></TypeImg>
                    <span>공모전</span>
                  </div>
                  <div>
                    <TypeImg></TypeImg>
                    <span>대외활동</span>
                  </div>
                  <div>
                    <TypeImg></TypeImg>
                    <span>스터디</span>
                  </div>
                  <div>
                    <TypeImg></TypeImg>
                    <span>기타</span>
                  </div>
                </Types>
              </div>
            </ActivityType>
          )}
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
            <DateSelect onChange={onChangeStartDateYear} value={startYear}>
              {yearRange.map((year) => (
                <option value={year} key={year}>
                  {year}년
                </option>
              ))}
            </DateSelect>
            <DateSelect onChange={onChangeStartDateMonth} value={startMonth}>
              {monthRange.map((month) => (
                <option value={month} key={month}>
                  {month}월
                </option>
              ))}
            </DateSelect>
            <span className="dateWave">~</span>
            <DateSelect onChange={onChangeEndDateYear} value={endYear}>
              {yearRange.map((year) => (
                <option value={year} key={year}>
                  {year}년
                </option>
              ))}
            </DateSelect>
            <DateSelect onChange={onChangeEndDateMonth} value={endMonth}>
              {monthRange.map((month) => (
                <option value={month} key={month}>
                  {month}월
                </option>
              ))}
            </DateSelect>
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
              {dummyTool.map((tool, idx) => (
                <Tool key={idx}>{tool}</Tool>
              ))}
              <ToolPlus
                onClick={(e) => {
                  stopPropagation(e);
                  onClickToolPlus();
                }}
              >
                <BiPlus />
                {isToolModal && (
                  <ToolInputModal onClick={stopPropagation}>
                    <div>
                      <span>#</span>
                      <input type="text" value={tool} onChange={onChangeTool} />
                    </div>
                  </ToolInputModal>
                )}
              </ToolPlus>
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
