import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Steps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Step } = Steps;
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ChangeOwnership = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const goBackToDashboard = () => navigate('/dashboard'); // Adjust route as per your app

  const steps = [
    {
      title: 'Current Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#F5F5F5', padding: 20, borderRadius: 12, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form.Item label="Full Name" name="currentFullName">
            <Input />
          </Form.Item>
          <Form.Item label="Postal Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Residential / Location Address" name="currentLocationAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Contact" name="currentContact">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="currentEmail">
            <Input />
          </Form.Item>
          <Form.Item label="TIN" name="currentTin">
            <Input />
          </Form.Item>
          <Form.Item label="Vehicle Make" name="currentVehicleMake">
            <Input />
          </Form.Item>
          <Form.Item label="Chassis Number" name="currentChassis">
            <Input />
          </Form.Item>
          <Form.Item label="Body Type" name="currentBodyType">
            <Input />
          </Form.Item>
          <Form.Item label="Vehicle Use" name="currentVehicleUse">
            <Select>
              <Option value="private">Private</Option>
              <Option value="commercial">Commercial</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Year of Manufacture" name="currentYearOfManufacture">
            <Input />
          </Form.Item>
          <Form.Item label="Cubic Capacity" name="currentCubicCapacity">
            <Input />
          </Form.Item>
          <Form.Item label="No. of Cylinders" name="currentCylinders">
            <Input />
          </Form.Item>
          <Form.Item label="Fuel Type" name="currentFuelType">
            <Select>
              <Option value="diesel">Diesel</Option>
              <Option value="petrol">Petrol</Option>
              <Option value="lpg">LPG</Option>
              <Option value="electric">Electric</Option>
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Previous Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#F5F5F5', padding: 20, borderRadius: 12, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form.Item label="Full Name" name="previousFullName">
            <Input />
          </Form.Item>
          <Form.Item label="Postal Address" name="previousAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Residential / Location Address" name="previousLocationAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Contact" name="previousContact">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="previousEmail">
            <Input />
          </Form.Item>
          <Form.Item label="TIN" name="previousTin">
            <Input />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Additional Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#F5F5F5', padding: 20, borderRadius: 12, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form.Item label="Transfer Date" name="transferDate">
            <Input />
          </Form.Item>
          <Form.Item label="Additional Notes" name="additionalNotes">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <ArrowLeftOutlined
          onClick={goBackToDashboard}
          style={{ fontSize: 24, cursor: 'pointer', color: '#4CAF50', marginRight: 10 }}
        />
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#4CAF50', textAlign: 'center', flexGrow: 1 }}>Change of Ownership</h2>
      </div>

      <Steps current={currentStep} size="small" style={{ marginBottom: 20 }} className="custom-steps">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div>{steps[currentStep].content}</div>

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        {currentStep > 0 && (
          <Button style={{ backgroundColor: '#4CAF50', color: 'white' }} onClick={prevStep}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button style={{ backgroundColor: '#4CAF50', color: 'white', marginLeft: 'auto' }} onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button style={{ backgroundColor: '#4CAF50', color: 'white', marginLeft: 'auto' }}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChangeOwnership;
