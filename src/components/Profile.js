import '../stylesheets/Profile.scss';
import { Card, Col, Row } from 'antd';


const Profile = () => {
    return (
        <div className="profile">
            <h3>My Profile</h3>
            <Row>
                <Col className="border" span={12}>
                    <Card title="Analytics" bordered={true} style={{height: '500px' }}>
                        
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;