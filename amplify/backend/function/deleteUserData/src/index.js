/* Amplify Params - DO NOT EDIT
	API_EVRYDAY_GRAPHQLAPIIDOUTPUT
	API_EVRYDAY_USERTABLE_ARN
	API_EVRYDAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// Remove the users name and set account for deletion

const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = process.env.API_EVRYDAY_USERTABLE_NAME;

const THIRTY_DAYS_IN_SECONDS =  30 * 24 * 60 * 60;

exports.handler = async (event) => {
    const ownerField = 'owner';
    const identityClaim = 'username';
    
    var condition = {
        [ownerField]: {
            ComparisonOperator: 'EQ',
            AttributeValueList: [event.identity.claims[identityClaim]]
        },
        '_deleted': {
            ComparisonOperator: 'NE',
            AttributeValueList: [true]
        }
    };

    await new Promise(async (res) => {
        let LastEvaluatedKey;

        do {
            let queryParams = {
                TableName: userTable,
                ScanFilter: condition,
                ExclusiveStartKey: LastEvaluatedKey
            }

            const items = await new Promise(resolve => {
                dynamodb.scan(queryParams, (err, data) => {
                    if (err) {
                        console.log({ error: 'Could not load items: ' + err });
                        resolve([]);
                    } else {
                        LastEvaluatedKey = data.LastEvaluatedKey;
                        resolve(data.Items);
                    }
                });
            })

            const dateNow = new Date();

            if (items.length > 0) {
                let deleteParams = {
                    RequestItems: {
                        [userTable]: items.map(item => {
                            return {
                                PutRequest: {
                                    Item: {
                                        ...item,
                                        name: "deleted",
                                        _deleted: true,
                                        _ttl: dateNow.getTime()/1000 + THIRTY_DAYS_IN_SECONDS,
                                        _version: item._version + 1,
                                        _lastChangedAt: dateNow.getTime(),
                                        updatedAt: dateNow.toISOString(),
                                    }
                                }
                            }
                        })
                    }
                }
    
                await new Promise(resolve => {
                    dynamodb.batchWrite(deleteParams, (err, data) => {
                        resolve();
                    })
                })
            }

        } while(LastEvaluatedKey)
        
        res();
    });

    return true;
};
