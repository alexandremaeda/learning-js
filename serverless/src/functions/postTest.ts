import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { id, name } = JSON.parse(event.body);

  await document
    .put({
      TableName: "test",
      Item: {
        id,
        name,
        created_at: new Date().toISOString(),
      },
    })
    .promise();

  const response = await document
    .query({
      TableName: "test",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id,
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(response.Items[0]),
  };
};
