import React from "react";
import { Layout, Menu, Avatar } from "antd";
import styles from "./StudentDefaultLayout.module.css";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
  CheckOutlined,
  SnippetsOutlined,
  FundProjectionScreenOutlined,
  EditOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const data = JSON.parse(localStorage.getItem("user"));
console.log(data);
class StudentDefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    // const logout = () => {
    //   const useruser = localStorage.removeItem("user");
    // };

    // logout();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            {this.state.collapsed ? <h1>Be</h1> : <h1>BeExpo</h1>}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item
              key="/studentprofile"
              icon={<UserOutlined />}
              className="sidebar"
            >
              <Link to="/studentprofile">Activities</Link>
            </Menu.Item>

            <Menu.Item key="/getallevents" icon={<SnippetsOutlined />}>
              <Link to="/getallevents"> Events</Link>
            </Menu.Item>

            <Menu.Item
              key="/getalljobs"
              icon={<FundProjectionScreenOutlined />}
            >
              <Link to="/getalljobs"> Jobs</Link>
            </Menu.Item>

            <Menu.Item key="/appliedJobs" icon={<CheckOutlined />}>
              <Link to="/appliedJobs"> appliedJobs</Link>
            </Menu.Item>

            <Menu.Item key="/getallProjects" icon={<PlusCircleOutlined />}>
              <Link to="/getallProjects"> Projects</Link>
            </Menu.Item>

            <Menu.Item key="/appliedProjects" icon={<CheckOutlined />}>
              <Link to="/appliedProjects"> appliedProjects</Link>
            </Menu.Item>

            <Menu.Item key="/postBlog" icon={<EditOutlined />}>
              <Link to="/postBlog"> PostBlog</Link>
            </Menu.Item>

            <Menu.Item key="/postedBlog" icon={<CheckOutlined />}>
              <Link to="/postedBlog"> postedBlog</Link>
            </Menu.Item>

            <Menu.Item key="/FindMentor" icon={<ZoomInOutlined />}>
              <Link to="/FindMentor"> FindMentor</Link>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link to="login">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className={styles.header}>
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>

              <div
                style={{ display: this.state.collapsed ? "none" : "inline" }}
              >
                <h5 className="mr-2">
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  {/* <b>{data.username}</b> */}
                  <b>student</b>
                </h5>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default StudentDefaultLayout;
