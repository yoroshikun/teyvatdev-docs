const Notice = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): React.ReactElement => {
  return (
    <div
      className="bg-error bg-opacity-30 border-l-4 border-error text-error p-4"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Notice;
