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
          <Form.Item label="Address" name="currentAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Model Type" name="currentModel">
            <Input />
          </Form.Item>
          <Form.Item label="Cubic Capacity" name="currentCubic">
            <Input />
          </Form.Item>
          <Form.Item label="No. of Cylinders" name="currentCylinder">
            <Input />
          </Form.Item>
          <Form.Item label="Fuel Type" name="currentFuel">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="currentPhone">
            <Input />
          </Form.Item>
          <Form.Item label="Purpose" name="currentPurpose">
            <Select>
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="commercial">Commercial</Select.Option>
            </Select>
          </Form.Item>

        </Form>
      ),
    },
    {
      title: 'Previous Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#D3D3D3', padding: 20, borderRadius: 10 }}>
          <Form.Item label="Name" name="newName">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="newAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Model Type" name="newModel">
            <Input />
          </Form.Item>
          <Form.Item label="Fuel Type" name="newFuel">
            <Input />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Additional Owner Information',
      content: (
        <Form {...formItemLayout} style={{ backgroundColor: '#D3D3D3', padding: 20, borderRadius: 10 }}>
          <Form.Item label="Name" name="additionalName">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="additionalAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Model Type" name="additionalModel">
            <Input />
          </Form.Item>
          <Form.Item label="Fuel Type" name="additionalFuel">
            <Input />
          </Form.Item>

        </Form>
      ),
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
