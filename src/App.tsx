import React from 'react'
import CardsList from './shared/CardsList/CardsList'
import Content from './shared/Content/Content'
import Header from './shared/Header/Header'
import { Layout } from './shared/Layout/Layout'

import './styles/main.global.scss'

const App = () => {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
            </Content>
        </Layout>
        // <Lifesycle/>
    )
}

export default App