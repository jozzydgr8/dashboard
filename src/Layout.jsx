import { 
    DashboardOutlined, 
    UserOutlined, 
    MenuFoldOutlined, 
    MenuUnfoldOutlined, 
    ShopOutlined
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { Outlet, useNavigate } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { useMediaQuery } from 'react-responsive'; 

  
  export const Layout = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
  
    // Media query hook to detect if the screen width is less than or equal to 750px
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
  
    // Automatically collapse the menu on mobile screens and disable expanding
    useEffect(() => {
      if (isMobile) {
        setCollapsed(true); // Collapse the menu and prevent expanding on mobile
      }
    }, [isMobile]);
  
    return (
      <>
        <div style={{ marginLeft: collapsed ? '50px' : '200px', transition: 'margin-left 0.3s'}}>
        {/* <Header /> */}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Menu
            style={{
              width: collapsed ? '50px' : '200px',
              transition: 'width 0.3s',
              zIndex: '999',
              position: 'fixed', top: '0', bottom: '0', left: '0',
              background:'transparent'
            }}
            inlineCollapsed={collapsed} 
            onClick={({ key }) => {
              if (key === 'signOut' || key === 'menuToggle') {
                return;
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                label: (
                  // Only show the entire label when it's not on mobile view
                  !isMobile && (
                    <div
                      onClick={() => setCollapsed(!collapsed)} // Toggle entire menu when clicked
                      style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row',
                        cursor: 'pointer'
                      }}
                    >
                      <span>{!collapsed && 'Welcome Admin'}</span>
                      <span
                        style={{
                          marginLeft: !collapsed ? '28px' : '0px', 
                        }}
                      >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                      </span>
                    </div>
                  )
                ),
                key: 'menuToggle',
              },
              { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },
              
              { label: 'Merchants', key: '/dashboard/merchant', icon: <ShopOutlined/> },
             
              { label: 'Users', key: '/dashboard/user', icon: <UserOutlined /> },
            ]}
          />
          
          {/* Adjust margin-left of the content dynamically based on collapsed state */}
          <div style={{ marginLeft: collapsed ? '50px' : '200px', transition: 'margin-left 0.3s', width:'100%' }}>
            <Outlet />
          </div>
        </div>
      </>
    );
  };
  