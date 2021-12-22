import React, { useState } from "react";
import Communication from "./Communication";
import FacebbokAdd from "./FacebbokAdd";
import GoogleAdd from "./GoogleAdd";

export default function PannelClient() {
  const [target, setTarget] = useState(1);

  const openCom = () => setTarget(1);
  const openFace = () => setTarget(2);
  const openGoogle = () => setTarget(3);

  let component = "";
  if (target === 1) {
    component = <Communication />;
  }
  if (target === 2) {
    component = <FacebbokAdd />;
  }
  if (target === 3) {
    component = <GoogleAdd />;
  }

  return (
    <>
      <main class="mt-10">
        <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-purple-500 flex items-center">
          <div class="grid grid-cols-12 gap-6 mt-5">
            <button
              class="transform  hover:scale-105 text-left text-gray-800 hover:text-white hover:bg-black  transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
              onClick={openCom}
              type="button"
            >
              <div class="p-5">
                <div class="flex justify-between">
                  <img
                    src="https://img.icons8.com/external-sbts2018-blue-sbts2018/58/000000/external-comment-social-media-basic-1-sbts2018-blue-sbts2018.png"
                    class="h-8 w-8"
                  />
                  <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                    <span class="flex items-center">30%</span>
                  </div>
                </div>
                <div class="ml-2 w-full flex-1">
                  <div>
                    <div class="mt-3 text-3xl font-bold leading-8">
                      Commentaires
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              class="transform text-left text-gray-800 hover:text-white hover:bg-black  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
              onClick={openFace}
              type="button"
            >
              <div class="p-5">
                <div class="flex justify-between">
                  <img
                    src="https://img.icons8.com/plasticine/100/000000/facebook.png"
                    class="h-8 w-8"
                  />
                  <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                    <span class="flex items-center">30%</span>
                  </div>
                </div>
                <div class="ml-2 w-full flex-1">
                  <div>
                    <div class="mt-3 text-3xl font-bold leading-8">
                      Facebook
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              class="transform  hover:scale-105 transition duration-300 text-left text-gray-800 hover:text-white hover:bg-black  shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
              onClick={openGoogle}
              type="button"
            >
              <div class="p-5">
                <div class="flex justify-between">
                  <img
                    src="https://img.icons8.com/color-glass/48/000000/google-logo.png"
                    class="h-8 w-8"
                  />

                  <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                    <span class="flex items-center">30%</span>
                  </div>
                </div>
                <div class="ml-2 w-full flex-1">
                  <div>
                    <div class="mt-3 text-3xl font-bold leading-8">Google</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div class="grid grid-cols-12 gap-6">
            <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
              <div class="col-span-12 mt-8">
                {component}
                <div class="flex items-center h-10 intro-y">
                  <h2 class="mr-5 text-lg font-medium truncate text-purple-500 font-bold">
                    Commentaires
                  </h2>
                </div>
                <div class="w-full px-5 flex flex-col justify-between">
                  <div class="flex flex-col mt-5">
                    <div class="flex justify-end mb-4">
                      <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        Welcome to group everyone !
                      </div>
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                    <div class="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                      </div>
                    </div>
                    <div class="flex justify-end mb-4">
                      <div>
                        <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magnam, repudiandae.
                        </div>

                        <div class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis, reiciendis!
                        </div>
                      </div>
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                    <div class="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                        happy holiday guys!
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                      <div class="bg-white p-4 shadow-lg rounded-lg">
                        <h1 class="font-bold text-base">Table</h1>
                        <div class="mt-4">
                          <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto">
                              <div class="py-2 align-middle inline-block min-w-full">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                  <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                      <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">
                                              Votre commentaire
                                            </span>
                                          </div>
                                        </th>

                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">STATUS</span>
                                          </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">ACTION</span>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                      <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <p class="text-xs text-gray-400">
                                            J'aimerais blabla
                                          </p>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <div class="flex text-green-500">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="w-5 h-5 mr-1"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                              />
                                            </svg>
                                            <p>Reçu</p>
                                          </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <div class="flex space-x-4">
                                            <a
                                              href="#"
                                              class="text-blue-500 hover:text-blue-600"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                              </svg>
                                              <p>Editer</p>
                                            </a>
                                            <a
                                              href="#"
                                              class="text-red-500 hover:text-red-600"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 mr-1 ml-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                              </svg>
                                              <p>Supprimer</p>
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="flex items-center h-10 intro-y">
                  <h2 class="mr-5 text-lg font-bold truncate text-purple-500">
                    Chiffres
                  </h2>
                </div>

                <div class="grid grid-cols-12 gap-6 mt-5">
                  <a
                    class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div class="p-5">
                      <div class="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span class="flex items-center">30%</span>
                        </div>
                      </div>
                      <div class="ml-2 w-full flex-1">
                        <div>
                          <div class="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div class="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div class="p-5">
                      <div class="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span class="flex items-center">30%</span>
                        </div>
                      </div>
                      <div class="ml-2 w-full flex-1">
                        <div>
                          <div class="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div class="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div class="p-5">
                      <div class="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          />
                        </svg>
                        <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span class="flex items-center">30%</span>
                        </div>
                      </div>
                      <div class="ml-2 w-full flex-1">
                        <div>
                          <div class="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div class="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div class="p-5">
                      <div class="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-purple-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                        <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span class="flex items-center">30%</span>
                        </div>
                      </div>
                      <div class="ml-2 w-full flex-1">
                        <div>
                          <div class="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div class="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-span-12 mt-5">
                <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
                  <div class="bg-white shadow-lg p-4" id="chartline"></div>
                  <div class="bg-white shadow-lg" id="chartpie"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
