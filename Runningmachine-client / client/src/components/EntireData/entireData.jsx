import axios from "axios";
import { useState, useEffect } from "react";
import getDistanceFromLatLng from "../../utils/getDistanceFromLatLng.js";

export default function EntireData({ detailData, onCancel }) {
    const [companyData, setCompanyData] = useState({});
    const [reviewData, setReviewData] = useState({});
    const [hoursData, setHoursData] = useState({});
    const [commentData, setCommentData] = useState({});
    const [today, setToday] = useState();
    const [openTime, setOpenTime] = useState();
    const [closeTime, setCloseTime] = useState();

    const getCompanyData = async () => {
        const response = await axios.get(
            `http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/company/${detailData}`
        );
        setCompanyData(response.data);
    };

    const getReviewData = async () => {
        const response = await axios.get(
            `http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/review/${detailData}`
        );
        setReviewData(response.data);
    };

    const getHoursData = async () => {
        const response = await axios.get(
            `http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/hours/${detailData}`
        );
        setHoursData(response.data);
    };

    const getCommentData = async () => {
        const response = await axios.get(
            `http://ec2-3-37-61-166.ap-northeast-2.compute.amazonaws.com:8080/comment/${detailData}`
        );
        setCommentData(response.data);
    };
    const getTime = async () => {
        const day = await new Date().getDay();

        if (day === 1) {
            setOpenTime(hoursData.mon_open);
            setCloseTime(hoursData.mon_close);
            setToday("월요일");
        } else if (day === 2) {
            setOpenTime(hoursData.tue_open);
            setCloseTime(hoursData.tue_close);
            setToday("화요일");
        } else if (day === 3) {
            setOpenTime(hoursData.wed_open);
            setCloseTime(hoursData.wed_close);
            setToday("수요일");
        } else if (day === 4) {
            setOpenTime(hoursData.thu_open);
            setCloseTime(hoursData.thu_close);
            setToday("목요일");
        } else if (day === 5) {
            setOpenTime(hoursData.fri_open);
            setCloseTime(hoursData.fri_close);
            setToday("금요일");
        } else if (day === 6) {
            setOpenTime(hoursData.sat_open);
            setCloseTime(hoursData.sat_close);
            setToday("토요일");
        } else if (day === 0) {
            setOpenTime(hoursData.sun_open);
            setCloseTime(hoursData.sun_close);
            setToday("일요일");
        }
    };

    const onClick = () => {
        onCancel();
    };

    useEffect(() => {
        getCompanyData();
        getReviewData();
        getHoursData();
        getCommentData();
    }, []);

    useEffect(() => {
        getTime();
    }, [hoursData]);

    return (
        <div className="h-full border-l-2 border-gray-100 z-10 ">
            <div className=" flex-col justify-start px-4 xl:px-10 border-b-2 border-blue mb-4">
                <div className="flex justify-between items-center h-16 py-4">
                    <div className="font-manrope font-bold text-base lg:text-lg">
                        헬스장
                    </div>
                    <div
                        className="text-lg w-8 h-8 bg-blue flex justify-center text-center text-white cursor-pointer font-bold rounded"
                        onClick={onClick}
                    >
                        x
                    </div>
                </div>
            </div>
            <img src={companyData.img} className="w-full h-28 object-cover" />
            <div className=" flex-col py-6 border-b border-gray-300">
                <div className="flex justify-center items-center">
                    <div className=" font-manrope font-bold text-base text-xl">
                        {companyData.name}
                    </div>
                    <div className="font-manrope text-xs ml-2 text-gray-400 font-bold">
                        헬스장
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <i className="fa-solid fa-star text-red-600"></i>
                    <div className="text-red-600 ml-1 mr-4">
                        {companyData.grade ? companyData.grade : "0.00"} / 5.00
                    </div>
                    <i className="fa-solid fa-phone"></i>
                    <div className="ml-1">{companyData.phoneNumber}</div>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="ml-1">{companyData.address}</div>
                </div>
                <div className="flex justify-center mt-2">
                    <i className="fa-regular fa-clock"></i>
                    <div className="text-xs pl-1">
                        {today}{" "}
                        {openTime === "" ? "" : openTime + "~" + closeTime}
                    </div>
                </div>
            </div>

            <div className="flex-col justify-between items-center h-16 py-4 px-4 xl:px-8">
                <div className="font-manrope font-bold text-base mb-2">
                    방문자 리뷰
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/beating_heart20220119222223.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "친절해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.kind}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/sparkles20220119222028.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "시설이 깔끔해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.tidy}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/dumbbell20220119222300.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "기구가 다양해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.various}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/left_right_arrow20220119222258.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "공간이 넓어요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.wide}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/coin20220119222025.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "가격이 합리적이예요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.reasonable}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/man_doing_lunge20220119222300.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "자세를 꼼꼼히 봐주세요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.pose}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/clipboard20220119222236.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "상담이 자세해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.advice}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/park_sign20220119222222.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "주차하기 편해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.parking}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/chart_increasing20220119222247.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "수업이 체계적이에요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.class}
                    </div>
                </div>
                <div className="w-full h-8 bg-blue rounded flex px-2 flex justify-between items-center mb-1">
                    <div className="flex justify-start h-6">
                        <img
                            src="https://ssl.pstatic.net/static/pup/emoji/green_heart20220119222224.png"
                            alt=""
                        />
                        <div className="text-white font-manrope font-bold flex items-center text-sm pl-1">
                            "GX프로그램이 다양해요"
                        </div>
                    </div>
                    <div className="text-white font-manrope font-bold text-sm">
                        {commentData.GX}
                    </div>
                </div>
            </div>
        </div>
    );
}
