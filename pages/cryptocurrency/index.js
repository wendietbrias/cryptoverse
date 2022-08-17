import { FetchCoins } from "../../services";
import { CoinCard } from "../../components";

const CryptoCurency = ({ data }) => {
  return (
    <div className="w-full py-7 px-7 min-h-screen">
      <div className="w-full flex items-center mb-10 justify-between">
        <input
          type="text"
          placeholder="find coins.."
          className="bg-transparent border-b-2 outline-none border-gray-300 pb-3 w-[40%]"
        />
      </div>
      <div className="grid sm:grid-cols-2 xs:grid-cols-1 xl:grid-cols-3 gap-5">
        {data?.coins?.map((coin, idx) => (
          <CoinCard data={coin} key={idx} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const getCoins = await FetchCoins("/coins", 50);

  return {
    props: {
      data: getCoins,
    },
  };
};

export default CryptoCurency;
