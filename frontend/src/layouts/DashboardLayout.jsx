import { Layout, Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
export default function DashboardLayout(){return <Layout style={{minHeight:'100vh'}}><Layout.Sider><Menu theme='dark' items={[{key:'d',label:<Link to='/'>Dashboard</Link>},{key:'c',label:<Link to='/complaints'>Complaints</Link>}]}/></Layout.Sider><Layout><Layout.Header style={{color:'white'}}>Complaint Management</Layout.Header><Layout.Content style={{padding:16}}><Outlet/></Layout.Content></Layout></Layout>;}
