import styled from "styled-components"
import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from '../../components/common/footer'


const HomePage = () => {

    //외부 모듈
    const history = useHistory();

    //global state
    const { user } = useSelector(state => state.LoginReducer);

    //페이지 첫 로딩시 로직
    useEffect(() => {

        //벨리데이션
        if (!user.name) {
            alert("로그인을 해주세요");
            history.push('/login');
        }

    }, [])

    return (
        <PageWrap>
            <Header page="home" />
            <Footer />
        </PageWrap>
    )
}



export default HomePage
