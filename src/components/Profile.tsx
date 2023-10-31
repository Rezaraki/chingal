import { Card, Typography, Form, Input, Button, Row, Col } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { editUserProfile, getUserProfile } from '../services';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { omitProperties, pickProperties } from '../services/utils';
import { IProfileData, IProfileFormData, IRawUserData } from '../types';
import avatar from '@/Assets/imgs/avatar.jpg';

const { Title } = Typography;
const NEEDED_RROPERTIES = [
  'name',
  'avatar',
  'country',
  'city',
  'street',
  'zipcode',
  'company',
  'email',
  'phoneNumber',
  'id',
  'age',
];

function Profile() {
  const [form] = useForm();
  const queryClient = useQueryClient();

  const { id } = useParams();
  const {
    data: profileData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserProfile(id ?? ''),
    enabled: !!id,
    // @ts-expect-error silly ts mistake!
    select: (data: IRawUserData): IProfileData => pickProperties(data, NEEDED_RROPERTIES),
  });
  // @ts-expect-error silly ts mistake!
  const oldFormData = profileData && omitProperties(profileData, ['avatar', 'id']);

  oldFormData && form.setFieldsValue(oldFormData);

  const { mutateAsync } = useMutation({
    mutationFn: editUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const onFinish = (values: IProfileFormData) => {
    console.log('Received values of form: ', values);
  };
  // useEffect(() => {

  // }, []);
  // pickProperties()
  // console.log('formData', formData);
  // console.log('profileData', profileData);

  // console.log('params', id);

  return (
    <Card className="profile">
      <Title level={2}>ویرایش کاربر</Title>
      <hr />
      <div className="img-container">
        <img src={profileData?.avatar || avatar} alt="" />
      </div>

      <Form form={form} onFinish={onFinish} layout="vertical">
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
            <Form.Item
              label="کدپستی"
              name="zipcode"
              rules={[{ required: true, message: 'Please input your zipcode!' }]}
            >
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
          <Button size="large" block type="primary" danger>
            حذف
          </Button>
        </div>
      </Form>
    </Card>
  );
}
export default Profile;
