import {
  AiOutlineDollarCircle,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineLineChart,
  AiOutlineTransaction,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import millify from "millify";

const CoinSpecificInfo = ({ name, data }) => {
  const staticInfo = [
    {
      name: "Price to usd",
      icon: <AiOutlineDollarCircle />,
      value: data?.price,
    },
    {
      name: "Rank",
      icon: <FaHashtag />,
      value: data?.rank,
    },
    {
      name: "24h Volume",
      icon: <AiOutlineThunderbolt />,
      value: data?.volume,
    },
    {
      name: "Market cap",
      icon: <AiOutlineDollarCircle />,
      value: data?.marketCap,
    },
    {
      name: "All-time-high(daily avg)",
      icon: <AiOutlineTrophy />,
      value: data?.allTimeHigh,
    },
  ];

  const genericInfo = [
    {
      name: "Number of markets",
      icon: <AiOutlineLineChart />,
      value: data?.numberOfMarkets,
    },
    {
      name: "Number of exchanges",
      icon: <AiOutlineTransaction />,
      value: data?.numberOfExchanges,
    },
    {
      name: "Approve supply",
      icon: <AiOutlineInfoCircle />,
      value: data?.approveSupply,
    },
    {
      name: "Total supply",
      icon: <AiOutlineInfoCircle />,
      value: data?.totalSupply,
    },
    {
      name: "Circulating supply",
      icon: <AiOutlineInfoCircle />,
      value: data?.circulatingSupply,
    },
  ];

  return (
    <div className="flex justify-between mt-10">
      <div className="w-[45%]">
        <h3 className="text-xl font-bold text-blue-400">{name} Stats Info</h3>
        <p className="text-sm font-normal mt-2 text-gray-500">
          An overview showing the statistics of {name},such as the base and
          quote currency , the rank and trading volume
        </p>
        <div className="w-full mt-5">
          {staticInfo?.map((item, idx) => (
            <div
              key={idx}
              className="flex border-b border-gray-300 py-3  items-center justify-between"
            >
              <span className="flex items-center">
                {item?.icon}
                <p className="font-medium ml-3 text-sm text-gray-700">
                  {item?.name}
                </p>
              </span>
              <p className="font-bold text-gray-700 text-sm">
                {millify(item?.value)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[45%]">
        <h3 className="text-xl font-bold text-blue-400">Ohter stats Info</h3>
        <p className="text-sm font-normal mt-2 text-gray-500">
          An overview showing the statistics of {name},such as the base and
          quote currency , the rank and trading volume
        </p>
        <div className="w-full mt-5">
          {genericInfo?.map((item, idx) => (
            <div
              key={idx}
              className="flex border-b border-gray-300 py-3  items-center justify-between"
            >
              <span className="flex items-center">
                {item?.icon}
                <p className="font-medium ml-3 text-sm text-gray-700">
                  {item?.name}
                </p>
              </span>
              <p className="font-bold text-gray-700 text-sm">
                {millify(item?.value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinSpecificInfo;
