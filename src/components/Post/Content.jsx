const Content = ({ tweet }) => {
  return (
    <div>
      {tweet.textContent && <p>{tweet.textContent}</p>}
      {tweet.textContent && (
        <img
          src={tweet.imageContent}
          className="my-2 pr-8 w-full rounded-lg object-cover max-[400px]"
        />
      )}
    </div>
  );
};

export default Content;
