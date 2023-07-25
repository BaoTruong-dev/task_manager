import React from "react";

export const Login = () => {
  return (
    <section>
      <div className="flex relative justify-center lg:px-0 max-h-full md:px-12 overflow-hidden">
        <div className="bg-white hidden lg:block lg:flex-1 lg:relative sm:contents">
          <div
            className="w-full absolute bg-white h-full inset-0 object-cover"
            data-nimg="future"
            decoding="async"
            height={1866}
            loading="lazy"
            width={1664}
          >
            <video
              autoPlay
              className="bg-white absolute max-w-none min-h-full min-w-full w-auto z-10"
              loop
              muted
            >
              <source
                src="https://d33wubrfki0l68.cloudfront.net/c906151c5417ee08cea5c68bc4c8823316ba100c/3fe8e/images/desktopgradient.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col bg-white flex-1 h-screen lg:py-24 md:flex-none md:px-28 px-4 py-10 relative shadow-2xl sm:justify-center xl:py-36 z-10">
          <div className="w-full mx-auto lg:h-full max-w-md md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium leading-tight text-black">
                  <img
                    className="w-14"
                    src="https://spacedev.vn/images/LOGO-image-full.svg"
                    alt="Spacedev.vn"
                  />
                  Spacedev.vn
                </div>
                <h2 className="font-medium leading-tight text-black mt-6 text-xl">
                  Creat an account on Semplice
                </h2>
                <div className="py-3">
                  <span className="w-full mt-3 inline-flex relative z-0">
                    <button
                      className="text-sm font-medium bg-white border border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:z-10 hover:bg-slate-50 inline-flex items-center justify-center px-6 py-4 relative rounded-xl text-slate-700 w-full"
                      type="button"
                    >
                      <span>Register with</span>{" "}
                      <span className="ml-3">
                        <svg
                          fill="none"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          height={24}
                          width={24}
                        >
                          <path
                            d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
                            fill="#34A853"
                          />
                          <path
                            d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
                            fill="#EB4335"
                          />
                        </svg>
                      </span>
                    </button>
                  </span>
                  <div className="py-3 relative">
                    <div
                      className="flex items-center absolute inset-0"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="flex relative justify-center">
                      <span className="text-sm px-2 bg-white text-slate-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="https://submit-form.com/r4PIGvAB">
              <input
                type="text"
                name="hidden"
                autoComplete="false"
                style={{ display: "none" }}
              />{" "}
              <input type="hidden" name="_redirect" defaultValue="#" />
              <div className="space-y-6">
                <div>
                  <label
                    className="text-sm font-medium block mb-3 text-slate-600"
                    name="name"
                  >
                    User name or email Adress
                  </label>{" "}
                  <input
                    type="text"
                    className="w-full focus:outline-none border appearance-none bg-slate-100 block border-transparent focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-slate-400 px-3 py-2 rounded-md sm:text-sm text-accent-500"
                    placeholder="Type here..."
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="text-sm font-medium block mb-3 text-slate-600"
                    name="company"
                  >
                    Password
                  </label>{" "}
                  <input
                    type="password"
                    className="w-full focus:outline-none border appearance-none bg-slate-100 block border-transparent focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-slate-400 px-3 py-2 rounded-md sm:text-sm text-accent-500"
                    placeholder="Type password here..."
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="border-accent-500 accent-accent-500 focus:ring-accent-500 h-4 rounded text-accent-500 w-4"
                      id="remember-me"
                      name="remember-me"
                    />{" "}
                    <label
                      className="text-sm font-medium block leading-tight ml-2 text-black"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      className="font-medium hover:text-accent-500 text-accent-500"
                      href="#"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    className="text-white font-medium bg-accent-500 duration-200 focus-visible:outline-black focus-visible:ring-black focus:outline-none hover:bg-accent-100 hover:text-accent-500 inline-flex items-center justify-center px-6 rounded-xl text-center w-full py-4"
                    type="submit"
                  >
                    Submit your request
                  </button>
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight text-black">
                    Not a member?{" "}
                    <a
                      className="ml-3 hover:text-accent-400 text-accent-500"
                      href="/signup"
                    >
                      Sign up now
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login