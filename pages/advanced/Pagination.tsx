import Image from 'next/image';
import Layout from '../../components/Layout';

export const Pagination = (): React.ReactNode => {
  return (
    <Layout
      title="Pagination"
      description="How to paginate with the Teyvat.Dev API"
    >
      <h1 className="font-semibold mb-4">Pagination</h1>
      <p>
        The Teyvat.Dev API uses the skip and take pagination technique, which is
        shown in the diagram below
      </p>
      <Image
        src="/offset-skip-take.png"
        alt="Offset Skip Take Diagram"
        height="200"
        width="650"
      />
      <p>
        All endpoints that return an Array of items will have the default
        pagination as{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`{skip: 0, take: 10}`}</code>
      </p>
      <br />
      <h2 className="font-semibold mb-4">Pagination in Rest</h2>
      <p>
        Pagination variables in REST are handled as Query Parameters and are
        represented as{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`?skip=0&take=10`}</code>{' '}
        For a full cURL example please look at the examples at the bottom of
        this page
      </p>
      <br />
      <h2 className="font-semibold mb-4">Pagination in GraphQL</h2>
      <p>
        Pagination variables in REST are handled as Query Variables and are
        represented as{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`skip: 0, take: 10`}</code>{' '}
        For a full cURL example please look at the examples at the bottom of
        this page
      </p>
      <div className="flex flex-col lg:flex-row my-4">
        <div className="w-full lg:w-1/2 bg-background border-r-2 border-gray">
          <div className="flex justify-between">
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white">
              REST
            </div>
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white text-right">
              CURL
            </div>
          </div>
          <pre className="p-2 overflow-x-auto">
            <code className="text-white" lang="bash">
              {`curl --request GET --url 
'https://rest.teyvat.dev/characters?skip=5&take5'
--header 'Authorization: Bearer <token>' -g`}
            </code>
          </pre>
        </div>
        <div className="w-full lg:w-1/2 bg-background">
          <div className="flex justify-between">
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white">
              GRAPHQL
            </div>
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white text-right">
              CURL
            </div>
          </div>
          <pre className="p-2 overflow-x-auto">
            <code className="text-white" lang="bash">
              {`curl --request POST
--url https://graphql.teyvat.dev/
--header 'Authorization: Bearer <token>'
--header 'Content-Type: application/json'
--data '{"query":"{ characters(skip: 5, take: 5) { id } }"' -g`}
            </code>
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default Pagination;
