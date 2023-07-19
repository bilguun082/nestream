"use client";
import React from "react";
import { useState } from "react";

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar bg-base-100 fixed z-30" data-theme="dracula">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <svg
            width="48"
            height="40"
            viewBox="0 0 236 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.5 77H148C150.761 77 153 79.2386 153 82V189C153 191.761 150.761 194 148 194H124.5C121.739 194 119.5 191.761 119.5 189V171.5C119.5 168.739 117.261 166.5 114.5 166.5H97.5C94.7386 166.5 92.5 168.739 92.5 171.5V189C92.5 191.761 90.2614 194 87.5 194H39.5C36.7386 194 34.5 191.761 34.5 189V173.5C34.5 170.739 36.7386 168.5 39.5 168.5H45.5C48.2614 168.5 50.5 166.261 50.5 163.5V151.5C50.5 148.739 48.2614 146.5 45.5 146.5H39.5C36.7386 146.5 34.5 144.261 34.5 141.5V82C34.5 79.2386 36.7386 77 39.5 77ZM13 129C10.2386 129 8 131.239 8 134V142C8 144.761 10.2386 147 13 147H21C23.7614 147 26 144.761 26 142V134C26 131.239 23.7614 129 21 129H13ZM0 170C0 167.239 2.23858 165 5 165H17C19.7614 165 22 167.239 22 170V182C22 184.761 19.7614 187 17 187H5C2.23858 187 0 184.761 0 182V170ZM175 159C172.239 159 170 161.239 170 164V185C170 187.761 172.239 190 175 190H198C200.761 190 203 187.761 203 185V164C203 161.239 200.761 159 198 159H175ZM15 204C15 201.239 17.2386 199 20 199H39C41.7614 199 44 201.239 44 204V223C44 225.761 41.7614 228 39 228H20C17.2386 228 15 225.761 15 223V204ZM61 200C58.2386 200 56 202.239 56 205V214C56 216.761 58.2386 219 61 219H70C72.7614 219 75 216.761 75 214V205C75 202.239 72.7614 200 70 200H61Z"
              fill="url(#paint0_linear_2_38)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M145 0C142.239 0 140 2.23857 140 5V27C140 29.7614 142.239 32 145 32H167C169.761 32 172 29.7614 172 27V5C172 2.23857 169.761 0 167 0H145ZM96 17C96 14.2386 98.2386 12 101 12H113C115.761 12 118 14.2386 118 17V29C118 31.7614 115.761 34 113 34H101C98.2386 34 96 31.7614 96 29V17ZM188 23C185.239 23 183 25.2386 183 28V40C183 42.7614 185.239 45 188 45H200C202.761 45 205 42.7614 205 40V28C205 25.2386 202.761 23 200 23H188ZM173.5 43.5H105.524C102.753 43.5 100.511 45.7533 100.524 48.5242L100.976 142.024C100.989 144.776 103.224 147 105.976 147H199.5C202.261 147 204.5 144.761 204.5 142V74.5C204.5 71.7386 202.261 69.5 199.5 69.5H183.5C180.739 69.5 178.5 67.2614 178.5 64.5V48.5C178.5 45.7386 176.261 43.5 173.5 43.5ZM212 70C212 67.2386 214.239 65 217 65H231C233.761 65 236 67.2386 236 70V84C236 86.7614 233.761 89 231 89H217C214.239 89 212 86.7614 212 84V70ZM212 37C212 34.2386 214.239 32 217 32H220C222.761 32 225 34.2386 225 37V40C225 42.7614 222.761 45 220 45H217C214.239 45 212 42.7614 212 40V37ZM64 34C59.5817 34 56 37.5817 56 42V59C56 63.4183 59.5817 67 64 67H81C85.4183 67 89 63.4183 89 59V42C89 37.5817 85.4183 34 81 34H64Z"
              fill="#5983EE"
            />
            <rect x="100" y="77" width="55" height="70" rx="5" fill="#416FE6" />
            <defs>
              <linearGradient
                id="paint0_linear_2_38"
                x1="101.5"
                y1="77"
                x2="106"
                y2="372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6D61F7" />
                <stop offset="0.401613" stopColor="#60F4F4" />
              </linearGradient>
            </defs>
          </svg>
          Nestream
        </a>
        <p className="text-xl">Browse</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="navbar-end hidden lg:flex
       gap-5"
      >
        <button className="btn" onClick={() => window.my_modal_4.showModal()}>
          Log In
        </button>
        <button className="btn" onClick={() => window.my_modal_5.showModal()}>
          Sign Up
        </button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box  ">
          <div className="card flex-shrink-0  shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
      <dialog id="my_modal_5" className="modal">
        <form method="dialog" className="modal-box  ">
          <div className="card flex-shrink-0  shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}
