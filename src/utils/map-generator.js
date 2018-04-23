export const mapGerenator = (ary) => {
    let ret = {};

    for(let i = 0; i < ary.length; i++) {
        ret[ary[i]] = ary[i];
    }

    return ret;
};