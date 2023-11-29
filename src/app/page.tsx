import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen px-4 pt-4 md:px-6 md:pt-6 pb-0 ">
      {/* <div className="absolute inset-0 min-h-screen bg-dhrmkAstro bg-repeat bg-contain animate-scrollReverseX -z-10"></div> */}
      <div className="max-w-[900px] mx-auto flex">
        {/* <div className="hidden md:flex group relative flex-col h-screen w-fit max-w-fit rounded-xl overflow-hidden mx-4">
          <div className="absolute inset-0 h-full w-full bg-dhrmk bg-repeat-y bg-contain animate-scrollForever group-hover:animate-scrollReverse" />
          <div className="flex z-10 h-1/2 items-center mx-auto">
            <div
              className="flex flex-col text-5xl group-hover:text-7xl text-center font-japan"
              lang="zh-Hans"
            >
              {"分揺豆".split("").map((letter, index) => (
                <p key={index}>{letter}</p>
              ))}
            </div>
          </div>
          <div className="flex items-end h-1/2  z-10">
            <Image src="/dhrmk.png" height={150} width={250} alt="me"></Image>
          </div>
        </div> */}
        <div className="relative flex w-full flex-col min-h-screen space-y-2 lg:space-y-6 justify-between mx-auto">
          {/*first card*/}
          <div className="flex relative flex w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-dhrmk bg-repeat-y animate-scrollForever " />

            <div className="flex group w-3/4 mx-auto md:mx-0">
              <Image
                height={400}
                width={400}
                className="z-10 mx-auto md:mx-2 md:translate-x-24 pointer-events-none group-hover:translate-x-0 transition ease-out delay-150"
                src="/dhrmk-astro.png"
                alt="me"
              ></Image>
              <h1 className="hidden md:block h-fit w-full text-right my-auto text-3xl md:text-6xl  lg:text-7xl  text-white z-10 transition-transform ease-out delay-200 group-hover:scale-150">
                dhrmk
              </h1>
            </div>
          </div>
          {/*second card #ff66aa*/}
          <div className="w-full bg-[#8866ee] h-fit rounded-xl overflow-hidden ">
            <div className="m-2 px-3 lg:px-6 py-2">
              <h1 className="text-xl lg:text-3xl text-center pb-2">
                I build full stack applications
              </h1>
              <h3 className="text-sm lg:text-md text-center tracking-wide">
                well mostly web applications and I like to contribute to
                opensource when I have free time so,<br></br>
                <span className="font-bold">
                  {"Let's connect and collaborate on the next big thing!"}
                </span>
              </h3>
            </div>
            <div className="flex justify-between bg-[#6644cc] p-2 lg:px-4">
              <a href="https://github.com/dhrmkj">
                <div className="m-2 h-8 w-8 hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8 0 512 512"
                    fill="currentColor"
                    data-bs-toggle="tooltip"
                    data-bss-tooltip=""
                    aria-label="@dhrmkj"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dharmik-jadav-064421248/">
                <div
                  className="m-2 h-8 w-8 hover:scale-125"
                  aria-label="linkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </div>
              </a>

              <a href="mailto:dhrmkjdv@gmail.com">
                <div className="m-2 h-8 w-8 hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    data-bs-toggle="tooltip"
                    data-bss-tooltip=""
                    data-bs-placement="right"
                    aria-label="dhrmkjdv@gmail.com"
                  >
                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://discord.com/users/1103331985239322635">
                <div className="m-2 h-8 w-8 hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -64 640 640"
                    fill="currentColor"
                    data-bs-toggle="tooltip"
                    data-bss-tooltip=""
                    aria-label="cagnusmarlsen_"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/Lunch__enjoyer">
                <div className="m-2 h-8 w-8 hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    data-bs-toggle="tooltip"
                    data-bss-tooltip=""
                    data-bs-placement="left"
                    aria-label="@Lunch__enjoyer"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/*"third card"*/}
          <div className="bg-[#44aadd] w-full h-fit rounded-xl overflow-hidden">
            <div className=" m-2 px-3 lg:px-6 py-2">
              <h1 className="text-xl lg:text-3xl text-center"> Skills</h1>
            </div>

            <div className="flex bg-[#2299bb] justify-between p-2 lg:px-4">
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-64 0 512 512"
                  fill="currentColor"
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  data-bs-placement="left"
                  aria-label="HTML5"
                >
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-64 0 512 512"
                  fill="currentColor"
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  aria-label="CSS3"
                >
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  fill="currentColor"
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  aria-label="JavaScript"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  fill="currentColor"
                  data-bs-toggle="tooltip"
                  data-bss-tooltip=""
                  aria-label="NodeJS"
                >
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  viewBox="0 0 32 32"
                  version="1.1"
                  id="svg28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs id="defs32" />

                  <path
                    fill="white"
                    d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
                    id="path26"
                  />
                  <path
                    fill="white"
                    d="M 14.885224,50.47605 C 11.854077,50.237603 8.9278155,49.227591 6.6991237,47.650582 3.8624502,45.643369 1.9349983,42.678262 0.97419024,38.843596 0.83522549,38.288976 0.63457782,37.293455 0.52830655,36.631327 0.42203528,35.9692 0.26670241,35.097708 0.18312239,34.694681 0.0462719,34.03478 0.03115871,33.81099 0.03115871,32.444467 V 30.92703 L 0.62101892,28.033655 C 1.2196831,25.097095 1.4042913,24.413269 1.930768,23.182084 3.3962303,19.755046 6.0032451,16.919832 9.2600927,15.211202 12.423085,13.55181 16.074008,13.049014 19.454655,13.807231 c 2.70153,0.605904 5.27315,2.040346 7.310678,4.077874 2.113345,2.113345 3.436978,4.586797 4.135188,7.727358 0.357143,1.606434 0.472751,2.714937 0.5183,4.969681 l 0.03808,1.884968 -14.26399,0.01571 -14.2639908,0.01571 0.012043,1.184032 c 0.055015,5.408855 2.2007498,9.930364 5.8859108,12.402839 0.5626934,0.377526 1.660589,0.950289 2.327947,1.214472 0.702656,0.278155 2.016197,0.603342 2.913649,0.721317 1.056515,0.138885 3.128879,0.09276 4.221697,-0.09395 3.592627,-0.613832 5.914173,-1.888065 7.673132,-4.211569 0.792543,-1.046914 1.375179,-2.209108 1.952611,-3.894913 0.340636,-0.99448 0.542162,-1.378875 0.870037,-1.659523 0.267283,-0.228784 0.732452,-0.397541 1.090993,-0.395797 0.282916,0.0014 1.069256,0.166535 1.142736,0.240014 0.07675,0.07675 -0.387285,1.926897 -0.740088,2.950797 -0.590466,1.713641 -1.612684,3.531816 -2.655048,4.722421 -2.27112,2.594108 -5.463936,4.212337 -9.2776,4.702207 -0.930505,0.119525 -2.576762,0.164782 -3.461715,0.09517 z m 13.87427,-20.806351 c 0,-1.417788 -0.410059,-3.616803 -0.969803,-5.200747 -0.308849,-0.873969 -0.98852,-2.261294 -1.471372,-3.003323 -2.003718,-3.079239 -5.055674,-5.012035 -8.510207,-5.389494 -1.104476,-0.120681 -2.962599,-0.05091 -4.022017,0.151022 C 9.5593379,17.032806 6.2185105,19.689015 4.4317568,23.66456 3.7008106,25.290923 3.1620769,27.426911 3.05242,29.133398 3.032598,29.44187 3.002441,29.785394 2.985405,29.896787 L 2.95443,30.099318 h 12.902532 12.902532 z"
                    id="path207"
                    transform="scale(0.5)"
                  />
                  <path
                    fill="white"
                    d="m 33.776047,49.752034 c -0.06855,-0.01382 -0.282564,-0.05576 -0.475588,-0.0932 l -0.350953,-0.06806 2.838358,-3.809992 c 1.561098,-2.095495 4.628552,-6.21258 6.816565,-9.149077 2.188013,-2.936498 3.992966,-5.377554 4.011009,-5.424571 0.01918,-0.04997 -2.609305,-3.526538 -6.327213,-8.368701 -5.787793,-7.537959 -6.34793,-8.287688 -6.225676,-8.332913 0.07389,-0.02733 0.460294,-0.08117 0.858681,-0.119636 1.350927,-0.130443 2.322925,0.17292 3.178543,0.992034 0.318726,0.305128 1.782817,2.238106 5.368279,7.087517 2.711516,3.667381 4.949127,6.673722 4.972469,6.680758 0.02334,0.007 2.257824,-2.948832 4.965516,-6.568595 2.707692,-3.619764 5.114385,-6.785723 5.348206,-7.035466 0.656361,-0.701055 1.216882,-1.010906 2.077417,-1.148377 0.45214,-0.07223 1.381504,0.0081 1.718878,0.148572 l 0.170791,0.07111 -2.445377,3.243137 c -1.344958,1.783726 -4.001755,5.267329 -5.903995,7.741341 -1.902239,2.474012 -3.53717,4.647285 -3.633178,4.829493 -0.251797,0.477871 -0.247545,0.980798 0.0127,1.501769 0.105983,0.212165 3.075976,4.210966 6.671276,8.982215 3.564138,4.729893 6.481043,8.617663 6.482012,8.639488 0.0038,0.08539 -0.87272,0.207297 -1.493857,0.207773 -1.071405,8.22e-4 -1.896024,-0.346434 -2.645413,-1.114004 -0.17468,-0.178918 -2.362139,-3.155873 -4.861022,-6.615455 -5.340355,-7.393466 -6.453245,-8.902257 -6.51574,-8.833655 -0.02546,0.02795 -2.522008,3.401929 -5.54789,7.497742 -3.025882,4.095813 -5.616272,7.58093 -5.756422,7.744703 -0.532246,0.621961 -1.272429,1.092174 -1.982933,1.25969 -0.362534,0.08547 -1.034493,0.113034 -1.325439,0.05436 z"
                    id="path209"
                    transform="scale(0.5)"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  fill="none"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#3178c6" height="512" rx="256" width="512" />
                  <path
                    clip-rule="evenodd"
                    d="m278.939 319.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  viewBox="0 0 256 288"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#5C8DBC"
                  />
                  <path
                    d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
                    fill="#1A4674"
                  />
                  <path
                    d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
                    fill="#1A4674"
                  />
                  <path
                    d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#1B598E"
                  />
                  <path
                    d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
                    fill="#FFF"
                  />
                  <path
                    d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 m-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                >
                  <path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-auto w-full bg-[#ff66aa]  rounded-t-xl overflow-hidden ">
            <div className="mt-2 px-3 lg:px-6 py-2">
              <h1 className="text-xl lg:text-3xl text-center pb-2">
                Built really fast 🚀🚀🚀
              </h1>
              <h4 className="text-sm text-center">
                inspired by
                <a href="https://astolfo.co/#" className="text-blue-800">
                  embed
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
