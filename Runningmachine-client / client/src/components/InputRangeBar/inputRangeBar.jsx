import React, { useState, useEffect, useRef } from "react";
import "./inputRangeBar.css";

const { kakao } = window;
// import ReactDom from "react-dom";

export default function InputRangeBar({
    min,
    max,
    step,
    priceGap,
    maxValue,
    changeMaxValue,
}) {
    const progressRef = useRef(null);

    const [minValue, setMinValue] = useState(0);
    const [distance, setDistance] = useState("");

    const onChangeMinValue = (event) => {
        if (maxValue - minValue >= priceGap && maxValue <= max) {
            if (parseInt(event.target.value) >= parseInt(maxValue)) {
                // console.log(1);
            } else {
                // console.log(2);
                changeMaxValue(event.target.value);
            }
        } else {
            if (parseInt(event.target.value) < minValue) {
                // console.log(3);
            } else {
                // console.log(4);
            }
        }
    };

    const onChangeMaxValue = (event) => {
        if (maxValue - minValue >= priceGap && maxValue <= max) {
            if (parseInt(event.target.value) > parseInt(minValue)) {
                // console.log(1);
                changeMaxValue(event.target.value);
            } else {
                // console.log(2);
            }
        } else {
            if (parseInt(event.target.value) > maxValue) {
                // console.log(3);
                changeMaxValue(event.target.value);
            } else {
                // console.log(4);
            }
        }
    };

    useEffect(() => {
        changeMaxValue(2000);
    }, []);

    useEffect(() => {
        const leftValue = (minValue / max) * step;
        const rightValue = step - (maxValue / max) * step;
        progressRef.current.style.left = leftValue + "%";
        progressRef.current.style.right = rightValue + "%";

        var distanceLeftValue = "";
        var distanceRightValue = "";

        if (minValue > 0 && minValue < 1000) {
            distanceLeftValue = minValue + "m";
        } else distanceLeftValue = (minValue * 0.001).toFixed(1) + "km";

        if (maxValue > 0 && maxValue < 1000) {
            distanceRightValue = maxValue + "m";
        } else distanceRightValue = (maxValue * 0.001).toFixed(1) + "km";

        if (minValue !== 0 && maxValue !== 2000) {
            setDistance(distanceLeftValue + " ~ " + distanceRightValue);
        } else if (minValue === 0 && maxValue !== 2000) {
            setDistance(distanceRightValue + "까지");
        } else if (minValue !== 0 && maxValue === 2000) {
            setDistance(distanceLeftValue + "부터");
        } else {
            setDistance("전체");
        }
    }, [minValue, maxValue]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between pb-4">
                <div className="font-bold font-manrope text-lg">거리</div>
                <div className="font-bold font-manrope text-lg text-blue">
                    {distance}
                </div>
            </div>
            <div className="mb-4">
                <div className="slider relative h-1 rounded-md bg-gray-300">
                    <div
                        className="absolute h-1 bg-blue rounded "
                        ref={progressRef}
                    ></div>
                </div>
                <div className="relative">
                    <input
                        type="range"
                        className="range-min absolute w-full m-auto -top-1 h-1 appearance-none pointer-event-none bg-transparent outline-none z-10"
                        value={minValue}
                        onChange={onChangeMinValue}
                        min={min}
                        max={max}
                        step={step}
                    />
                    <input
                        type="range"
                        className="range-max absolute w-full m-auto -top-1 h-1 appearance-none pointer-event-none bg-transparent outline-none z-10"
                        value={maxValue || ""}
                        onChange={onChangeMaxValue}
                        min={min}
                        max={max}
                        step={step}
                    />
                </div>
            </div>
        </div>
    );
}
