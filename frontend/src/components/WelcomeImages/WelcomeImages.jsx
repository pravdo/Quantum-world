const WelcomeImages = () => {
  return (
    <>
      <div className="bg-light  p-5 rounded-lg m-3">
        <h1 className="display-4">Quantum World Images</h1>
        <p className="lead">
          This is our module that retrieves photos using Unsplash API. You can
          use them in your projects without worrying about copyright claims. In
          order to start, enter any search term in the input field
        </p>
        <hr className="my-4"></hr>
        <p>Follow the link bellow to learn more</p>
        <a
          className="btn btn-primary btn-lg"
          href="https://unsplash.com"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          Learn more
        </a>
      </div>
    </>
  );
};

export default WelcomeImages;
