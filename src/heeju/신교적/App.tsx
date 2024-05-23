import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Grid, Box, CssBaseline, AppBar, Toolbar } from "@mui/material";
import Tabs from "./components/Tabs/TopTabs";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from './pages/Home';
import MonthlyMembers from './pages/MonthlyMembers';

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans CJK KR",
  },
});

function 신교적메인() {
  return (
    <ThemeProvider theme={theme}>

      <div style={{ display: 'flex' }}>

        {/* 좌측 : Sidebar 메뉴 영역 */}
        <Sidebar />

        {/* 우측 : Header & Tab, Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', width: `calc(100% - 280px)` }}>
          <AppBar sx={{ position: 'unset' }}>
            <Header />
            <Tabs />
          </AppBar>

          {/* Route 영역 : 기획안에 따라 페이지 추가 */}
          <Box sx={{ background: 'red', padding: '1rem' }}>

          </Box>
        </div>

      </div>

    </ThemeProvider>
  );
}

export default 신교적메인;