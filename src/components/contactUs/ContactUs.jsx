import React from "react";
import "./ContactUs.css";
import imgBackgroud from "../images/Group 8.png";
import { Button, Form, Input, InputNumber } from "antd";
import imgInput from '../images/BG.png'

export default function ContactUs() {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>
        <img src={imgBackgroud} alt="" className="w-100" />
      </div>
      <div className="container container-contactus ">
        <div className="row">
          <div className="col-10 m-auto">
            <div className="row">
              <div className="col-6 container-input">
                <h1 className="mt-5 mb-5">CONTACT US</h1>
                <p className="mb-5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <Form
                  name="nest-messages"
                  onFinish={onFinish}
                  style={{ maxWidth: 600 }}
                  validateMessages={validateMessages}
                >
                  <div className="row input-contactus">
                    <div className="col-6">
                      <label>
                        Name <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "name"]}
                        rules={[{ required: true }]}
                      >
                        <Input className="w-100" placeholder="joe smith" />
                      </Form.Item>

                      <label>
                        Phone <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "phone"]}
                        rules={[{ type: "number", min: 10, max: 99, required: true  }]}
                      >
                        <InputNumber
                          type="number"
                          className="w-100"
                          placeholder="123 123 123"
                        />
                      </Form.Item>
                      <label>
                        Quantity <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "quantity"]}
                        rules={[{ type: "number", min: 0, max: 99, required: true  }]}
                      >
                        <InputNumber className="w-100" placeholder="quantity" />
                      </Form.Item>
                    </div>
                    <div className="col-6">
                      <label>
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "email"]}
                        rules={[{ type: "email", required: true }]}
                      >
                        <Input placeholder="you@company.com" />
                      </Form.Item>
                      <label>
                        Requested Completion Date <>*</>
                      </label>
                      <Form.Item
                        name={["user", "date"]}
                        rules={[{ type: "date", required: true }]}
                      >
                        <Input type="date" />
                      </Form.Item>
                      <label>
                        Company/Project Name <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "projectName"]}
                        rules={[{ required: true }]}
                      >
                        <Input className="w-100" placeholder="project title" />
                      </Form.Item>
                    </div>
                    <div className="description">
                      <label>
                        Project Description <span className="text-danger">*</span>
                      </label>
                      <Form.Item name={["user", "description"]}  rules={[{ required: true }]}>
                        <Input.TextArea className="w-100 h-20px" />
                      </Form.Item>
                    </div>

                    <Form.Item className="mt-5">
                      <input type="checkbox" />
                      <label>You agree to our friendly privacy policy.</label>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Send message
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
              <div className="col-6">
                <img src={imgInput} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
