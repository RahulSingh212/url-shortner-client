const TabSection = ({ heading, value }) => {
  return (
    <div
      className={`relative w-full flex flex-row px-3 py-2 rounded-md bg-gray-200 space-x-2 mt-1`}
    >
      <div className={`relative w-full flex flex-col`}>
        <span className={`relative text-black font-mono font-semibold`}>
          {heading}:
        </span>
        <span
          className={`relative text-black overflow-hidden whitespace-nowrap font-thin`}
        >
          {value}
        </span>
      </div>
      <div
        className={`relative flex flex-row space-x-2 align-middle items-center`}
      >
        <button
          className={`cursor-pointer hover:shadow-md`}
          onClick={async () => {
            await navigator.clipboard.writeText(value);
            alert("Url copied to clipboard!");
          }}
        >
          <img
            src="/images/copy-icon.svg"
            alt="icon"
            className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
          />
        </button>
        <a
          href={value}
          target="_blank"
          className={`cursor-pointer hover:shadow-md`}
        >
          <img
            src="/images/url-link-icon.svg"
            alt="icon"
            className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
          />
        </a>
      </div>
    </div>
  );
};


export default TabSection;