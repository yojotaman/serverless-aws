'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hola ${event.pathParameters.name}`,
            input: event.name,
        }, null, 2),
    };
};


module.exports.showUser = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Peticion POST`,
            input: event['body'],
        }, null, 2),
    };
};