import { Form, Input, Button, Row, Col } from 'antd';
import { FormInstance } from 'antd/lib';
import { IProfileFormData } from '../types';

function UserForm({
  formInstance,
  onDelClickHandle,
  onEditClickHandle,
}: {
  formInstance: FormInstance<any>;
  onDelClickHandle: () => void;
  onEditClickHandle: (values: IProfileFormData) => void;
}) {
  return (
    <Form form={formInstance} onFinish={onEditClickHandle} layout="vertical">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="نام کاربر" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input size="large" placeholder="Name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="سن" name="age" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input size="large" placeholder="age" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={28}>
        <Col span={12}>
          <Form.Item label="ایمیل" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input size="large" placeholder="Email" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="شماره تلفن"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input size="large" placeholder="Phone Number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={40}>
        <Col span={6}>
          <Form.Item label="کشور" name="country" rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input size="large" placeholder="country" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="شهر" name="city" rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input size="large" placeholder="city" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="خیابان" name="street" rules={[{ required: true, message: 'Please input your street!' }]}>
            <Input size="large" placeholder="street" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="کدپستی" name="zipcode" rules={[{ required: true, message: 'Please input your zipcode!' }]}>
            <Input size="large" placeholder="zipcode" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="شرکت" name="company" rules={[{ required: true, message: 'Please input your company!' }]}>
        <Input size="large" placeholder="company" />
      </Form.Item>
      <div className="btn-container">
        <Button size="large" block type="primary" htmlType="submit">
          ویرایش
        </Button>
        <Button size="large" block type="primary" danger onClick={onDelClickHandle}>
          حذف
        </Button>
      </div>
    </Form>
  );
}
export default UserForm;
