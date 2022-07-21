import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, {ReactNode, useState} from 'react';
import Wrapper from '../components/wrapper';
import RenderMenu from './menu';
import { useLocation, Link } from 'react-router-dom'
import breadcrumbNameMap from '../routes/breadcrumbConfig';
const { Header, Content, Sider } = Layout;

const items1 = ['商品模块'].map((key) => ({
  key,
  label: '商品模块',
}));

const getName = (url: string, index: number) => {
  // @ts-ignore
  let name = breadcrumbNameMap[url];
  if(index === 0) {
    return name
  } else {
    const flag = breadcrumbNameMap.hasOwnProperty(url);
    /**
     * flag为true匹配成功
     */
    if(!flag) {
      const ind = url.lastIndexOf("/");
      const str:string = url.slice(0, ind+1) + ':id';
      // @ts-ignore
      name = breadcrumbNameMap[str]
    }
    return <Link to={url}>{name}</Link>
  }
};

const generateBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {
          getName(url, index)
        }
      </Breadcrumb.Item>
    );
  });
  // @ts-ignore
  return [].concat(extraBreadcrumbItems);
};

const WrapperContainer = ({children, menus}: { children: ReactNode; menus: Array<any> }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Header className="header">
        <span className="logo">logo</span>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          collapsible
          trigger={React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          style={{
            overflow: 'auto',
            height: `calc(100vh - 64px)`,
            position: 'sticky',
            left: 0,
            top: 64,
            bottom: 0,
          }}
        >
          {RenderMenu(menus)}
        </Sider>
        <Layout
          className="site-layout"
        >
          <Breadcrumb style={{
            padding: '16px',
            background: '#fff'
          }}>{generateBreadcrumb()}</Breadcrumb>
          <Content
            className="site-layout"
            style={{
              margin: 0,
              paddingLeft: 10,
            }}
          >
            <Wrapper>
              { children }
            </Wrapper>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default WrapperContainer;