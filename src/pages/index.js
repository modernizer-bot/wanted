import styled from "styled-components"
import {PageWrap } from "../components/common/styled";
import Header from "../components/common/header";
import Footer from '../components/common/footer'
import MainPage from './home/mainPage'


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
