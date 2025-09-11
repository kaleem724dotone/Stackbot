import React from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

// A reusable component for contact information items
const ContactInfoItem = ({ label, value }) => (
  <div className="mb-6">
    <p className="text-lg font-semibold text-gray-800">{label}</p>
    <p className="text-gray-600">{value}</p>
    <div className="mt-3 border-b border-gray-200"></div>
  </div>
);

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    // Handle form submission logic here
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-6">
          <h1 className="text-3xl font-bold text-white">Get In Touch With Us</h1>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Information */}
            <div>
              <ContactInfoItem label="Phone Number" value="0012334566" />
              <ContactInfoItem label="Email Address" value="johndoe@example.com" />
              <ContactInfoItem label="Location" value="Lorem Ipsum" />
            </div>

            {/* Right Column: Message Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h2>
              <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat.
              </p>

              <Form
                form={form}
                name="contact"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input size="large" placeholder="Your Name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                  >
                    <Input size="large" placeholder="Your E-mail" />
                  </Form.Item>

                  <Form.Item name="phone">
                    <Input size="large" placeholder="Phone Number" />
                  </Form.Item>

                  <Form.Item name="subject">
                    <Input size="large" placeholder="Subject" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <TextArea rows={5} placeholder="Message" />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    size="large"
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 font-semibold"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;