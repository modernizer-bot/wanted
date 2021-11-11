// f9b256f27ac94c60b3b60548d768b661

import {useEffect} from 'react';

const {Kakao} = window;

const KakaoMap = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options ={
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };
    let map = new window.kakao.maps.Map(container,options);

    console.log('Loading kakaoMap');
  },[]);


  return (
    <div className="Map">
      <div className="MapContainer" id="map">
      </div>
    </div>
  );
}

export default KakaoMap;
