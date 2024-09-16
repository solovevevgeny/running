import React, { useState } from 'react';

import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';


function SiderMenu() {

    const items = [
        {
          key: '1',
          icon: <PieChartOutlined />,
          label: 'Календарь',
        },
        {
          key: '2',
          icon: <DesktopOutlined />,
          label: 'Тренировочные планы',
        },
        {
          key: '3',
          icon: <DesktopOutlined />,
          label: 'Оповещения',
        },

        {
          key: '4',
          icon: <DesktopOutlined />,
          label: 'Сообщения',
        },
        
        {
          key: '5',
          icon: <DesktopOutlined />,
          label: 'Настройки',
        },


      ];


    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
      };

        return (
       
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
              />

          );

}

export default SiderMenu;