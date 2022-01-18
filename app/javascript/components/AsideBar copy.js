import React from "react";


import Action from "./Action";

function AsideBar (likes) {
  let avatar = ''
  if (avatar === avatar1) {
    return avatar1;
  }
  else if (avatar === avatar1) {
    return avatar
  }
  

  return(
  <aside className="z-20 flex-shrink-0 hidden w-76 pl-2 overflow-y-auto bg-gray-800 md:block">
    <div class="text-white">
      <div class="flex p-2  bg-gray-800">
        <div class="flex py-3 px-2 items-center">
          <p class="text-2xl text-center text-purple-500 font-semibold italic ">
            Dasboard
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="">
        <img
          class="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-purple-500"
          src="https://image.flaticon.com/icons/png/512/149/149071.png"
          alt=""
        />
        <p class="font-bold text-base  text-gray-400 pt-2 text-center w-24">
          Nizar
        </p>
      </div>
    </div>
    <div>
      <button className="w-full bg-purple-500 text-white text-xl text-xlfont-semibold py-1 px-2 rounded-md  shadow-lg hover:shadow-xl hover:bg-purple-300 flex items-center justify-center mr-5">
        Boostez LeadCollector
      </button>
      <ul class="mt-6 leading-10">
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/improvement.png"
              class="h-6 w-6"
            />
            <span class="ml-4">Vos résultats chiffrés</span>
          </a>
        </li>
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-views-news-kiranshastry-lineal-color-kiranshastry.png"
              class="h-6 w-6"
            />
            <span class="ml-4">
              Nouveaux visiteurs
              <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-like-notifications-justicon-lineal-color-justicon.png"
              class="h-6 w-6"
            />

            <span class="ml-4">
              Nouveaux like
              <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                {likes.likes ? likes.likes : "No Tokken"}
              </div>
            </span>
          </a>
        </li>
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-customer-online-shopping-wanicon-lineal-color-wanicon.png"
              class="h-6 w-6"
            />

            <span class="ml-4">
              Nouveaux lead
              <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-advertising-advertising-kiranshastry-lineal-color-kiranshastry-3.png"
              class="h-6 w-6"
            />

            <span class="ml-4">
              Pubs en cours
              <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li class="relative px-2 py-1 ">
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-graphic-finance-taxation-becris-lineal-color-becris.png"
              class="h-6 w-6"
            />

            <span class="ml-4">
              Résultats des publications
              <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <Action />
      </ul>
    </div>
  </aside>)

};

export default AsideBar;
