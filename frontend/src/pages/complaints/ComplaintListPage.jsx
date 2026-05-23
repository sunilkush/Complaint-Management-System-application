import { Table } from 'antd';
export default function ComplaintListPage(){ return <Table rowKey='_id' columns={[{title:'Title',dataIndex:'title'},{title:'Status',dataIndex:'status'},{title:'Priority',dataIndex:'priority'}]} dataSource={[]} />; }
