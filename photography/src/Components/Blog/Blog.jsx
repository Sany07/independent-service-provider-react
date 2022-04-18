import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-24">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-gray-900 font-medium title-font tracking-wider text-lg">
              Difference between authorization and authentication
            </h1>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <p className="leading-relaxed text-lg">
              <p>
                1. In authentication process, users or persons are verified.
              </p>
              <p>
                2. In authorization in this process, users or persons are
                validated..
              </p>
              <p>
                3. In authentication it is done before the authorization
                process.
              </p>
              <p>
                4. In authorization this process is done after the
                authentication process.
              </p>
              <p>5. In authentication it needs usually user’s login details.</p>
              <p>
                6. In authorization it needs users privilege or security levels.
              </p>
            </p>
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-gray-900 font-medium title-font tracking-wider text-lg">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <p className="leading-relaxed text-lg">
              <p>
                Firebase Authentication makes it easier to use users signed-in
                without having to understand the complexities behind
                implementing your own authentication system. Firebase provides
                multiple ways of authenticating users easily. We can choose from
                email, password authentication, also can use Google, Facebook,
                Twitter, github etc for socail login. We can use phone number
                for phone verification and user authentication tools
              </p>
              <p></p>
            </p>
          </div>
        </div>{" "}
        <div className="container px-5 py-12 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-gray-900 font-medium title-font tracking-wider text-lg">
              There are many services which Firebase provides, Most useful of
              them are:
            </h1>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <p className="leading-relaxed text-lg">
              <p>Cloud Firestore </p>
              <p>Cloud Functions </p>
              <p>Authentication </p>
              <p>Hosting </p>
              <p>Google Analytics </p>
              <p>Predictions </p>
              <p>Dynamic Links </p>
              <p>Remote Config </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
