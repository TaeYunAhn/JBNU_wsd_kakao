import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const kakaoUser = JSON.parse(localStorage.getItem('kakaoUser'));
  
  // 일반 로그인 또는 카카오 로그인 확인
  const isAuthenticated = !!loggedInUser || !!kakaoUser;

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
