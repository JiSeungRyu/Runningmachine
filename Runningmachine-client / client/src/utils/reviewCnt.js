export default function ReviewCnt(props) {
    let cnt = 0;
    if (props.review0 !== "") {
        cnt++;
    }
    if (props.review1 !== "") {
        cnt++;
    }
    if (props.review2 !== "") {
        cnt++;
    }
    if (props.review3 !== "") {
        cnt++;
    }
    if (props.review4 !== "") {
        cnt++;
    }
    if (props.review5 !== "") {
        cnt++;
    }
    if (props.review6 !== "") {
        cnt++;
    }
    if (props.review7 !== "") {
        cnt++;
    }
    if (props.review8 !== "") {
        cnt++;
    }
    if (props.review9 !== "") {
        cnt++;
    }
    return cnt;
}
