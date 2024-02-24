'use client'
import React, { createContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import HeaderPage from './Header';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

export const DataContext = createContext();
const Homelayout = ({ children }) => {
    const { Header, Content, Footer, Sider } = Layout;
    const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
        }),
    );
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://api.lyrics.ovh/suggest/e')
            .then(res => res.json())
            .then(data => {
                setDatas(data.data)
            })
    }, [])
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <DataContext.Provider value={[datas, setDatas]}>
            <Layout className='!bg-[#191919] !z-40'>
                <Sider
                    width='253px'
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    className='!bg-[#3B3B3B] !z-50 '
                >
                    <Sidebar />
                </Sider>
                <Layout className='!bg-[#191919] lg:!px-[50px]'>
                    <Header
                        className='!bg-[#191919] !text-white lg:!my-[50px]   !sticky !top-0 !z-40 !px-3 md:!px-5 !flex !items-center'                        
                    >
                        <HeaderPage/>
                    </Header>
                    <Content
                        className='!bg-[#191919]  '
                        
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </DataContext.Provider>
    );
};

export default Homelayout;