const MiniTag = ({ text }: { text: string }): React.ReactElement => {
  return (
    <div
      className={`text-white rounded h-6 px-3 justify-center items-center font-semibold bg-primary bg-opacity-60 mr-2`}
    >
      {text}
    </div>
  );
};

export default MiniTag;
