import { FetchCoins, FetchHistory } from "../../services";
import millify from "millify";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CoinSpecificInfo } from "../../components";
import { ChartBar } from "../../components";

const optionItems = ["3h", "24h", "2d", "30d", "1y", "3m", "3y", "5y"];

const CryptoDetail = ({ coinDetail }) => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const allHistory = await FetchHistory(coinDetail?.uuid, timePeriod);
      setHistory(allHistory);
    };

    fetchHistory();
  }, [timePeriod]);

  return (
    <div className="w-full min-h-screen px-7">
      <div className="w-full py-7 border-b border-gray-300">
        <h1 className="text-center font-extrabold text-blue-400 text-2xl">
          {coinDetail?.name} ({coinDetail?.name} - {coinDetail.symbol}) Price
        </h1>
        <p className="text-sm  text-center font-normal text-gray-400 mt-3">
          {coinDetail?.name} Live price in US Dollar USD.View value
          statistics,market cap, and supply
        </p>
      </div>
      <div className="w-full mt-10 flex flex-wrap justify-between items-end">
        <div>
          <select
            defaultValue={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="text-sm py-1 px-2 bg-white text-gray-500 rounded-sm w-[250px] outline-none ring-1 ring-blue-400"
          >
            {optionItems.map((option) => (
              <option key={option} value={option}>
                {" "}
                {option}
              </option>
            ))}
          </select>
          <h3 className="text-blue-400 text-xl font-semibold mt-4">
            {coinDetail?.name} Price chart
          </h3>
        </div>
        <div>
          <span className="font-bold text-sm mr-5">
            Change : {coinDetail?.change}%
          </span>
          <span className="font-bold text-sm">
            Current Bitcoin prices : {millify(coinDetail?.price)}
          </span>
        </div>
      </div>
      <ChartBar history={history} />
      <CoinSpecificInfo
        name={coinDetail?.name}
        data={{
          price: coinDetail?.price,
          rank: coinDetail?.rank,
          volume: coinDetail?.listedAt,
          marketCap: coinDetail?.marketCap,
          allTimeHigh: coinDetail?.allTimeHigh?.price,
          numberOfMarkets: coinDetail?.numberOfMarkets,
          numberOfExchanges: coinDetail?.numberOfExchanges,
          approveSupply: coinDetail?.supply?.confirmed,
          totalSupply: coinDetail?.supply?.total,
          circulatingSupply: coinDetail?.supply?.circulating,
        }}
      />
      <div className="coin-desc flex flex-wrap justify-between mt-10">
        <div className="w-full xl:w-[45%]">
          <h2 className="text-blue-400 font-bold text-xl mb-5">
            What is {coinDetail?.name}?
          </h2>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: coinDetail?.description }}
          ></div>
        </div>
        <div className="w-full mt-5 xl:mt-0 xl:w-[45%]">
          <h2 className="text-blue-400 font-bold text-xl mb-5">
            {coinDetail?.name} links
          </h2>
          <div className="w-full mt-5">
            {coinDetail?.links?.map((link, idx) => (
              <div
                className="flex justify-between border-b border-gray-300 py-4"
                key={idx}
              >
                <span className="ml-4 font-bold text-gray-700 text-sm">
                  {link?.name}
                </span>
                <Link href={link?.url}>
                  <span className="cursor-pointer text-blue-400 font-bold text-sm">
                    {link?.type}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const allCoin = await FetchCoins(`coin/${id}`, 0);

  return {
    props: {
      coinDetail: allCoin.coin,
    },
  };
};

export default CryptoDetail;
