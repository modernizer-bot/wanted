import styled from "styled-components"
import {PageWrap } from "../components/common/styled.jsx";
import Header from "../components/common/header.jsx";
import Footer from '../components/common/footer.jsx'
import MainPage from './home/mainPage.jsx'


const IndexPage = () => {
    return (
        <PageWrap>
            <Header page="index" />
            <MainPage />
            <Footer />
        </PageWrap>
    )
}


export default IndexPage
