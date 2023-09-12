import InputRangeBar from "../InputRangeBar/inputRangeBar.jsx";
import { useState, useEffect, useRef } from "react";

export default function SearchBar({
    maxValue,
    changeMaxValue,
    hiddenDataFlag,
    setRecoNumber,
}) {
    const [clickEventValue, setClickEventValue] = useState();
    const hiddenContainer = useRef(null);
    const onChangecolor = (event) => {
        event.target.style.backgroundColor = "#4d77ff";
        event.target.style.color = "white";
        if (clickEventValue !== undefined) {
            clickEventValue.style.backgroundColor = "white";
            clickEventValue.style.color = "#4d77ff";
        }
        setClickEventValue(event.target);
        setRecoNumber(event.target.id);
    };

    useEffect(() => {
        if (hiddenDataFlag === true) {
            hiddenContainer.current.classList.remove("hidden");
        } else {
            hiddenContainer.current.classList.add("hidden");
        }
    }, [hiddenDataFlag]);
    return (
        <div className="pt-4">
            <div className="px-4 flex flex-col">
                <InputRangeBar
                    min={0}
                    max={2000}
                    step={100}
                    priceGap={100}
                    maxValue={maxValue}
                    changeMaxValue={changeMaxValue}
                />
                <div className="hidden" ref={hiddenContainer}>
                    <div className="flex justify-between py-4">
                        <div className="font-bold font-manrope text-lg">
                            추천
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-around">
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="1"
                            >
                                다이어트
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="2"
                            >
                                초보
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="3"
                            >
                                수업
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="4"
                            >
                                체력
                            </div>
                        </div>
                        <div className="flex justify-around mt-4">
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="5"
                            >
                                트레이너
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="6"
                            >
                                시설
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="7"
                            >
                                친절
                            </div>
                            <div
                                className="border border-blue cursor-pointer w-20 h-10 flex justify-center items-center bg-white rounded text-blue font-semibold"
                                onClick={onChangecolor}
                                id="8"
                            >
                                깔끔
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
