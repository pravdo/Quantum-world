const WelcomeImages = () => {
  return (
    <>
      <div className="bg-light  p-5 rounded-lg m-3">
        <h1 className="display-4">Quantum World Images</h1>
        <p className="lead">
          This is a simple app that retrieves photos using Unsplash API. In
          order to start, enter any search term in the input field
        </p>
        <hr className="my-4"></hr>
        <p>Follow the link bellow to learn more</p>
        <a
          class="btn btn-primary btn-lg"
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
