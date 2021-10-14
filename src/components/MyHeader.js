import {Layout} from 'antd'
import '../stylesheets/MyHeader.scss'

const { Header } = Layout

const MyHeader = () => {
    return(
        <Header className="site-layout-background" style={{ padding: 0 }} />
    )
}

export default MyHeader