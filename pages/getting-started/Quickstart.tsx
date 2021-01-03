import Link from 'next/link';
import Layout from '../../components/Layout';

export const Quickstart = (): React.ReactNode => {
  return (
    <Layout title="Quickstart" description="Quickstart">
      <h1 className="font-semibold">Quickstart</h1>
      <br />
      <h2 className="font-semibold">How to get a token?</h2>
      <p>
        First things first you will need an <b>API Token</b> to interact with
        the API (during beta)
      </p>
      <p>
        To obtain one you must signup for an account at the{' '}
        <Link href="https://teyvat.dev/signup">
          <span className="text-primary cursor-pointer">
            Teyvay.Dev Signup Page
          </span>
        </Link>
      </p>
      <p>
        Once signed up log into your account and follow the prompts to generte
        your own unique API token, keep it safe
      </p>
      <br />
      <h2 className="font-semibold">First API Call</h2>
      <p>
        This API supports both RESTful and GraphQL technologies allowing you to
        choose what you the developer need for your own app.
      </p>
      <p>
        Below is an example of a very simple call to the api to list all
        characters.
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
'https://rest.teyvat.dev/characters'
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
--data '{"query":"{ characters { id createdAt updatedAt name constellations overview icon rarity stats weapon } } }"}' -g`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row my-4">
        <div className="w-full lg:w-1/2 bg-background border-r-2 border-gray">
          <div className="flex justify-between">
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white">
              REST
            </div>
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white text-right">
              RESPONSE
            </div>
          </div>
          <pre className="p-2 overflow-x-auto">
            <code className="text-white" lang="bash">
              {`[
  {
    "id": "ckiffskmt0000xj0igeuk8tdt",
    "createdAt": "2020-11-14T03:10:24.219Z",
    "updatedAt": "2021-01-04T00:20:19.857Z",
    "name": "Amber",
    ...
  }
]`}
            </code>
          </pre>
        </div>
        <div className="w-full lg:w-1/2 bg-background">
          <div className="flex justify-between">
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white">
              GRAPHQL
            </div>
            <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white text-right">
              RESPONSE
            </div>
          </div>
          <pre className="p-2 overflow-x-auto">
            <code className="text-white" lang="bash">
              {`{
  "data": {
    "characters": [
      {
        "id": "ckiffskmt0000xj0igeuk8tdt",
        "createdAt": "2020-11-14T03:10:24.219Z",
        "updatedAt": "2021-01-04T00:20:19.857Z",
        "name": "Amber",
        ...
      }
    ]
  }
}`}
            </code>
          </pre>
        </div>
      </div>
      <h2 className="font-semibold">Results</h2>
      <p>
        By default responses will be paginated 10, Pagination documentation can
        be found{' '}
        <Link href="/advanced/Pagination">
          <span className="text-primary cursor-pointer">Here</span>
        </Link>
      </p>
      <p>
        By default responses will not include data of related entities, For
        information about including / selecting related entries visit{' '}
        <Link href="/advanced/Include-and-Select">
          <span className="text-primary cursor-pointer">Here</span>
        </Link>
      </p>
      <br />
      <h2 className="font-semibold">What now?</h2>
      <p>
        Now that you sucessfully done your first API call you can now apply this
        knowledge to more advanced topics or other entities available in the API
      </p>
      <Link href={`/entities`}>
        <button
          className={`p-2 my-2 text-white bg-primary font-semibold rounded-md cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
        >
          Entities
        </button>
      </Link>
      <Link href={`/advanced`}>
        <button
          className={`p-2 my-2 ml-2 text-white bg-primary font-semibold rounded-md cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
        >
          Advanced
        </button>
      </Link>
    </Layout>
  );
};

export default Quickstart;
