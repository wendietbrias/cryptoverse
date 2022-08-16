const CryptoDetail = ({ data }) => {
  return <div className="w-full min-h-screen"></div>;
};

export const getServerSideProps = async ({ context }) => {
  return {
    props: {
      data: [],
    },
  };
};

export default CryptoDetail;
