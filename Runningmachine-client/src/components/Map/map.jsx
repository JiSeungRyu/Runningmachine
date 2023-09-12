import React, { useEffect, useState } from "react";
import getDistanceFromLatLng from "../../utils/getDistanceFromLatLng.js";
const { kakao } = window;

export default function Map({ datas }) {
    const centerLat = 37.54927;
    const centerLng = 127.0751;

    const [maps, setMaps] = useState();
    const [markers, setMarkers] = useState([]);
    // const [tmpMarkers, setTmpMarkers] = useState([]);
    // const [newMarkers, setNewMarkers] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (flag === false) {
            const container = document.getElementById("myMap"),
                options = {
                    center: new kakao.maps.LatLng(centerLat, centerLng),
                    level: 5,
                };
            const map = new kakao.maps.Map(container, options);
            setMaps(map);
            setFlag(true);
        }

        var markerArray = [];

        for (var i = 0; i < datas.length; i++) {
            var marker = new kakao.maps.Marker({
                // position: positions[i].latlng,
                position: new kakao.maps.LatLng(datas[i].lat, datas[i].lng),
                title: datas[i].name,
            });
            kakao.maps.event.addListener(
                marker,
                "mouseclick",
                makeClickListener(marker)
            );

            markerArray.push(marker);
        }
        if (markers !== []) {
            for (var j = 0; j < markers.length; j++) {
                markers[j].setMap(null);
            }
        }
        setMarkers(markerArray);
    }, [datas]);

    useEffect(() => {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(maps);
        }
    }, [markers]);

    function makeClickListener(marker) {}

    return <div id="myMap" className="w-[75%] h-full fixed left-0 z-10"></div>;
}
