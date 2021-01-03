import { useMemo } from 'react';

const restCurlTemplate = `curl --request GET --url 
'https://rest.teyvat.dev/<endpoint>/<params>'
--header 'Authorization: Bearer <token>' -g`;

const graphqlCurlTemplate = `curl --request POST
--url https://graphql.teyvat.dev/
--header 'Authorization: Bearer <token>'
--header 'Content-Type: application/json'
--data '{"query":"{ <endpoint>(where: <condition>) {id}}}"}' -g`;

const Examples = ({ endpoint }: { endpoint: string }): React.ReactElement => {
  const curlExamples = useMemo(
    () => ({
      rest: restCurlTemplate.replace('<endpoint>', endpoint),
      // .replace('<params>', ''),
      graphql: graphqlCurlTemplate.replace('<endpoint>', endpoint),
    }),
    [endpoint],
  );

  return (
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
            {curlExamples.rest}
          </code>
        </pre>
      </div>
      <div className="w-full lg:w-1/2 bg-background">
        <div className="flex justify-between">
          <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white">
            Graphql
          </div>
          <div className="w-full p-2 bg-primary bg-opacity-20 font-bold text-white text-right">
            CURL
          </div>
        </div>
        <pre className="p-2 overflow-x-auto">
          <code className="text-white" lang="bash">
            {curlExamples.graphql}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Examples;
