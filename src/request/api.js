import {
    baseGet,
    basePost
} from "./base";

export default {
    newblock(params) {
        return baseGet("/newblock/", params);
    },
    newtx(params) {
        return baseGet("/newtx/", params);
    },

    blocklist(params) {
        return basePost("/blocklist/", params);
    },
    txlist(params) {
        return basePost("/txlist/", params);
    },
    block(params) {
        return basePost("/block/", params);
    },
    tx(params) {
        return basePost("/tx/", params);
    },
    rank(params) {
        return basePost("/rank/", params);
    },
    address(params) {
        return basePost("/address/", params);
    },
    listdelegate(params) {
        return baseGet("/listdelegate/", params);
    },
    listdelegatedetail(params) {
        return baseGet("/listdelegatedetail/", params);
    }
}