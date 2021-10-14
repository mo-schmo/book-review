import {Layout} from 'antd'
import { useState } from 'react'
import '../stylesheets/MyHeader.scss'

const { Header } = Layout

const MyHeader = () => {
    const [theme, setTheme] = useState('light')

    return(
        <Header className={`MyHeader ${theme}`} style={{ padding: 0 }} />
    )
}

export default MyHeader