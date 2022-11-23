import { useLocation } from 'react-router-dom';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && <Header />}
      {children}
    </>
  );
}
