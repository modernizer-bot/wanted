import styled from "styled-components"
import {PageWrap } from "../components/common/styled";
import Header from "../components/common/header";
import Footer from '../components/common/footer'


const IndexPage = () => {
    return (
        <PageWrap>
            <Header page="index" />
            <Footer />
        </PageWrap>
    )
}


export default IndexPage
