

const InterpolateToSvg =(l: Array<Array<number>>, r: Array<Array<number>>, v = 0): string => {
    if (l.length !== r.length || l.length < 1 || l[0].length !== 2 || r[0].length !== 2) {
        throw new Error("Lengths of arrays are not equal or invalid")
    }
    let result = "";
    for (let i = 0; i < l.length; i++) {
        const vv = 1-v;
        // @ts-ignore
        result += (l[i][0] * vv + r[i][0] * v).toFixed() + "," + (l[i][1] * vv + r[i][1] * v).toFixed();
        if (i < l.length - 1) {
            result += " ";
        }
    }
    return result
}

type ArrowProps = {
    t: number
}
const Arrow = ({t}: ArrowProps) => {
    const points = InterpolateToSvg([[0,0], [20,0], [10,10]], [[0,10], [20,10], [10,0]], t);

    return (
        <svg width="30" height="20" viewBox="-5 -5 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points={points} className="stroke-2 stroke-stone-900 opacity-80 hover:opacity-100"/>
        </svg>
    )
}

export default Arrow
