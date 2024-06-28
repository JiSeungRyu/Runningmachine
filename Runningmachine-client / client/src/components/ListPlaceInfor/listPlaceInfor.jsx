import PropTypes from "prop-types";
import { useState, useEffect } from "react";
export default function ListPlaceInfor({
    name,
    img,
    address,
    grade,
    id,
    tmpDistance,
    onDetailData,
}) {
    // console.log(id);
    const [distance, setDistance] = useState("");

    const onClick = () => {
        onDetailData(id);
    };
    useEffect(() => {
        if (tmpDistance >= 1000) {
            tmpDistance = (tmpDistance / 1000).toFixed(2) + "km";
        } else {
            tmpDistance = tmpDistance + "m";
        }
        setDistance(tmpDistance);
    }, [tmpDistance]);

    return (
        <div className="flex w-full h-32 border-b border-gray-200" id={id}>
            <div className="w-[50%] h-full flex justify-center items-center">
                {img === "" ? (
                    <div className="w-28 h-28 bg-white-100 border-2 border-gray-200"></div>
                ) : (
                    <img src={img} alt="" className="w-28 h-28 object-cover " />
                )}
            </div>
            <div className="w-[50%] h-full pt-4 pl-2 font-manrope pr-6">
                <div
                    className="font-bold text-base cursor-pointer"
                    onClick={onClick}
                >
                    {name}
                </div>
                <div className="font-medium text-xs text-zinc-400">
                    {address}
                </div>
                <div className="font-semibold text-xs flex">
                    <i className="fa-solid fa-star text-red-600"></i>
                    <div className="text-red-600">{grade ? grade : "0.00"}</div>
                    <div className="text-zinc-400 mx-1">/</div>{" "}
                    <div className="cursor-pointer">리뷰 10+</div>
                </div>
                <div className="font-medium text-xs">{distance}</div>
            </div>
        </div>
    );
}

ListPlaceInfor.prototype = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
};
