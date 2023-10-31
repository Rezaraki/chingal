import { Card, Typography, Form, Input, Button, Row, Col, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { delUser, editUserProfile, getUserProfile } from '../services';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { omitProperties, pickProperties } from '../services/utils';
import { IProfileData, IProfileFormData, IRawUserData } from '../types';
import avatar from '@/Assets/imgs/avatar.jpg';
import UserForm from './UserForm';
import { Loading } from './common';

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
  const redirect = useNavigate();
  const { id } = useParams();
  const {
    data: profileData,
    isLoading,
    isLoadingError,
    failureCount,
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

  const { mutateAsync: editUser } = useMutation({
    mutationFn: editUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: delUser,
    onSuccess: () => {
      redirect('/users');
    },
  });

  const onEditClickHandle = (values: IProfileFormData) => {
    const newData = { ...profileData, ...values } as IProfileData;
    editUser(newData);
  };

  const onDelClickHandle = () => {
    profileData && deleteUser(profileData.id);
  };

  if (failureCount > 3 && isLoadingError) return <Card className="profile not-found">کاربر یافت نشد!</Card>;

  return (
    <Card className="profile">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title level={2}>ویرایش کاربر</Title>
          <hr />
          <div className="img-container">
            <img src={profileData?.avatar || avatar} alt="" />
          </div>
          <UserForm formInstance={form} onDelClickHandle={onDelClickHandle} onEditClickHandle={onEditClickHandle} />
        </>
      )}
    </Card>
  );
}
export default Profile;
