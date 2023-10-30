import { Breadcrumb } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/lib/breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowLeft from '@/Assets/svgs/ArrowLeft.svg?react';

function BreadCrumb() {
  const { pathname } = useLocation();
  const [breadCrumbItems, setBreadCrumbItems] = useState<
    Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] | undefined
  >();

  function breadcrumbItemMaker(url: string): { title: string; href?: string }[] {
    if (url.split('/').filter(Boolean).length >= 2) {
      return [{ title: 'لیست کاربران', href: '/users' }, { title: 'ویرایش کاربر' }];
    }
    if (url.split('/').filter(Boolean).length === 1) return [{ title: 'لیست کاربران' }];
    return [];
  }

  useEffect(() => {
    const newBreadCrumbItems = breadcrumbItemMaker(pathname);

    setBreadCrumbItems(newBreadCrumbItems);
  }, [pathname]);

  return (
    <div className="breadcrumb">
      <ArrowLeft />
      <Breadcrumb separator={<ArrowLeft />} items={breadCrumbItems} />;
    </div>
  );
}
export default BreadCrumb;
