import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface Props {
  title?: string;
  description?: string;
  entities?: string[];
  noindex?: string;
  children: React.ReactNode;
}

const Layout = ({
  title,
  description,
  entities,
  noindex,
  children,
}: Props): React.ReactElement => {
  const router = useRouter();

  const navigation = useMemo(
    () => ({
      ['Getting Started']: ['Welcome', 'Quickstart'],
      ['Entities']: entities || [],
      ['Advanced']: ['Pagination', 'Include and Select'],
    }),
    [entities],
  );

  return (
    <>
      <Head>
        <title>{`Teyvat.Dev Documentation - Genshin Impact API - ${
          title || 'Docs'
        }}`}</title>
        <meta
          name="description"
          content={description || 'Documentation for Teyvat.Dev '}
        />
        <meta
          name="robots"
          content={noindex ? `noindex, nofollow` : `index, follow`}
        />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 lg:h-screen bg-background overflow-y-auto">
          <div className="flex justify-center bg-primary p-5">
            <div className="text-3xl text-white font-bold mr-5 mt-3">
              Teyvat.Dev
            </div>
            <Image
              src="/white-slime.svg"
              alt="Teyvat.Dev Logo"
              height={64}
              width={64}
            />
          </div>
          <div className="p-4 text-white">
            {Object.entries(navigation).map(([key, value]) => (
              <>
                <Link href={`/${key.toLowerCase().replace(' ', '-')}`}>
                  <div
                    className={`p-2 mt-2 bg-primary-dark font-semibold rounded-md bg-opacity-40 cursor-pointer hover:bg-opacity-80 transition-all duration-200 ${
                      router.pathname
                        .toLowerCase()
                        .includes(key.toLowerCase().replace(' ', '-'))
                        ? 'bg-opacity-80'
                        : ''
                    }`}
                  >
                    {key}
                  </div>
                </Link>
                <div
                  className={`${
                    router.pathname
                      .toLowerCase()
                      .includes(key.toLowerCase().replace(' ', '-'))
                      ? ''
                      : 'hidden'
                  }`}
                >
                  {value.map((entity) => (
                    <Link
                      href={`/${key
                        .toLowerCase()
                        .replace(' ', '-')}/${entity
                        .replace(' ', '-')
                        .replace(' ', '-')}`}
                    >
                      <div
                        className={`p-2 mt-2 ml-4 bg-primary-dark font-semibold rounded-md bg-opacity-40 cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
                      >
                        {entity}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-4/5 overflow-auto lg:h-screen">
          <div className="flex max-w-6xl mx-auto justify-between">
            <div className="font-semibold px-2 py-2 my-2 text-gray">
              Search [Unimplemented]
            </div>
            <div className="flex justify-left bg-primary p-2">
              <div className="flex items-center pr-7 pl-2">
                <div className="font-semibold text-white">v1.4.5</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a
                  href="https://discord.com/invite/AKtCEm7QEn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/icons/discord.png"
                    alt="discord"
                    height={32}
                    width={32}
                  />
                </a>
                <a
                  href="https://github.com/yoroshikun/teyvatdev-docs"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/icons/github.png"
                    alt="github"
                    height={32}
                    width={32}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-6xl px-8 mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
