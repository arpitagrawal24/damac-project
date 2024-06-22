"use client";

import Harbour from "./Harbour";
import { Bounce } from "react-awesome-reveal";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <Harbour />
      <div className="flex flex-col gap-4 items-center mx-4 md:mx-[25%] text-center">
        <h2 className="oswald-500 uppercase text-3xl md:text-4xl text-[#00357B]">
          Features & Amenities
        </h2>
        <p className="poppins-400 text-[#343434]">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>

      <section className="flex flex-row flex-wrap justify-evenly my-8 md:mx-20">
        <Bounce triggerOnce>
          <div className=" w-fit rounded-3xl p-4 relative flex flex-col items-center">
            <svg
              width="206"
              height="118"
              viewBox="0 0 206 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M205.307 115.015C205.765 111.073 206 107.064 206 103C206 46.1147 159.885 0 103 0C46.1147 0 0 46.1147 0 103C0 107.854 0.335721 112.629 0.985209 117.304C4.14398 115.216 7.93002 114 12 114H199C201.204 114 203.324 114.356 205.307 115.015Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>
            <svg
              width="126"
              height="75"
              viewBox="0 0 126 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.426 72.5699C124.968 69.2631 125.249 65.8689 125.249 62.409C125.249 27.9415 97.308 0 62.8405 0C28.3729 0 0.431458 27.9415 0.431458 62.409C0.431458 66.6266 0.849829 70.7465 1.64733 74.7294C5.24925 71.2293 10.165 69.0739 15.5842 69.0739H113.126C117.32 69.0739 121.211 70.3644 124.426 72.5699Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>

            <Image
              className="absolute bottom-[79px] left-[24px] md:bottom-[104px] md:left-[32px] rounded-full w-[70%] h-[52%] md:w-[75%] md:h-[60%]"
              src="https://ik.imagekit.io/qz6ubt34n4/harbour-lights-1.jpg?updatedAt=1718636682922"
              alt=""
              width={100}
              height={100}
            />
            <div
              className="bg-[#FCFCFC] w-fit rounded-3xl px-[40px] md:px-[80px] pt-[50px] md:pt-[100px] pb-[20px]"
              style={{ boxShadow: "0px 14px 34px -10px #7E7E7E59" }}
            >
              <p className="text-[#00357B] poppins-bold font-semibold text-center text-xs md:text-base">
                Floating <br />
                Pools
              </p>
            </div>
          </div>
        </Bounce>
        <Bounce delay={100} triggerOnce>
          <div className=" w-fit rounded-3xl p-4 relative flex flex-col items-center">
            <svg
              width="206"
              height="118"
              viewBox="0 0 206 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M205.307 115.015C205.765 111.073 206 107.064 206 103C206 46.1147 159.885 0 103 0C46.1147 0 0 46.1147 0 103C0 107.854 0.335721 112.629 0.985209 117.304C4.14398 115.216 7.93002 114 12 114H199C201.204 114 203.324 114.356 205.307 115.015Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>
            <svg
              width="126"
              height="75"
              viewBox="0 0 126 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.426 72.5699C124.968 69.2631 125.249 65.8689 125.249 62.409C125.249 27.9415 97.308 0 62.8405 0C28.3729 0 0.431458 27.9415 0.431458 62.409C0.431458 66.6266 0.849829 70.7465 1.64733 74.7294C5.24925 71.2293 10.165 69.0739 15.5842 69.0739H113.126C117.32 69.0739 121.211 70.3644 124.426 72.5699Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>

            <Image
              className="absolute bottom-[79px] left-[24px] md:bottom-[104px] md:left-[32px] rounded-full w-[70%] h-[52%] md:w-[75%] md:h-[60%]"
              src="https://ik.imagekit.io/qz6ubt34n4/92f5ddc480e59b1a8b0c8e2529aa305e.jpg?updatedAt=1718649607659"
              alt=""
              width={100}
              height={100}
            />
            <div
              className="bg-[#FCFCFC] w-fit rounded-3xl px-[15px] md:px-[45px] pt-[50px] md:pt-[100px] pb-[20px]"
              style={{ boxShadow: "0px 14px 34px -10px #7E7E7E59" }}
            >
              <p className="text-[#00357B] poppins-bold font-semibold text-center text-xs md:text-base">
                Spacious Cabins <br />
                Like Rooms
              </p>
            </div>
          </div>
        </Bounce>
        <Bounce delay={200} triggerOnce>
          <div className=" w-fit rounded-3xl p-4 relative flex flex-col items-center">
            <svg
              width="206"
              height="118"
              viewBox="0 0 206 118"
              fill="none"
              className="hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M205.307 115.015C205.765 111.073 206 107.064 206 103C206 46.1147 159.885 0 103 0C46.1147 0 0 46.1147 0 103C0 107.854 0.335721 112.629 0.985209 117.304C4.14398 115.216 7.93002 114 12 114H199C201.204 114 203.324 114.356 205.307 115.015Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>
            <svg
              width="126"
              height="75"
              viewBox="0 0 126 75"
              fill="none"
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.426 72.5699C124.968 69.2631 125.249 65.8689 125.249 62.409C125.249 27.9415 97.308 0 62.8405 0C28.3729 0 0.431458 27.9415 0.431458 62.409C0.431458 66.6266 0.849829 70.7465 1.64733 74.7294C5.24925 71.2293 10.165 69.0739 15.5842 69.0739H113.126C117.32 69.0739 121.211 70.3644 124.426 72.5699Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>

            <Image
              className="absolute bottom-[79px] left-[24px] md:bottom-[104px] md:left-[32px] rounded-full w-[70%] h-[52%] md:w-[75%] md:h-[60%]"
              src="https://ik.imagekit.io/qz6ubt34n4/cc-quantum-of-the-seas.jpg?updatedAt=1718649658485"
              alt=""
              width={100}
              height={100}
            />
            <div
              className="bg-[#FCFCFC] w-fit rounded-3xl px-[15px] md:px-[45px] pt-[50px] md:pt-[100px] pb-[20px]"
              style={{ boxShadow: "0px 14px 34px -10px #7E7E7E59" }}
            >
              <p className="text-[#00357B] poppins-bold font-semibold text-center text-xs md:text-base">
                Sea Facing <br />
                Swimming Pools
              </p>
            </div>
          </div>
        </Bounce>
        <Bounce delay={300} triggerOnce>
          <div className=" w-fit rounded-3xl p-4 relative flex flex-col items-center">
            <svg
              width="206"
              height="118"
              viewBox="0 0 206 118"
              fill="none"
              className="hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M205.307 115.015C205.765 111.073 206 107.064 206 103C206 46.1147 159.885 0 103 0C46.1147 0 0 46.1147 0 103C0 107.854 0.335721 112.629 0.985209 117.304C4.14398 115.216 7.93002 114 12 114H199C201.204 114 203.324 114.356 205.307 115.015Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>
            <svg
              width="126"
              height="75"
              viewBox="0 0 126 75"
              fill="none"
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.426 72.5699C124.968 69.2631 125.249 65.8689 125.249 62.409C125.249 27.9415 97.308 0 62.8405 0C28.3729 0 0.431458 27.9415 0.431458 62.409C0.431458 66.6266 0.849829 70.7465 1.64733 74.7294C5.24925 71.2293 10.165 69.0739 15.5842 69.0739H113.126C117.32 69.0739 121.211 70.3644 124.426 72.5699Z"
                fill="#D9D9D9"
                fillOpacity="0.54"
              />
            </svg>

            <Image
              className="absolute bottom-[79px] left-[26px] md:bottom-[104px] md:left-[32px] rounded-full w-[69%] h-[52%] md:w-[75%] md:h-[60%]"
              src="https://ik.imagekit.io/qz6ubt34n4/the-address-dubai-marina.jpg?updatedAt=1718649740616"
              alt=""
              width={100}
              height={100}
            />
            <div
              className="bg-[#FCFCFC] w-fit rounded-3xl px-[30px] md:px-[60px] pt-[50px] md:pt-[100px] pb-[20px]"
              style={{ boxShadow: "0px 14px 34px -10px #7E7E7E59" }}
            >
              <p className="text-[#00357B] poppins-bold font-semibold text-center text-xs md:text-base">
                Gymnasium <br />& FItness
              </p>
            </div>
          </div>
        </Bounce>
      </section>

      <p className="poppins-400 font-light text-[#686868] text-center text-xs md:text-end mx-2 md:mx-44 mb-6">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        Source 1 | Source 2
      </p>

      <div className="flex flex-row justify-center md:justify-end gap-3 md:mx-40 my-12">
        <button className="poppins-bold text-sm bg-[#00357B] text-white px-10 md:px-12 py-4 tracking-wider rounded border-2 border-[#00357B] hover:bg-white hover:text-[#00357B] transition hover:duration-700">
          EXTERIORS
        </button>

        <button className="poppins-bold text-sm text-[#00357B] bg-white px-10 md:px-12 py-4 tracking-wider rounded border-2 border-[#00357B] hover:text-white hover:bg-[#00357B] transition hover:duration-700">
          INTERIORS
        </button>
      </div>
    </>
  );
}
