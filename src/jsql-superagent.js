/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

"use strict";

import superagent from "superagent";

export default function JsqlService(config) {

    /**
     * Overridie @request function
     * @param requestUrl
     * @param requestData
     * @param requestHeaders
     * @returns promise
     */

    window.JSQL.prototype.request = function (requestUrl, requestData, requestHeaders) {

        let request = superagent.set(requestHeaders);

        return request
            .post(requestUrl)
            .send(requestData);


    };

    /**
     * Overridie @wrap function
     * @param token
     * @param queryType
     * @returns promise
     */
    window.JSQL.prototype.wrap = function (token, queryType) {

        return this.construct(token, queryType, {
            successName: 'then',
            errorName: 'catch',
            alwaysName: 'finally'
        });

    };

    this.__jsqlInstance = new window.JSQL(config);

}

JsqlService.prototype.getInstance = function () {
    return this.__jsqlInstance;
};