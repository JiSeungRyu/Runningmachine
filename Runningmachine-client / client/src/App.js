import Header from "./components/Header/header.jsx";
import Map from "./components/Map/map.jsx";
import Aside from "./components/Aside/aside.jsx";
import EntireData from "./components/EntireData/entireData.jsx";
import Loading from "./components/Loading/loading.jsx";

import getDistanceFromLatLng from "./utils/getDistanceFromLatLng.js";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [value, setValue] = useState();
    const [valueFlag, setValueFlag] = useState(true);

    const [newdatas, setNewDatas] = useState([]);

    const [datas, setDatas] = useState([]);
    const [dataFlag, setDataFlag] = useState(true);

    const [detailData, setDetailData] = useState(0);
    const [detailDataFlag, setDetailDataFlag] = useState(true);

    const [hiddenData, setHiddenData] = useState();
    const [hiddenDataFlag, setHiddenDataFlag] = useState(false);

    const [hiddenDataNew, setHiddenDataNew] = useState();

    const [recoNumber, setRecoNumber] = useState();

    const arr = Array(987) // 최대 데이터 값 987
        .fill()
        .map((v, i) => i + 1);

    const changeMaxValue = (number) => {
        var maxTmpArray = [];

        if (hiddenDataFlag === true) {
            console.log(number);
            for (var i = 0; i < hiddenData.length; i++) {
                if (Number(number) >= Number(hiddenData[i].tmpdistance)) {
                    maxTmpArray.push(hiddenData[i]);
                }
            }
            // console.log(maxTmpArray);
            setHiddenDataNew(maxTmpArray);
        } else {
            for (var i = 0; i < datas.length; i++) {
                if (Number(number) >= Number(datas[i].tmpdistance)) {
                    maxTmpArray.push(datas[i]);
                }
            }
            setNewDatas(maxTmpArray);
        }
        console.log(maxTmpArray);

        setValue(number);
        setValueFlag(false);
    };
    // console.log(valueFlag);

    const onDetailData = (event) => {
        setDetailData(event);
        setDetailDataFlag(false);
    };
    const onCancel = () => {
        setDetailDataFlag(true);
    };

    const getData = async () => {
        const tmpArray = [];
        for await (const param of arr) {
            const response = await axios.get(
                `http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/company/${param}`
            );
            // console.log(response.data);
            tmpArray.push(response.data);
        }
        return tmpArray;
    };

    useEffect(() => {
        getData().then((result) => {
            for (var i = 0; i < result.length; i++) {
                let tmpDistance = getDistanceFromLatLng(
                    37.5502596,
                    127.073139,
                    result[i].lat,
                    result[i].lng
                );
                result[i].tmpdistance = tmpDistance;
            }
            setDatas(result);
            setDataFlag(false);
        });
    }, []);
    // console.log(hiddenDataFlag);
    // console.log(hiddenData);

    useEffect(() => {
        setHiddenDataNew(hiddenData);
    }, [hiddenData]);
    console.log(hiddenDataNew);

    return (
        <div className="App w-screen h-screen">
            {dataFlag ? (
                <Loading className="w-full h-full flex justify-center items-center" />
            ) : (
                <div className="w-screen h-screen">
                    <header className="h-[10%]">
                        <Header
                            maxValue={value}
                            hiddenDataFlag={hiddenDataFlag}
                            changeMaxValue={changeMaxValue}
                            setRecoNumber={setRecoNumber}
                        />
                    </header>
                    <main className="flex">
                        <section className="w-3/4">
                            {dataFlag ? null : (
                                <div>
                                    {valueFlag ? (
                                        <Map maxValue={value} datas={datas} />
                                    ) : (
                                        <div>
                                            {hiddenDataFlag ? (
                                                <Map
                                                    maxValue={value}
                                                    datas={hiddenDataNew}
                                                />
                                            ) : (
                                                <Map
                                                    maxValue={value}
                                                    datas={newdatas}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </section>
                        <aside className="w-1/4 h-full">
                            {detailDataFlag ? (
                                <div>
                                    {dataFlag ? (
                                        <Aside />
                                    ) : (
                                        <div>
                                            {valueFlag ? (
                                                <Aside
                                                    datas={datas}
                                                    onDetailData={onDetailData}
                                                    setHiddenDataFlag={
                                                        setHiddenDataFlag
                                                    }
                                                    setHiddenData={
                                                        setHiddenData
                                                    }
                                                    recoNumber={recoNumber}
                                                />
                                            ) : (
                                                <div>
                                                    {hiddenDataFlag ? (
                                                        <Aside
                                                            datas={
                                                                hiddenDataNew
                                                            }
                                                            onDetailData={
                                                                onDetailData
                                                            }
                                                            setHiddenDataFlag={
                                                                setHiddenDataFlag
                                                            }
                                                            setHiddenData={
                                                                setHiddenData
                                                            }
                                                            recoNumber={
                                                                recoNumber
                                                            }
                                                        />
                                                    ) : (
                                                        <Aside
                                                            datas={newdatas}
                                                            onDetailData={
                                                                onDetailData
                                                            }
                                                            setHiddenDataFlag={
                                                                setHiddenDataFlag
                                                            }
                                                            setHiddenData={
                                                                setHiddenData
                                                            }
                                                            recoNumber={
                                                                recoNumber
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <EntireData
                                    detailData={detailData}
                                    onCancel={onCancel}
                                />
                            )}
                        </aside>
                    </main>
                </div>
            )}
        </div>
    );
}
export default App;
