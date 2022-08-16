import { NewsCard } from "../../components";
import { FetchNews } from "../../services";

const News = ({ news }) => {
  return (
    <div className="w-full min-h-screen py-7 px-7">
      <div className="grid grid-cols-3 gap-5">
        {news?.value?.map((data, idx) => (
          <NewsCard data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const allNews = await FetchNews(50);

  return {
    props: {
      news: allNews,
    },
  };
};

export default News;
