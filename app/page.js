'use client'
import { useEffect, useRef } from "react";
import { CardComponent } from "./components/Card";
import { SliderFlip } from "./components/SliderFlip";
import { SliderCards } from "./components/SliderCards";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = containerRef.current.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="flex flex-col  justify-start items-center w-screen ">
      <div className="flex items-center mt-10 flex-col">
        <p className="font-sans text-3xl md:text-5xl text-slate-200 ">
          Diego Ison
        </p>

        <p className="font-sans text-md md:text-3xl text-slate-200 ml-2 ">
          Arte y Precisión en la Edición de Video
        </p>
      </div>
      <div className="w-screen  flex justify-center">
        <p className="text-slate-200 text-center  md:text-md text-xs my-10 w font-light mx-2 md:mx-0">
          LOS PEQUEÑOS DETALLES <span className="font-semibold">IMPORTAN</span>
        </p>
      </div>
      <div className="flex justify-center">
        <div
          className="md:grid md:grid-cols-3 flex w-screen  justify-center  md:w-fit "
          style={{ flexWrap: "wrap" }}
          ref={containerRef}
        >
          <CardComponent
            icon={
              <svg
                fill="#ffffff"
                height={50}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>magic</title>
                  <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
                </g>
              </svg>
            }
            title={"Efectos Visuales Innovadores"}
            subtitle={"  Integración de VFX para realzar la narrativa visual."}
          />
          <CardComponent
            icon={
              <svg
                version="1.1"
                height={50}
                id="_x32_"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#f5f5f7"
                stroke="#f5f5f7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M422.002,6.017C315.33,20.736,213.205,220.861,162.939,313.486c-12.641,23.297,9.422,35.406,22.422,13.125 c9.344-16.016,32.109-62.5,44.422-60.094c58.797,9.797,90.156-28.547,67.891-52.672c74.797,1.531,111.875-39.609,90.656-64.609 c22.313,7.063,55.078,6.031,83.766-9.609C533.33,106.22,529.627-8.827,422.002,6.017z"></path>
                    <path d="M409.189,207.048c-9.719,9.141-27.031,22.141-41.547,27.813v207.062c-0.016,4.609-1.781,8.531-4.781,11.563 c-3.031,3-6.953,4.766-11.547,4.781H65.361c-4.594-0.016-8.531-1.781-11.563-4.781c-3-3.031-4.766-6.953-4.781-11.563V155.986 c0.016-4.594,1.781-8.531,4.781-11.563c3.031-3,6.969-4.766,11.563-4.781h160.391c11.234-17.125,22.734-33.578,34.484-49.016 H65.361c-17.969-0.016-34.469,7.344-46.219,19.141c-11.781,11.75-19.156,28.25-19.141,46.219v285.937 c-0.016,17.969,7.359,34.469,19.141,46.234c11.75,11.781,28.25,19.156,46.219,19.141h285.953 c17.953,0.016,34.453-7.359,46.219-19.141c11.781-11.766,19.156-28.266,19.141-46.234V206.017 C416.674,206.017,414.002,202.517,409.189,207.048z"></path>
                  </g>
                </g>
              </svg>
            }
            title={"Edición Creativa"}
            subtitle={
              "                      Dominio en narrativa visual y montaje emocional."
            }
          />
          <CardComponent
            icon={
              <svg
                height={50}
                version="1.1"
                id="_x32_"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#f5f5f7"
                stroke="#f5f5f7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M438.024,210.133c0,7.488,6.08,13.551,13.551,13.551c7.488,0,13.569-6.063,13.569-13.551 c0-7.479-6.081-13.552-13.569-13.552C444.104,196.581,438.024,202.654,438.024,210.133z"></path>
                    <path d="M400.097,376.503c-5.994,0-10.842,4.856-10.842,10.85c0,5.986,4.848,10.832,10.842,10.832 c5.994,0,10.841-4.847,10.841-10.832C410.938,381.359,406.091,376.503,400.097,376.503z"></path>
                    <path d="M382.758,415.376c-12.284,0-22.238,9.956-22.238,22.238c0,12.274,9.955,22.229,22.238,22.229 c12.283,0,22.238-9.955,22.238-22.229C404.997,425.332,395.041,415.376,382.758,415.376z"></path>
                    <circle cx="137.251" cy="426.904" r="16.8"></circle>
                    <path d="M94.425,359.164c-4.778,0-8.669,3.874-8.669,8.678c0,4.778,3.892,8.66,8.669,8.66 c4.796,0,8.67-3.883,8.67-8.66C103.094,363.038,99.22,359.164,94.425,359.164z"></path>
                    <path d="M54.865,151.063c6.29,0,11.38-5.1,11.38-11.389c0-6.281-5.09-11.38-11.38-11.38 c-6.289,0-11.38,5.099-11.38,11.38C43.485,145.963,48.576,151.063,54.865,151.063z"></path>
                    <path d="M165.97,97.952c8.374,0,15.166-6.793,15.166-15.185c0-8.365-6.792-15.158-15.166-15.158 s-15.168,6.794-15.168,15.158C150.802,91.158,157.596,97.952,165.97,97.952z"></path>
                    <path d="M450.775,300.632c-47.586-16.887-56.968-10.485-80.214-32.515c-5.56-5.255-5.438-22.49,25.47-18.425 c15.497,2.042,26.008-6.506,26.008-18.702c0-8.131-9.799-19.433-24.393-13.821c-21.126,8.131-34.834-1.094-37.388-11.38 c-3.25-13.004,0.434-27.832,54.814-54.996c66.646-33.332,28.423-93.983-23.924-36.859c-23.194,25.296-34.14,35.764-49.584,43.895 c-13.864,7.288-30.49-0.27-17.895-17.069c4.882-6.507,13.17-11.527,15.445-19.511c3.249-11.38-6.324-21.952-14.628-21.952 c-8.304,0-18.694,4.874-21.943,17.07c-4.882,22.359-17.322,21.24-23.194,14.785c-11.241-12.318-7.193-26.686-5.264-48.924 c2.276-26.121,17.738-86.443-29.709-81.995c-22.88,2.146-29.639,23.715-22.238,62.267c9.208,47.856-4.725,81.257-19.597,88.007 c-17.878,8.13-26.946,5.046-65.029-21.126c-20.24-13.926-42.584-1.703-47.152,14.628c-4.031,14.385,7.332,31.768,24.393,37.396 c26.286,8.678,37.944,10.693,50.14,17.33c11.918,6.507,13.412,22.282,1.511,36.554c-11.918,14.282-42.705,2.468-88.224-0.782 c-78.685-5.611-60.999,81.43,12.996,55.831c42.27-14.637,60.147-11.389,67.479-2.441c10.112,12.344,3.162,29.031-16.54,40.915 c-62.858,37.944,7.61,85.078,33.618,32.515c10.876-21.961,23.385-28.71,35.756-23.846c10.094,3.979,23.02,39.204,8.409,86.72 C206.885,466.473,207.771,512,238.33,512c28.563,0,33.028-42.539,28.164-88.875c-1.808-17.339-0.47-44.207,13.012-50.948 c10.842-5.421,27.781-11.458,39.283,12.457c10.58,21.951,33.34,18.693,42.287,6.506c6.532-8.921,9.851-28.71-16.157-38.969 c-30.995-12.249-19.615-45.58,3.961-42.323c26.026,3.588,43.868,13.17,74.794,39.569 C466.829,386.233,522.234,325.989,450.775,300.632z"></path>
                  </g>
                </g>
              </svg>
            }
            title={"Corrección de Color Avanzada"}
            subtitle={"Ajustes de color para tonos de cine."}
          />

          <CardComponent
            title={"Copywriting"}
            subtitle={"Contenido impactante y original."}
            icon={
              <svg
                height={40}
                fill="#ffffff"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M18.257,6.671l-9.679,9.679c-0.137,0.138 -0.232,0.312 -0.271,0.502l-1.487,7.085c-0.069,0.329 0.032,0.671 0.269,0.909c0.236,0.239 0.577,0.343 0.906,0.277l7.143,-1.428c0.194,-0.039 0.372,-0.134 0.511,-0.274l9.679,-9.679l-7.071,-7.071Zm1.414,-1.414l7.071,7.071l1.793,-1.792c1.953,-1.953 1.953,-5.119 0,-7.072c0,0 0,0 0,0c-0.938,-0.937 -2.209,-1.464 -3.535,-1.464c-1.327,0 -2.598,0.527 -3.536,1.464l-1.793,1.793Z"></path>
                  <path d="M3.5,30l24,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5l-24,0c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"></path>
                </g>
              </svg>
            }
          />
          <CardComponent
            title={"Creación de Portadas"}
            subtitle={"Diseños atractivos y relevantes."}
            icon={
              <svg
                fill="#ffffff"
                height={50}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M4,29.987l24,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.827 -0.672,-1.5 -1.5,-1.5l-24,0c-0.828,0 -1.5,0.673 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"></path>
                  <path d="M9.138,22.244c1.323,0.328 2.775,0.118 3.995,-0.702l9.873,-6.712c0.458,-0.308 0.58,-0.929 0.273,-1.388l-6.717,-10c-0.308,-0.458 -0.929,-0.58 -1.388,-0.272c0,-0 -6.027,4.048 -9.961,6.691c-2.293,1.539 -2.903,4.646 -1.363,6.938c0.725,1.08 1.53,2.279 2.256,3.359c0.738,1.099 1.836,1.812 3.032,2.086Zm11.448,-9.223l-15.418,0c0.207,-0.591 0.599,-1.124 1.16,-1.5c-0,-0 9.131,-6.133 9.131,-6.133l5.127,7.633Z"></path>
                  <path d="M26.339,15.455c-0.185,-0.284 -0.5,-0.455 -0.839,-0.455c-0.339,-0 -0.654,0.171 -0.839,0.455c0,0 -1.274,1.965 -2.039,3.732c-0.379,0.876 -0.622,1.717 -0.622,2.313c-0,1.932 1.568,3.5 3.5,3.5c1.932,0 3.5,-1.568 3.5,-3.5c-0,-0.596 -0.243,-1.437 -0.622,-2.313c-0.765,-1.767 -2.039,-3.732 -2.039,-3.732Z"></path>
                </g>
              </svg>
            }
          />
          <CardComponent
            title={"Edición de Audio Precisa"}
            subtitle={"Animaciones impactantes y visuales dinámicos."}
            icon={
              <svg
                height={50}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 11V13M6 8V16M9 10V14M12 7V17M15 4V20M18 9V15M21 11V13"
                    stroke="#f5f5f7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            }
          />
        </div>
      </div>
      <div className="my-10   w-screen flex md:grid md:grid-cols-3 flex-col justify-center items-center max-w-screen  ">
        <SliderFlip />
        <div className="mt-10">
          <div className=" flex  flex-col items-center justify-center">
            <p className="text-center text-2xl font-sans text-slate-200 font-bold mb-10  ">
              Timeline de Trabajo
            </p>
            <div className=" w-6/12">
              <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Consulta Inicial
                  </h3>

                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Reunión inicial con el cliente para discutir objetivos y
                    expectativas.
                  </p>
                </li>

                <li class="ms-6 mb-10">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Diseño y Desarrollo
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Comienzo del diseño y desarrollo del proyecto según los
                    requisitos acordados.
                  </p>
                </li>
                <li class="ms-6 mb-10">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Ajustes y Mejoras
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Realización de ajustes basados en el feedback del cliente.
                  </p>
                </li>
                <li class="ms-6 mb-10">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Entrega Final
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Entrega del producto final
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <SliderCards />
      </div>
      <div className=" w-screen flex flex-col justify-center items-center">
        <p className="text-2xl md:text-4xl text-slate-200  text-center ">
          ¿Listo para Llevar Tu Proyecto al Siguiente Nivel?
        </p>
        <p className="mt-5 text-md text-slate-200 font-light md:text-xl text-center">
          {" "}
          Agenda una Llamada Consultiva Gratuita Hoy Mismo{" "}
        </p>
      </div>
      <div className="mb-10  flex justify-center flex-col text-center w-screen  ">
        <div className="flex justify-center mt-10">
          <button class="animated-button">
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>

            <span class="text">Agendar llamada</span>

            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}