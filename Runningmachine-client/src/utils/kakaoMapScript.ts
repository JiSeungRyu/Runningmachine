// // import KakaoMapMarker from "./kakaoMapMarker.js";

// const { kakao } = window;

// var centerLat = 37.53332968;
// var centerLng = 127.0780795;

// export default function KakaoMapScript() {
//     const container = document.getElementById("myMap");
//     const onSuccess = (position) => {
//         // centerLat = position.coords.latitude;
//         // centerLng = position.coords.longitude;
//         centerLat = 37.53332968;
//         centerLng = 127.0780795;
//     };

//     const onFail = () => {
//         centerLat = 37.53332968;
//         centerLng = 127.0780795;
//     };

//     navigator.geolocation.getCurrentPosition(onSuccess, onFail);

//     const options = {
//         center: new kakao.maps.LatLng(centerLat, centerLng),
//         level: 5,
//     };
//     var map = new kakao.maps.Map(container, options);

//     // var marker = new kakao.maps.Marker({
//     //     map: map, // 마커를 표시할 지도
//     //     position: positions[i].latlng
//     // });
// }

// export { centerLat, centerLng };
