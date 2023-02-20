const interpolateToSvg = (l: Array<Array<number>>, r: Array<Array<number>>, v = 0): string => {
    if (l.length !== r.length || l.length < 1 || l[0]?.length !== 2 || r[0]?.length !== 2) {
        throw new Error("Lengths of arrays are not equal or invalid")
    }

    let result = "";
    for (let i = 0; i < l.length; i++) {
        const vv = 1 - v;
        const ll: Array<number> | undefined = l[i];
        const rr: Array<number> | undefined = r[i];

        if (ll === undefined || rr === undefined) {
            throw new Error("Invalid array")
        }

        const [l0, l1] = ll;
        const [r0, r1] = rr;
        if (l0 !== undefined && l1 !== undefined && r0 !== undefined && r1 !== undefined) {
            result += (l0 * vv + r0 * v).toFixed() + "," + (l1 * vv + r1 * v).toFixed();
            if (i < l.length - 1) {
                result += " ";
            }
        }

    }
    return result
}

const deriveExtents = (points: Array<Array<Array<number>>>, offsetX: number, offsetY: number): string => {

    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (p === undefined) {
            throw new Error("Invalid array")
        }
        for (let j = 0; j < p.length; j++) {
            const pp = p[j];
            if (pp === undefined) {
                throw new Error("Invalid array")
            }
            // pretty sure this should get nested in jit
            if (pp[0] && pp[0] < minX) {
                minX = pp[0];
            }
            if (pp[0] && pp[0] > maxX) {
                maxX = pp[0];
            }
            if (pp[1] && pp[1] < minY) {
                minY = pp[1];
            }
            if (pp[1] && pp[1] > maxY) {
                maxY = pp[1];
            }
        }

    }
    return `${minX} ${minY} ${maxX + offsetX} ${maxY + offsetY}`
}

type ArrowProps = {
    t: number
}
const Arrow = ({t}: ArrowProps) => {
    const pos0 = [[0, 0], [20, 0], [10, 10]];
    const pos1 = [[0, 10], [20, 10], [10, 0]];
    const interp_points = interpolateToSvg(pos0, pos1, t);
    const extents = deriveExtents([pos0, pos1], 0, 0);
    return (
        <svg width="95%" height="95%" viewBox={extents} fill="none" xmlns="http://www.w3.org/2000/svg"
             className="overflow-visible content-center">
            <polygon points={interp_points} className="stroke-2 stroke-stone-900 opacity-80 hover:opacity-100"/>
        </svg>
    )
}

export default Arrow
