"use client";
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HomeComponent from '@/components/pages/Home';
import './globals.scss';

export default function Page() {
  return (
    <MainLayout>
      <HomeComponent />
    </MainLayout>
  );
}