"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  const faqs = [
    {
      question:
        "What makes Django Pie suitable for building user-friendly websites?",
      answer:
        "Django Pie provides a robust framework with built-in security features and scalability, ensuring a stable and secure environment for developing websites. Django Pie allows extensive customization of user interfaces through templates, CSS styling, and JavaScript integration, enabling developers to create intuitive and attractive interfaces.",
    },
    {
      question:
        "Does Django Pie offer customization options for user interfaces?",
      answer:
        "Django Pie provides a robust framework with built-in security features and scalability, ensuring a stable and secure environment for developing websites. Django Pie allows extensive customization of user interfaces through templates, CSS styling, and JavaScript integration, enabling developers to create intuitive and attractive interfaces.",
    },
    {
      question: "How Can I Apply for a Job with You?",
      answer:
        "Django Pie provides a robust framework with built-in security features and scalability, ensuring a stable and secure environment for developing websites. Django Pie allows extensive customization of user interfaces through templates, CSS styling, and JavaScript integration, enabling developers to create intuitive and attractive interfaces.",
    },
    {
      question:
        "Can Django Pie integrate with other web technologies and services?",
      answer:
        "Django Pie provides a robust framework with built-in security features and scalability, ensuring a stable and secure environment for developing websites. Django Pie allows extensive customization of user interfaces through templates, CSS styling, and JavaScript integration, enabling developers to create intuitive and attractive interfaces.",
    },
    {
      question: "Is your pricing negotiable?",
      answer:
        "Django Pie provides a robust framework with built-in security features and scalability, ensuring a stable and secure environment for developing websites. Django Pie allows extensive customization of user interfaces through templates, CSS styling, and JavaScript integration, enabling developers to create intuitive and attractive interfaces.",
    },
  ];

  return (
    <>
      <div className="text-white mt-36 mb-28">
        <div className="text-center">
          <h1 className="lg:text-6xl  text-4xl font-semibold mb-6">FAQs</h1>
          <p className="md:mx-64">
            We’ve answered your most frequent questions to help you understand
            us well. If you still have any questions in mind, you can talk to
            us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-10 p-5">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer bg-[#0097B2] p-4 rounded-md "
              >
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="text-white p-4 rounded-md mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
