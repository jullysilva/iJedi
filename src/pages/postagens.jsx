import React, { useState, useEffect } from 'react'
import { ListarPostagens } from '../services/api'
import { Table } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'



const Albuns = () => {
    const [lista, setLista] = useState([]);

    const column = [
        {
            title: 'ID',
            dataIndex: 'userId',
            key: 'userId',
            width: 150,
            render: (item, row) => `${row.userId}`
        },
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: 150,
                render: (item, row) => `${row.id}`
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                width: 500,
                render: (item, row) => `${row.title}`
            },
    ]

    useEffect(() => {
        const onload = async () => {
            const list = await ListarPostagens(10);
            setLista(list);
            console.log('list', column);
        };
        onload();
    }, [])

    return (
        <>
            {lista && lista.length > 0 && (
                <Table 
                loading={{
                    indicator: <LoadingOutlined />,
                    spinning: false
                }}
                rowKey="albuns"
                pagination={false}
                columns={column} 
                dataSource={lista}
                size="large" />
            )}
        </>
    );
}


export default Albuns;