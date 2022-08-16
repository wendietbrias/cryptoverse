import millify from "millify";
import Link from "next/link";

const CoinCard = ({ data, count }) => {
  return (
    <Link href={`/detail/${data?.uuid}`}>
      <div className="bg-white shadow-sm rounded-sm py-5 px-3 cursor-pointer">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="font-bold text-sm capitalize">
            {count + 1}.{data?.name}
          </span>
          <img src={data?.iconUrl} className="w-7 h-7" alt={data?.name} />
        </div>
        <div className="mt-4">
          <p className="font-normal text-sm text-gray-700">
            Price : {millify(data?.price)}
          </p>

          <p className="text-sm my-2 font-normal text-gray-700">
            Market Cap : {millify(data?.marketCap)}
          </p>
          <p className="text-sm font-normal text-gray-700">
            Daily Change : {millify(data?.change)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
