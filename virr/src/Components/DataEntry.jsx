import { Button, Form, Input, Select, Steps } from 'antd';
import { useState } from 'react';


const { Step } = Steps;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ChangeOwnership = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    {
      title: 'Current Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#D3D3D3', padding: 20, borderRadius: 10 }}>
          <Form.Item label="Full Name" name="currentFullName">
            <Input />
          </Form.Item>
          <Form.Item label=" Postal Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label=" Residential / Location Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label=" Contact" name="currentContact">
            <Input />
          </Form.Item>
          <Form.Item label=" E-mail" name="currentEmail">
            <Input />
          </Form.Item>
          <Form.Item label=" Tin " name="currentTin">
            <Input />
          </Form.Item>
          <Form.Item label="Vehicle Make " name="currentvehiclemake">
            <Input />
          </Form.Item>
          <Form.Item label=" Chasis Number " name="currentChasis">
            <Input />
          </Form.Item>
          <Form.Item label=" Body Type " name="currentBodyType">
            <Input />
          </Form.Item>
          <Form.Item label="vehicle Use" name="currentVehicle">
            <Select>
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="commercial">Commercial</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label=" Year of manufacture" name="currentmanufacture">
            <Input />
          </Form.Item>
          <Form.Item label="Cubic Capacity" name="currentCubic">
            <Input />
          </Form.Item>
          <Form.Item label="No. of Cylinders" name="currentCylinder">
            <Input />
          </Form.Item>
           <Form.Item label="Fuel Type" name="currentFuelType">
            <Select>
              <Select.Option value="Diesel">Diesel</Select.Option>
              <Select.Option value="Petrol">Petrol</Select.Option>
              <Select.Option value="LPG">LPG</Select.Option>
              <Select.Option value="Electric">Electric</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Previous Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#D3D3D3', padding: 20, borderRadius: 10 }}>
          <Form.Item label="Full Name" name="currentFullName">
            <Input />
          </Form.Item>
          <Form.Item label=" Postal Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label=" Residential / Location Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label=" Contact" name="currentContact">
            <Input />
          </Form.Item>
          <Form.Item label=" E-mail" name="currentEmail">
            <Input />
          </Form.Item>
          <Form.Item label=" Tin " name="currentTin">
            <Input />
          </Form.Item>
          <Form.Item label="Vehicle Make " name="currentvehiclemake">
            <Input />
          </Form.Item>
          <Form.Item label=" Chasis Number " name="currentChasis">
            <Input />
          </Form.Item>
          <Form.Item label=" Body Type " name="currentBodyType">
            <Input />
          </Form.Item>
          <Form.Item label="vehicle Use" name="currentVehicle">
            <Select>
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="commercial">Commercial</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label=" Year of manufacture" name="currentmanufacture">
            <Input />
          </Form.Item>
          <Form.Item label="Cubic Capacity" name="currentCubic">
            <Input />
          </Form.Item>
          <Form.Item label="No. of Cylinders" name="currentCylinder">
            <Input />
          </Form.Item>
           <Form.Item label="Fuel Type" name="currentFuelType">
            <Select>
              <Select.Option value="Diesel">Diesel</Select.Option>
              <Select.Option value="Petrol">Petrol</Select.Option>
              <Select.Option value="LPG">LPG</Select.Option>
              <Select.Option value="Electric">Electric</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Additional Owner Information',

    },
  ];

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Change of Ownership</h2>
      <Steps current={currentStep} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={{ marginTop: 20 }}>{steps[currentStep].content}</div>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        {currentStep > 0 && <Button onClick={prevStep}>Previous</Button>}
        {currentStep < steps.length - 1 ? (
          <Button type="primary" onClick={nextStep}>Next</Button>
        ) : (
          <Button type="primary">Save</Button>
        )}
      </div>
    </div>
  );
};

export default ChangeOwnership;
