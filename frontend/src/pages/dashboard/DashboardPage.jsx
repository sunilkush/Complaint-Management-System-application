import { Card, Col, Row } from 'antd';
export default function DashboardPage(){return <Row gutter={16}>{['Total','Open','Resolved','Pending'].map(k=><Col span={6} key={k}><Card title={k}>0</Card></Col>)}</Row>;}
