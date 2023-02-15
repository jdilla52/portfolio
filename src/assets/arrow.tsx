

const InterpolateToSvg =(l: Array<Array<number>>, r: Array<Array<number>>, v = 0): string => {
    if (l.length !== r.length || l.length < 1 || l[0]?.length !== 2 || r[0]?.length !== 2) {
        throw new Error("Lengths of arrays are not equal or invalid")
    }

    let result = "";
    for (let i = 0; i < l.length; i++) {
        const vv = 1-v;
        const ll: Array<number> | undefined = l[i];
        const rr: Array<number> | undefined = r[i];

        if (ll === undefined || rr === undefined) {
            throw new Error("Invalid array")
        }

        const [l1, l2] = ll;
        const [r1, r2] = rr;
        if (l1 && l2 && r1 && r2) {
            result += (l1 * vv + r1 * v).toFixed() + "," + (l2 * vv + r2 * v).toFixed();
            if (i < l.length - 1) {
                result += " ";
            }
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
        <svg width="100%" height="100%" viewBox="-1 -1 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points={points} className="stroke-2 stroke-stone-900 opacity-80 hover:opacity-100"/>
        </svg>
    )
}

export default Arrow
