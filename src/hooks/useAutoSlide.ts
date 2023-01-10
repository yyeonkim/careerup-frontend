import { useEffect } from 'react';

interface ISlide {
  className: string;
  path: string;
}

// 화면에 표시할 슬라이드 index를 5초마다 바꾼다.
export default function useAutoSlide(slides: ISlide[], setActiveIndex: React.Dispatch<React.SetStateAction<number>>) {
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);
}
