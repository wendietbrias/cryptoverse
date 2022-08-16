const NewsCard = ({ data }) => {
  const { provider } = data;

  return (
    <div className="bg-white rounded-md py-4 px-5">
      <div className="flex items-center">
        <span className="flex-1 text-gray-700 font-semibold text-md mr-3">
          {data?.name}
        </span>
        {!data?.image?.thumbnail.contentUrl ? (
          <span className="w-20 h-20 rounded-sm bg-gray-300"></span>
        ) : (
          <img
            src={data?.image?.thumbnail?.contentUrl}
            alt={
              data?.name.length > 100 ? data.name.substring(0, 50) : data.name
            }
            className="w-20 h-20 rounded-sm"
          />
        )}
      </div>
      <p className="mt-3 text-sm font-normal text-gray-500">
        {data?.description.substring(0, 90)}...
      </p>
      <div className="flex justify-between items-center mt-5">
        <span className="flex items-center">
          <img
            src={provider[0]?.image?.thumbnail?.contentUrl}
            className="w-6 h-6 mr-1"
          />
          <p className="text-xs ml-2 font-medium text-gray-700">
            {provider[0]?.name}
          </p>
        </span>
        <p className="text-sm text-gray-500 font-normal">
          {new Date(data?.datePublished).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
