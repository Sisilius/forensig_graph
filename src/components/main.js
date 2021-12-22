import React from "react";
import { Layout, Menu, Input, Space } from 'antd';
import {Link} from "react-router-dom";
import Graph_d3 from "./graph_d3";


function Main() {

  const { Header, Content, Sider } = Layout;
  const { Search } = Input;

  const onSearch = (e) => {
    console.log(e);
  }

  return (
    <div className="Main">
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">
                  <span className="nav-text">Граф инцидентов</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }}> 
              <Search style={{ width: '50%', margin: '15px 25%'}}
                      placeholder="Введите номер инцидента"
                      onSearch={onSearch}
                      enterButton />
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <Graph_d3/>
              </div>
            </Content>
          </Layout>
        </Layout>
    </div>
  );
}

export default Main;
