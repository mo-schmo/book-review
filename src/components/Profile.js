import '../stylesheets/Profile.scss';
import { Card, Col, Row } from 'antd';
import {LineChart, XAxis, YAxis, CartesianGrid, Line} from 'recharts';

const Profile = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        }
    ];

    return (
        <div className="profile">
            <h3>My Profile</h3>
            <Row gutter={12}>
                <Col span={12}>
                    <Card title="Analytics" bordered={true} className="card">
                    <LineChart width={750} height={400} data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="amt" stroke="black"/>
                    </LineChart>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={true} className="card">
                        <div className="avatar">
                            {/* TODO: add image */}
                        </div>
                        <h3>John Doe</h3>
                        
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;