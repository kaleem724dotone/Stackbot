import React from 'react';
import { Button, Collapse } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons'; // Import icons

const { Panel } = Collapse;

const FAQSection = () => {
  // Sample FAQ data
  const faqs = [
    {
      key: '1',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    },
    {
      key: '2',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      key: '3',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      key: '4',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Section: Title and Description */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <Button type="primary" className="bg-[#6B4EEF] text-white border-none font-semibold rounded-full px-8 py-3 h-auto shadow-md hover:bg-[#5a3ed8]">
            Ask A Question &gt;
          </Button>
        </div>

        {/* Right Section: FAQ Collapse */}
        <div className="md:w-2/3">
          <Collapse
            accordion
            expandIconPosition="right"
            className="faq-collapse" // Custom class for styling
            expandIcon={({ isActive }) => isActive ? <UpOutlined /> : <DownOutlined />}
          >
            {faqs.map(faq => (
              <Panel
                header={faq.question}
                key={faq.key}
                className="mb-4 rounded-lg shadow-sm" // Tailwind classes for individual panel
              >
                <p className="text-gray-700">{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;