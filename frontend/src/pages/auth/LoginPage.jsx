import { Button, Card, Input } from 'antd';
export default function LoginPage(){return <Card title='Login' style={{width:360}}><Input placeholder='Email' /><Input.Password placeholder='Password' style={{marginTop:8}}/><Button type='primary' block style={{marginTop:12}}>Login</Button></Card>;}
