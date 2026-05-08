import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import RootLayout from "@/component/global-layout";
import { NextPage } from "next";import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {getLayout:(page: ReactNode)=>ReactNode}
//NextPage는NEXTJS에서 쓰는..

export default function App({ Component, pageProps }: AppProps & {Component:NextPageWithLayout}) {
  const getLayout = Component.getLayout || ((page)=> page); //단축평가 flase일경우 그냥 page반환(적용되지않은애들)
  
  return <RootLayout>{getLayout(<Component {...pageProps} />)}
  </RootLayout>
  

}