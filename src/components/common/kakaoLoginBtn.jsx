import React, {Component} from 'react'
import styled from 'styled-components'



class KakaoLoginBtn extends Component {
  componentDidMount() {
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
    return (
      <LoginBtn type='button' id='kakao-login-btn' >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" >
          <path d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538" />
        </svg>
      </LoginBtn>
    )
  }
}
const LoginBtn = styled.button`
  width: 30px;
  height: 30px;
  & #kakao-login-btn{
    display: none;
  }
`

export default KakaoLoginBtn;
