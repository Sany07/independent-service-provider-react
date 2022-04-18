import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-24">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Blog 1
                </span>
                <span className="mt-1 text-gray-500 text-sm">18 Apr 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Difference between authorization and authentication
                </h2>
                <p className="leading-relaxed">
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
                  <p>
                    5. In authentication it needs usually user’s login details.
                  </p>
                  <p>
                    6. In authorization it needs users privilege or security
                    levels.
                  </p>
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Blog
                </span>
                <span className="mt-1 text-gray-500 text-sm">18 Apr 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </h2>
                <p className="leading-relaxed">
                  Firebase Authentication makes it easier to use users signed-in
                  without having to understand the complexities behind
                  implementing your own authentication system. Firebase provides
                  multiple ways of authenticating users easily. We can choose
                  from email, password authentication, also can use Google,
                  Facebook, Twitter, github etc for socail login. We can use
                  phone number for phone verification and user authentication
                  tools
                  <p>
                    5. In authentication it needs usually user’s login details.
                  </p>
                  <p>
                    6. In authorization it needs users privilege or security
                    levels.
                  </p>
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Blog 3
                </span>
                <span className="text-sm text-gray-500">18 Apr 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  There are many services which Firebase provides, Most useful
                  of them are:
                </h2>
                <p className="leading-relaxed">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
