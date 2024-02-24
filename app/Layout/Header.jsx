'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Button, Checkbox, Form, Input } from 'antd';

const HeaderPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const SignInModal = () => {
        setIsModalOpen(true);
    };
    const SignOutModal = () => {
        setIsModalOpen(false);
    };
    const SignUPModal = () => {
        setIsModalOpen1(true);
    };
    const SignUpOutModal = () => {
        setIsModalOpen1(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='relative w-full h-full '>
            <div className=' flex justify-between items-center '>
                <h1 className='xl:text-[30px] md:text-[20px] font-semibold md:flex hidden'>Welcome to fauget music services</h1>
                <div className='flex gap-[31px]'>
                    <button onClick={SignInModal} className=' xl:px-[75px] xl:py-[14px] md:px-[30px] px-5 md:py-[6px] py-[3px] text-lg font-semibold bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] border-[1px] border-[#060606]'>Sign in </button>
                    <button onClick={SignUPModal} className=' xl:px-[75px] xl:py-[14px] md:px-[30px] px-5 md:py-[6px] py-[3px] text-lg font-semibold bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] border-[1px] border-[#060606]'>Sign up </button>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onCancel={SignOutModal}
                className=''
            >

                <div className='w-full h-full !p-[50px] '>
                    <div className='flex flex-col items-center'>
                        <Image src='/images/logo.png' width={210} height={40} alt='logo' />
                        <h2 className='text-[39px] font-semibold mt-[45px]'>Sign</h2>
                    </div>
                    <div className='border'>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <h3 className='text-lg font-semibold text-[#FFFFFF]/60'>Email:</h3>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input className='!w-full'/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
            <Modal
                open={isModalOpen1}
                onCancel={SignUpOutModal}
                className=''
            >

                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </div>
    );
};

export default HeaderPage;