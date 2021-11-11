import React, {Component} from 'react'
import styled from 'styled-components'


class KakaoLoginBtn extends Component {
  componentDidMount() {
    let movePage = false;
    const apiKey = 'f9b256f27ac94c60b3b60548d768b661';
    const kakaoScript = document.createElement("script");
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      window.Kakao.init(apiKey);
      window.Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: (auth)=> {
          console.log('Kakao 로그인 완료', auth);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: (res) => {
              console.log('Kakao 사용자 정보', res);
            },
            fail: (err) => {
              console.log(err);
            },
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
    };
  }

  render() {
    return <LoginBtn type='button' id='kakao-login-btn'>카카오 로그인</LoginBtn>
  }
}


const LoginBtn = styled.div`
  width: 100%;
  margin-top: 3vw;
  & #kakao-login-btn{
    width: 100%;
    height: 4vw;
  }
`

export default KakaoLoginBtn;
