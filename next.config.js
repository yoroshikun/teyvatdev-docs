module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/getting-started/Welcome',
        permanent: true,
      },
      {
        source: '/getting-started',
        destination: '/getting-started/Welcome',
        permanent: true,
      },
      {
        source: '/entities',
        destination: '/entities/Character',
        permanent: true,
      },
      {
        source: '/advanced',
        destination: '/advanced/Pagination',
        permanent: true,
      },
    ];
  },
};
