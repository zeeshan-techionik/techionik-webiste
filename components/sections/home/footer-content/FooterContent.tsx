'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import React from 'react'

const FooterContact = () => {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Card */}
<div className="relative rounded-2xl border-2 border-[#2A2A34] bg-gradient-to-br from-[#0c0f14] via-[#0b0e13] to-[#090c10] p-8 md:p-12 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Tell Us How We Can <span className="gradient-text">Help?</span>
              </h2>

              <p className="mt-3 max-w-md text-sm text-gray-400">
                Describe your request — we typically respond within a couple of business hours.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-white">
                What <span className="gradient-text">Happens</span> Next?
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
             <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
              <Image src="/icons/check-gradener.svg" alt="canada" width={9.84} height={13.78} />
                    </span>
                  An expert contacts you after having <br/> analyzed your requirements;
                </li>

                <li className="flex items-start gap-3">
             <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
              <Image src="/icons/check-gradener.svg" alt="canada" width={9.84} height={13.78} />
                    </span>
                  If needed, we sign an NDA to ensure  <br/>the highest privacy level;
                </li>

                <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
              <Image src="/icons/check-gradener.svg" alt="canada" width={9.84} height={13.78} />
                    </span>
                  We submit a comprehensive project<br/>proposal with estimates, timelines,<br/> CVs, etc.
                </li>
              </ul>

              {/* TRUSTED BY */}
              <div className="mt-10">
                <h3 className="py-2 gradient-text font-medium">
             Customers who trust us
                </h3>

                <div className="flex flex-wrap items-center gap-6 opacity-80">
                  <span className="text-sm text-white">layoffhub.ai</span>
                  <span className="text-sm text-white">Pergola Plus</span>
                  <span className="text-sm text-white">Accolutions</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-white">
                  Name<span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-white">
                  Email Address<span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-white">
                  Phone Number<span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-white">
                  Description
                </label>
                <textarea
                  placeholder="Please describe a little"
                  rows={5}
                  className="w-full rounded-2xl bg-[#1a1d23] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                  <Button
                 text="Submit Now"
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"

                href="#"
                variant="gradient"
                className="inline-flex w-full md:w-auto justify-center"
              />

            
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-black">
                    ✓
                  </span>
                  Your privacy is protected
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterContact
