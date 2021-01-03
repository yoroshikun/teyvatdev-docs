import Layout from '../../components/Layout';

export const IncludeAndSelect = (): React.ReactNode => {
  return (
    <Layout
      title="Include and Select"
      description="How to use the Include and Select features of Teyvat.Dev API"
    >
      <h1 className="font-semibold">Include and Select</h1>
      <p>
        Teyat.Dev is at its core a relational database, this means plenty of
        entities are connected to eachother.
      </p>
      <p>
        To take advantage of this feature Teyvat.Dev uses the{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`include`}</code>{' '}
        and{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`select`}</code>{' '}
        variables.
      </p>
      <br />
      <h2 className="font-semibold mb-4">
        Include or Select, whats the difference?
      </h2>
      <p>
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`include`}</code>{' '}
        is a variable that contains an object of extra entities to{' '}
        <b>include</b> in the results, this variable <b>only</b> controls the
        addition of more data to the result.
      </p>
      <p>
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`select`}</code>{' '}
        is a variable that contains an object of entities to <b>select</b> out
        of the base results, this variable <b>also</b> controls the addition of
        more data to the result and can be used to "cull" data out of a result
        resulting in less data to download.
      </p>
      <br />
      <p>
        <b>Important</b> Both include and select cannot be used at the same
        time, only one can be used at one time.
      </p>
      <p>
        It is reccommended to use the{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`select`}</code>{' '}
        variable as it offers the most flexability of both "culling" and
        "adding" data to the results
      </p>
      <br />
      <h2 className="font-semibold mb-4">Include and Select in Rest</h2>
      <p>
        The select or include variables in REST are handled as Query Parameters
        and are represented as{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`?include="{"profile":true}"`}</code>{' '}
        or{' '}
        <code className="bg-primary-dark font-semibold rounded-md text-white p-1">{`?select="{"id":true,"profile":true}"`}</code>{' '}
        For a full cURL example please look at the examples at the bottom of
        this page
      </p>
      <br />
      <h2 className="font-semibold mb-4">Include and Select in GraphQL</h2>
      <p>
        There is no need to use these advanced variables with GraphQL as it
        provides this functionality nativly. See examples at the bottom of this
        page
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
'https://rest.teyvat.dev/characters?select={"id":true,"name":true,"profile":true}'
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
--data '{"query":"{ characters { id name profile { id } } }"}' -g`}
            </code>
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default IncludeAndSelect;
