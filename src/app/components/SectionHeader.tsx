type SectionHeaderTypes = {
  title: string;
  caption: string;
  mini?: boolean;
};

const SectionHeader = ({ title, caption, mini }: SectionHeaderTypes) => {
  return (
    <>
      <h2
        className={`font-body  ${
          !mini ? "lg:text-3xl text-2xl" : "text-lg"
        } font-medium text-blue-100`}
      >
        {title}
      </h2>
      <p
        className={`font-body ${
          !mini ? `text-base` : `text-sm`
        } font-normal text-blue-300 mb-1`}
      >
        {caption}
      </p>
    </>
  );
};

export default SectionHeader;
