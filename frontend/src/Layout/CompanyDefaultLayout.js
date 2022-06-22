import React from "react";
import { Layout, Menu, Avatar } from "antd";
import styles from "./CompanyDefaultLayout.module.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CheckOutlined,
  LogoutOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import {
  BsFillCalendarCheckFill,
  BsFillPersonFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const data = JSON.parse(localStorage.getItem("user"));
console.log(data);
class CompanyDefaultLayout extends React.Component {
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
            <Menu.Item key="/profile" icon={<BsFillPersonFill />}>
              <Link to="/profile">
                <b className={styles.nav}>Profile</b>
              </Link>
            </Menu.Item>

            <Menu.Item key="/postevent" icon={<BsFillCalendarCheckFill />}>
              <Link to="/postevent">
                <b className={styles.nav}>PostEvent</b>
              </Link>
            </Menu.Item>
            <Menu.Item key="/postedevent" icon={<CheckOutlined />}>
              <Link to="/postedevent">
                <b className={styles.nav}>PostedEvent</b>
              </Link>
            </Menu.Item>
            <Menu.Item key="/postjob" icon={<BsBriefcaseFill />}>
              <Link to="/postjob"> PostJob</Link>
            </Menu.Item>

            <Menu.Item key="/postedjob" icon={<CheckOutlined />}>
              <Link to="/postedjob">PostedJob</Link>
            </Menu.Item>

            <Menu.Item key="/postproject" icon={<AppstoreAddOutlined />}>
              <Link to="/postproject">PostProject</Link>
            </Menu.Item>

            <Menu.Item key="/postedproject" icon={<CheckOutlined />}>
              <Link to="/postedproject">PostedProject</Link>
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
                  <b>{data.username}</b>
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

export default CompanyDefaultLayout;
