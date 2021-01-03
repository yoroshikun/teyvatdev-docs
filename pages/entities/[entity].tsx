import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import Examples from '../../components/Examples';

import Layout from '../../components/Layout';
import MiniTag from '../../components/MiniTag';
import Tag from '../../components/Tag';

export const Entity = ({
  defaults,
  entity,
  entities,
  entityData,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  return (
    <Layout title={entity} description={undefined} entities={entities}>
      <Tag type={entityData.note} />
      <h1 className="font-semibold">{entity}</h1>
      <div className="flex mt-4">
        {entityData.endpoints.map((endpoint) => (
          <MiniTag text={`/${endpoint}`} />
        ))}
      </div>
      <Examples endpoint={entityData.endpoints[0]} />
      <table className="table-auto mt-4 w-full">
        <thead className="text-left border bg-primary-dark text-white">
          <tr>
            <th className="p-2">Value</th>
            <th className="p-2">Description</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {entityData.values.map((item, index) => (
            <tr
              className={`bg-primary ${
                index % 2 === 1 ? 'bg-opacity-10' : 'bg-opacity-20'
              }`}
            >
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="font-semibold mt-4">Defaults</h1>
      <table className="table-auto my-4 w-full">
        <thead className="text-left border bg-primary-dark text-white">
          <tr>
            <th className="p-2">Value</th>
            <th className="p-2">Description</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {defaults.values.map((item, index) => (
            <tr
              className={`bg-primary ${
                index % 2 === 1 ? 'bg-opacity-10' : 'bg-opacity-20'
              }`}
            >
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

interface Props {
  entity: string;
  entities: string[];
  entityData: {
    note: string;
    endpoints: string[];
    values: { name: string; description: string; type: string }[];
  };
  defaults: {
    note: string;
    endpoints: string[];
    values: { name: string; description: string; type: string }[];
  };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const entities = (await (
    await fetch('https://resources.teyvat.dev/docs/entities.json')
  ).json()) as string[];

  const defaults = await (
    await fetch('https://resources.teyvat.dev/docs/entities/Defaults.json')
  ).json();

  let entityData = await (
    await fetch(
      `https://resources.teyvat.dev/docs/entities/${params.entity}.json`,
    )
  ).json();

  entityData = {
    ...entityData,
    ...{ endpoints: JSON.parse(JSON.parse(entityData.endpoints)) }, // Something is odd here
  } as Props['entityData'];

  return {
    props: { entity: params.entity as string, entities, entityData, defaults },
    revalidate: 15 * 60,
  };
};

export const getStaticPaths = async (ctx) => {
  const res = await fetch('https://resources.teyvat.dev/docs/entities.json');
  const entities = (await res.json()) as string[];

  return {
    paths: entities.map((entity) => ({ params: { entity } })),
    fallback: false,
  };
};

export default Entity;
