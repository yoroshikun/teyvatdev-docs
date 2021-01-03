import { useMemo } from 'react';

const Tag = ({ type }: { type: string }): React.ReactElement => {
  const typeToTag = useMemo(() => {
    switch (type) {
      case 'unimplemented':
        return {
          tag: type,
          description:
            'This entity is currently unimplemented and will not return data',
          color: 'bg-gray',
        };
      case 'beta':
        return {
          tag: type,
          description:
            'This entity is currently in beta, and is subject to change its schema from time to time',
          color: 'bg-primary-light',
        };
      default:
        return { tag: type, description: '' };
    }
  }, [type]);

  return (
    <div className="p-2">
      <div className="inline-flex items-center bg-white leading-none rounded p-2 shadow text-sm">
        <span
          className={`inline-flex text-white rounded h-6 px-3 justify-center items-center font-semibold ${typeToTag.color}`}
        >
          {typeToTag.tag}
        </span>
        <span className="inline-flex px-2">{typeToTag.description}</span>
      </div>
    </div>
  );
};

export default Tag;
