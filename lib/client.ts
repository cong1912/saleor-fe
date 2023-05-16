import { GraphQLClient } from 'graphql-request';

const endPoint: string = process.env.NEXT_PUBLIC_API_END_POINT || '';
export const client = new GraphQLClient(endPoint);
