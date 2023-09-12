// import { centerLat, centerLng } from "./kakaoMapScript.js";
// import getDistanceFromLatLng from "./getDistanceFromLatLng.js";
// const { kakao } = window;

// export default function NewFunction(maxValue) {
//     const container = document.getElementById("myMap");
//     const positions = [
//         {
//             title: "유진헬스클럽",
//             latlng: new kakao.maps.LatLng(37.53332968, 127.0780795),
//             lat: 37.53332968,
//             lng: 127.0780795,
//         },
//         {
//             title: "서울헬스",
//             latlng: new kakao.maps.LatLng(37.53414012, 127.0780795),
//             lat: 37.53414012,
//             lng: 127.0780795,
//         },
//         {
//             title: "동부육체미",
//             latlng: new kakao.maps.LatLng(37.54818696, 127.0691181),
//             lat: 37.54818696,
//             lng: 127.0691181,
//         },
//         {
//             title: "역발산센터",
//             latlng: new kakao.maps.LatLng(37.54350265, 127.0670102),
//             lat: 37.54350265,
//             lng: 127.0670102,
//         },
//         {
//             title: "휘트니스피플우먼 구의점",
//             latlng: new kakao.maps.LatLng(37.53659631, 127.0821287),
//             lat: 37.53659631,
//             lng: 127.0821287,
//         },
//         {
//             title: "광운헬스",
//             latlng: new kakao.maps.LatLng(37.52885663, 127.0800311),
//             lat: 37.52885663,
//             lng: 127.0800311,
//         },
//         {
//             title: "삼성남녀헬스센타",
//             latlng: new kakao.maps.LatLng(37.55842268, 127.0744652),
//             lat: 37.55842268,
//             lng: 127.0744652,
//         },
//         {
//             title: "영광헬스피아",
//             latlng: new kakao.maps.LatLng(37.53267533, 127.0827369),
//             lat: 37.53267533,
//             lng: 127.0827369,
//         },
//         {
//             title: "역사헬스",
//             latlng: new kakao.maps.LatLng(37.55143888, 127.0666453),
//             lat: 37.55143888,
//             lng: 127.0666453,
//         },
//         {
//             title: "멜론짐",
//             latlng: new kakao.maps.LatLng(37.5414304, 127.0868356),
//             lat: 37.5414304,
//             lng: 127.0868356,
//         },
//         {
//             title: "파워헬스",
//             latlng: new kakao.maps.LatLng(37.56687503, 127.0782285),
//             lat: 37.56687503,
//             lng: 127.0782285,
//         },
//         {
//             title: "휘트니스헬스타운",
//             latlng: new kakao.maps.LatLng(37.54157681, 127.0828495),
//             lat: 37.54157681,
//             lng: 127.0828495,
//         },
//         {
//             title: "As휘트니스여성헬스",
//             latlng: new kakao.maps.LatLng(37.53790196, 127.0822982),
//             lat: 37.53790196,
//             lng: 127.0822982,
//         },
//         {
//             title: "나우휘트니스",
//             latlng: new kakao.maps.LatLng(37.53949075, 127.0818019),
//             lat: 37.53949075,
//             lng: 127.0818019,
//         },
//         {
//             title: "군자휘트니스 크럽",
//             latlng: new kakao.maps.LatLng(37.55853309, 127.0721084),
//             lat: 37.55853309,
//             lng: 127.0721084,
//         },
//         {
//             title: "순수여성헬스",
//             latlng: new kakao.maps.LatLng(37.54215151, 127.095264),
//             lat: 37.54215151,
//             lng: 127.095264,
//         },
//     ];

//     const options = {
//         center: new kakao.maps.LatLng(centerLat, centerLng),
//         level: 5,
//     };

//     var map = new kakao.maps.Map(container, options);

//     for (var i = 0; i < positions.length; i++) {
//         const gapDistance = getDistanceFromLatLng(
//             centerLat,
//             centerLng,
//             positions[i].lat,
//             positions[i].lng
//         );
//         if (maxValue >= gapDistance) {
//             var marker = new kakao.maps.Marker({
//                 map: map, // 마커를 표시할 지도
//                 position: positions[i].latlng,
//             });
//         }
//     }
// }
