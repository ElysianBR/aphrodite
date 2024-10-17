"use client";
import React from 'react';
import SignUpTemplate from '../../components/sign-up/SignUp';
import '@/app/signup/signup.css';
import { PopupProvider } from '@/provider/popup-provider';

const Dashboard = () => {
  return (
    <PopupProvider>
      <SignUpTemplate />
    </PopupProvider>
  );
};

export default Dashboard;