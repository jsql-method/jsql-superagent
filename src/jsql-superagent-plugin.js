import superagent from "superagent";

export default class JsqlService {
    constructor(config) {
        window.JSQL.prototype.request = function (requestUrl, requestData, requestHeaders) {
            return superagent
                .post(requestUrl, requestHeaders)
                .send(requestData);

        },
            window.JSQL.prototype.wrap = function (token, queryType) {
                return this.construct(token, queryType, {successName: "then", errorName: "catch", alwaysName: "finally"})
            },
            this.jsql = new window.JSQL(config)
    }
};
