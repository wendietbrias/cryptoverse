import Head from "next/head";
import axios from "axios";
import { CoinCard, NewsCard } from "../components";
import millify from "millify";
import Link from "next/link";
import { useState } from "react";
import { FetchCoins, FetchNews } from "../services";

const CurrencyStatsItem = ({ title, count }) => {
  return (
    <div className="w-[49%]">
      <h5 className="text-gray-400 font-normal text-md">{title}</h5>
      <h4 className="font-semibold mt-2 text-gray-600 text-lg">
        {millify(count)}
      </h4>
    </div>
  );
};

export default function Home({ data, news }) {
  return (
    <div className="w-full  min-h-screen py-7 px-7">
      <div className="w-full">
        <h2 className="font-bold text-gray-700 text-2xl">
          Global Crypto Stats
        </h2>
        <div className="flex flex-wrap gap-5 items-center mt-7 justify-between">
          <CurrencyStatsItem
            title="Total Cryptocurrencies"
            count={data?.stats?.totalCoins}
          />
          <CurrencyStatsItem
            title="Total Exchanges"
            count={data?.stats?.totalExchanges}
          />
          <CurrencyStatsItem
            title="Total Market Cap"
            count={data?.stats?.totalMarkets}
          />
          <CurrencyStatsItem
            title="Total 24h Volumne"
            count={data?.stats?.total24hVolume}
          />
          <CurrencyStatsItem title="Total" count={data?.stats?.total} />
          <CurrencyStatsItem
            title="Total Coins"
            count={data?.stats?.totalCoins}
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-700 text-xl">
            Top 10 Cryptocurrencies in world
          </h2>
          <Link href="/cryptocurrency">
            <button className="cursor-pointer bg-transparent text-blue-500 font-semibold text-sm">
              Show More
            </button>
          </Link>
        </div>
        <div className="grid mt-7 grid-cols-3 gap-5">
          {data?.coins?.map((coin, idx) => (
            <CoinCard data={coin} key={idx} count={idx} />
          ))}
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-700 text-xl">
            Cryptocurrency News
          </h2>
          <Link href="/news">
            <button className="cursor-pointer bg-transparent text-blue-500 font-semibold text-sm">
              Show More
            </button>
          </Link>
        </div>
        <div className="grid mt-7 grid-cols-3 gap-5">
          {news?.value?.map((data, idx) => (
            <NewsCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const getCoins = await FetchCoins("coins", 10);
  const getNews = await FetchNews(10);

  return {
    props: {
      data: getCoins,
      news: getNews,
    },
  };
};
