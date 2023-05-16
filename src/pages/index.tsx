import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Suspense, useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel';
import Footer from '../../components/layout/footer';
import ThreeItemGrid from '../../components/grid/three-items';
import useSWR from 'swr';
import { fetcher } from '../../helper/apiHandle';
import { getProductsQuery } from '../../lib/shopify/queries/product';
import request, { gql } from 'graphql-request';
import productFragment from '../../lib/shopify/fragments/product';

const inter = Inter({ subsets: ['latin'] });
// const fetcher = (query, variables) => {
//   console.log(query, variables);
//   return request(`http://localhost:8000/graphql/`, query, variables);
// };
export default function Home() {
  const MANGA_QUERY = `
    
      products(channel: $channel, first: 100) {
        edges {
          node {
            name
          }
        }
      }
    
  `;
  // ${productFragment}

  const variables = { channel: 'default-channel' };
  // const { data, error, isLoading } = useSWR(
  //   `{products(channel: "default-channel", first: 100) {
  //   edges {
  //     node {
  //       name
  //     }
  //   }
  // }}`
  // );
  const { data, error, isLoading } = useSWR(
    { query: MANGA_QUERY, variables: { channel: 'default-channel' } },
    fetcher
  );
  console.log(error);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {/* <ThreeItemGrid /> */}
      <h1>hello</h1>
    </>
  );
}
