import Link from 'next/link';
import Layout from '../../components/Layout';

export const Welcome = (): React.ReactNode => {
  return (
    <Layout title="GettingStarted" description="Getting Started">
      <h1 className="font-semibold">Welcome</h1>
      <p>Thanks for taking the time to read the Teyvat.Dev documentation!</p>
      <br />
      <p>
        To get started with the API follow the Quickstart guide following the
        link below
      </p>
      <Link href={`/getting-started/Quickstart`}>
        <button
          className={`p-2 my-2 text-white bg-primary font-semibold rounded-md cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
        >
          Quickstart
        </button>
      </Link>
      <p>
        The docs are currently under development and will look quite strange
        until all the issues are sorted out, if you would like to help out with
        the development by adding features or fixing errors, please contribute
        by submitting a pull request at open source github repo (Link in the top
        right)
      </p>
    </Layout>
  );
};

export default Welcome;
