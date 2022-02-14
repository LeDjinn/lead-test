import React from "react";
import Action from "./Action";
import avatar1 from "images/avatar1.png";
import avatar2 from "images/avatar2.png";
import avatar3 from "images/avatar3.png";
import { useState } from "react";





export default function AsideBar( avatar) {
  const [avatarpic, setAvatarpic] = useState(avatar1);
  
  console.log(avatar.avatar.avatar);
  
  return (


  <aside className="z-20 flex-shrink-0 hidden w-76 pl-2 overflow-y-auto bg-gray-800 md:block">
    <div className="text-white">
      <div >{}</div>
      <div className="flex p-2  bg-gray-800">
        <div className="flex py-3 px-2 items-center">
          <p className="text-2xl text-center text-purple-500 font-semibold italic ">
            Dasboard
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="">
        <img
          className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-purple-500"
          alt=""
          src={avatar.avatar.avatar === "avatar1" ? avatar1 : avatar.avatar.avatar === "avatar2" ? avatar2 : avatar3}

        />
        <p className="font-bold text-base  text-gray-400 pt-2 text-center w-24">
          Nizar
        </p>
      </div>
    </div>
    <div>
      <button className="w-full bg-purple-500 text-white text-xl text-xlfont-semibold py-1 px-2 rounded-md  shadow-lg hover:shadow-xl hover:bg-purple-300 flex items-center justify-center mr-5">
        Boostez LeadCollector
      </button>
      <ul className="mt-6 leading-10">
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/improvement.png"
              className="h-6 w-6"
            />
            <span className="ml-4">Vos résultats chiffrés</span>
          </a>
        </li>
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-views-news-kiranshastry-lineal-color-kiranshastry.png"
              className="h-6 w-6"
            />
            <span className="ml-4">
              Nouveaux visiteurs
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-like-notifications-justicon-lineal-color-justicon.png"
              className="h-6 w-6"
            />

            <span className="ml-4">
              Nouveaux like
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                
              </div>
            </span>
          </a>
        </li>
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-customer-online-shopping-wanicon-lineal-color-wanicon.png"
              className="h-6 w-6"
            />

            <span className="ml-4">
              Nouveaux lead
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-advertising-advertising-kiranshastry-lineal-color-kiranshastry-3.png"
              className="h-6 w-6"
            />

            <span className="ml-4">
              Pubs en cours
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <li className="relative px-2 py-1 ">
          <a
            className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
            href=" #"
          >
            <img
              src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-graphic-finance-taxation-becris-lineal-color-becris.png"
              className="h-6 w-6"
            />

            <span className="ml-4">
              Résultats des publications
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
                6
              </div>
            </span>
          </a>
        </li>
        <Action />
      </ul>
    </div>
  </aside>
  
  // <div className="flex h-full bg-gray-800">
  //   <aside className="z-20 flex-shrink-0 hidden w-70 pl-2 overflow-y-auto bg-gray-800 md:block">
  //     <div>
  //       <div className="text-white">
  //         <div className="flex p-2  bg-gray-800">
  //           <div className="flex py-3 px-2 items-center">
  //             <p className="text-2xl text-center text-purple-500 font-semibold italic ">
  //               Dasboard
  //             </p>
  //           </div>
  //         </div>
  //         <div className="flex justify-center">
  //           <div className="">
  //             <img
  //               className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-purple-500"
  //               src="https://image.flaticon.com/icons/png/512/149/149071.png"
  //               alt=""
  //             />
  //             <p className="font-bold text-base  text-gray-400 pt-2 text-center w-24">
  //               Nizar
  //             </p>
  //           </div>
  //         </div>
  //         <div>
  //           <ul className="mt-6 leading-10">
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/fluency/48/000000/improvement.png"
  //                   className="h-6 w-6"
  //                 />
  //                 <span className="ml-4">Vos résultats chiffrés</span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-views-news-kiranshastry-lineal-color-kiranshastry.png"
  //                   className="h-6 w-6"
  //                 />
  //                 <span className="ml-4">
  //                   Nouveaux visiteurs
  //                   <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
  //                     6
  //                   </div>
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-like-notifications-justicon-lineal-color-justicon.png"
  //                   className="h-6 w-6"
  //                 />

  //                 <span className="ml-4">
  //                   Nouveaux like
  //                   <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
  //                     6
  //                   </div>
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-customer-online-shopping-wanicon-lineal-color-wanicon.png"
  //                   className="h-6 w-6"
  //                 />

  //                 <span className="ml-4">
  //                   Nouveaux lead
  //                   <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
  //                     6
  //                   </div>
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-advertising-advertising-kiranshastry-lineal-color-kiranshastry-3.png"
  //                   className="h-6 w-6"
  //                 />

  //                 <span className="ml-4">
  //                   Pubs en cours
  //                   <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
  //                     6
  //                   </div>
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1 ">
  //               <a
  //                 className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-pink-500"
  //                 href=" #"
  //               >
  //                 <img
  //                   src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-graphic-finance-taxation-becris-lineal-color-becris.png"
  //                   className="h-6 w-6"
  //                 />

  //                 <span className="ml-4">
  //                   Résultats des publications
  //                   <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-purple-500 text-white">
  //                     6
  //                   </div>
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="relative px-2 py-1" x-data="{ Open : false  }">
  //               <div className="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer">
  //                 <span className="inline-flex items-center  text-sm font-semibold text-white hover:texte-pink-500">
  //                   <img
  //                     src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-edit-user-interface-wanicon-lineal-color-wanicon.png"
  //                     className="h-6 w-6"
  //                   />
  //                   <span className="ml-4">Modifications</span>
  //                 </span>
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   x-show="!Open"
  //                   className="ml-1  text-white w-4 h-4"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   style="display: none;"
  //                 >
  //                   <path
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="M15 19l-7-7 7-7"
  //                   />
  //                 </svg>

  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   x-show="Open"
  //                   className="ml-1  text-white w-4 h-4"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   style="display: none;"
  //                 >
  //                   <path
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="M19 9l-7 7-7-7"
  //                   />
  //                 </svg>
  //               </div>

  //               <div>
  //                 <ul
  //                   className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium  rounded-md shadow-inner  bg-purple-300"
  //                   aria-label="submenu"
  //                 >
  //                   <li className="px-2 py-1 text-white transition-colors duration-150">
  //                     <div className="px-1 hover:text-gray-800 hover:bg-white rounded-md">
  //                       <div className="flex items-center">
  //                         <img
  //                           src="https://img.icons8.com/bubbles/100/000000/web.png"
  //                           className="h-8 w-8"
  //                         />
  //                         <a
  //                           href="#"
  //                           className="w-full ml-2  text-sm font-semibold text-blue-800 hover:text-gray-800 hover:bg-white"
  //                         >
  //                           Contenu de votre site web
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className="px-2 py-1 text-white transition-colors duration-150">
  //                     <div className="px-1 hover:text-gray-800 hover:bg-gray-100 rounded-md">
  //                       <div className="flex items-center">
  //                         <img
  //                           src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
  //                           className="h-8 w-8"
  //                         />
  //                         <a
  //                           href="#"
  //                           className="w-full ml-2  text-sm font-semibold text-white hover:text-gray-800 hover:bg-white"
  //                         >
  //                           Contenu Facebook
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className="px-2 py-1 text-white transition-colors duration-150">
  //                     <div className="px-1 hover:text-gray-800 hover:bg-gray-100 rounded-md">
  //                       <div className="flex items-center">
  //                         <img
  //                           src="https://img.icons8.com/bubbles/100/000000/google-logo.png"
  //                           className="h-8 w-8"
  //                         />
  //                         <a
  //                           href="#"
  //                           className="w-full ml-2  text-sm font-semibold text-white hover:text-gray-800 hover:bg-white"
  //                         >
  //                           Contenu Google
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className="px-2 py-1 text-white transition-colors duration-150">
  //                     <div className="px-1 hover:text-gray-800 hover:bg-gray-100 rounded-md">
  //                       <div className="flex items-center">
  //                         <img
  //                           src="https://img.icons8.com/bubbles/100/000000/upload.png"
  //                           className="h-8 w-8"
  //                         />
  //                         <a
  //                           href="#"
  //                           className="w-full ml-2  text-sm font-semibold text-white hover:text-gray-800 hover:bg-white"
  //                         >
  //                           Uploader des documents
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className="px-2 py-1 text-white transition-colors duration-150">
  //                     <div className="px-1 hover:text-gray-800 hover:bg-gray-100 rounded-md">
  //                       <div className="flex items-center">
  //                         <img
  //                           src="https://img.icons8.com/fluency/96/000000/appointment-scheduling.png"
  //                           className="h-8 w-8"
  //                         />
  //                         <a
  //                           href="#"
  //                           className="w-full ml-2  text-sm font-semibold text-white hover:text-gray-800 hover:bg-white"
  //                         >
  //                           Prendre rendez-vous
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </aside>
  // </div>

  

  )};