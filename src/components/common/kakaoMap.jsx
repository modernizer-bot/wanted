import styled from 'styled-components';
import {useEffect} from 'react'
/*global kakao*/

// f9b256f27ac94c60b3b60548d768b661


const KakaoMap = () => {
  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    let map = new kakao.maps.Map(container, options);
  }, [])


  return (
    <div>
      <MapBox id="map"></MapBox>
    </div>
  )
}

const MapBox = styled.div`
  width: 100%;
  height: 254px;
`

export default KakaoMap;
