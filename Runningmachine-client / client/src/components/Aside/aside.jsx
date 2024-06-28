import tw from "tailwind-styled-components";
import { useState, useEffect, useRef } from "react";
import ListPlaceInfor from "../ListPlaceInfor/listPlaceInfor.jsx";

const ListFont = tw.div`
font-manrope
text-xs
text-gray-500
font-bold
cursor-pointer
`;

export default function Aside({
    datas,
    onDetailData,
    setHiddenDataFlag,
    setHiddenData,
    recoNumber,
}) {
    console.log(datas);
    const [recoData, setRecoData] = useState();
    const [sortData, setSortData] = useState();
    const [indexData, setIndexData] = useState(1);
    const [recoFlag, setRecoFlag] = useState(false);
    const [datasFlag, setDatasFlag] = useState(true);

    const popularity = useRef(null);
    const distance = useRef(null);
    const recommendation = useRef(null);

    useEffect(() => {
        if (datas !== undefined) {
            for (var i = 0; i < datas.length; i++) {
                if (Number(datas[i].grade) === 100) {
                    datas[i].grade = "0.0";
                }
            }

            if (indexData === 1) {
                datas.sort(function (a, b) {
                    return Number(b.grade) - Number(a.grade);
                });
                setSortData(datas);
            } else if (indexData === 3) {
                datas.sort(function (a, b) {
                    return Number(a.tmpdistance) - Number(b.tmpdistance);
                });
                setSortData(datas);
            }

            setDatasFlag(false);
        }
    }, [datas]);

    useEffect(() => {
        setHiddenDataFlag(recoFlag);
    }, [recoFlag]);

    useEffect(() => {
        setHiddenData(recoData);
    }, [recoData]);

    const onChangeSortPop = (event) => {
        setIndexData(1);

        if (recoFlag === true) {
            setRecoFlag(false);
        }

        recommendation.current.classList.remove("text-blue");
        distance.current.classList.remove("text-blue");
        event.target.classList.add("text-blue");

        var newArray = [...sortData];
        newArray.sort(function (a, b) {
            return Number(b.grade) - Number(a.grade);
        });
        setSortData(newArray);
    };

    const onChangeSortRec = (event) => {
        setRecoFlag(true);

        popularity.current.classList.remove("text-blue");
        distance.current.classList.remove("text-blue");
        event.target.classList.add("text-blue");
        var newArray = [];

        for (var i = 0; i < sortData.length; i++) {
            if (
                Number(sortData[i].id) === 2 ||
                Number(sortData[i].id) === 20 ||
                Number(sortData[i].id) === 23 ||
                Number(sortData[i].id) === 24 ||
                Number(sortData[i].id) === 25 ||
                Number(sortData[i].id) === 50 ||
                Number(sortData[i].id) === 52 ||
                Number(sortData[i].id) === 54 ||
                Number(sortData[i].id) === 58 ||
                Number(sortData[i].id) === 59 ||
                Number(sortData[i].id) === 61 ||
                Number(sortData[i].id) === 71 ||
                Number(sortData[i].id) === 73 ||
                Number(sortData[i].id) === 74 ||
                Number(sortData[i].id) === 75 ||
                Number(sortData[i].id) === 77 ||
                Number(sortData[i].id) === 79 ||
                Number(sortData[i].id) === 80 ||
                Number(sortData[i].id) === 84 ||
                Number(sortData[i].id) === 91 ||
                Number(sortData[i].id) === 97 ||
                Number(sortData[i].id) === 99
            ) {
                newArray.push(sortData[i]);
            }
            newArray.sort(function (a, b) {
                return Number(b.grade) - Number(a.grade);
            });
        }

        setRecoData(newArray);
        setIndexData(2);
    };

    const onChangeSortDis = (event) => {
        setIndexData(3);

        if (recoFlag === true) {
            setRecoFlag(false);
        }

        recommendation.current.classList.remove("text-blue");
        popularity.current.classList.remove("text-blue");
        event.target.classList.add("text-blue");
        var newArray = [...sortData];
        newArray.sort(function (a, b) {
            return Number(a.tmpdistance) - Number(b.tmpdistance);
        });
        setSortData(newArray);
    };

    useEffect(() => {
        var newArray = [];
        var cnt = 0;
        var i = 0;
        if (recoNumber === "1") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "2") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "3") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "4") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "5") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "6") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "7") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        } else if (recoNumber === "8") {
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 99) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 75) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 73) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 23) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 25) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 24) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 50) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 2) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 20) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 54) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 58) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 52) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 59) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 61) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 71) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 74) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 77) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 79) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 80) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 84) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 91) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
            for (i = 0; i < recoData.length; i++) {
                if (Number(recoData[i].id) === 97) {
                    newArray[cnt++] = recoData[i];
                    break;
                }
            }
        }
        for (i = 0; i < newArray.length; i++) {
            console.log(newArray[i].tmpdistance);
        }
        setRecoData(newArray);
    }, [recoNumber]);

    return (
        <div className="h-full border-l-2 border-gray-100 z-10 ">
            <div className=" flex-col justify-start px-4 xl:px-10 border-b-2 border-blue ">
                <div className="flex justify-between items-center h-16 py-4">
                    <div className="font-manrope font-bold text-base lg:text-lg">
                        헬스장
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                        <ListFont
                            className="text-blue"
                            onClick={(event) => onChangeSortPop(event)}
                            ref={popularity}
                        >
                            - 인기순
                        </ListFont>
                        <ListFont
                            onClick={(event) => onChangeSortRec(event)}
                            ref={recommendation}
                        >
                            - 추천순
                        </ListFont>
                        <ListFont
                            onClick={(event) => onChangeSortDis(event)}
                            ref={distance}
                        >
                            - 거리순
                        </ListFont>
                    </div>
                </div>
            </div>
            <div className="">
                {datasFlag ? null : (
                    <div>
                        {indexData === 2 ? (
                            <div>
                                {recoData.map((props) => (
                                    <ListPlaceInfor
                                        name={props.name}
                                        img={props.img}
                                        grade={props.grade}
                                        address={props.address}
                                        id={props.id}
                                        tmpDistance={props.tmpdistance}
                                        onDetailData={onDetailData}
                                        key={props.id}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                {sortData.map((props) => (
                                    <ListPlaceInfor
                                        name={props.name}
                                        img={props.img}
                                        grade={props.grade}
                                        address={props.address}
                                        id={props.id}
                                        tmpDistance={props.tmpdistance}
                                        onDetailData={onDetailData}
                                        key={props.id}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
