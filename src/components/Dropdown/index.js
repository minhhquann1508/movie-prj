import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss'
// Gọi onClick với đối tượng item
const DropdownItem = (props) => {
    const navigate = useNavigate()
    const onClick = (item) => {
        navigate(`/${item.type}/${item.key}`)
    };
    const handleItemClick = (item) => {
        onClick(item);
    };
    let { items, title } = props;
    return (
        <Dropdown
            menu={{
                items: items.map((item) => ({
                    ...item,
                    onClick: () => handleItemClick(item),
                })),
            }}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space className={`${style.linkItem} flex items-center font-bold text-gray-600`}>
                    {title}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
};
export default DropdownItem;