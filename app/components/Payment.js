import React from 'react'
import { MdOutlineArchitecture } from 'react-icons/md'
import { TfiLayoutSliderAlt } from 'react-icons/tfi'
import { VscDebugBreakpointData } from 'react-icons/vsc'

const Payment = () => {
    return (
        <div className=" py-14 px-2 " id="paymnet">
            <h2 className="text-3xl text-black font-semibold text-center mb-10">
                Payment Plan

            </h2>

            <div className="grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                <div className="shadow-lg">
                    <div className="flex flex-col justify-center items-center p-4 text-center">
                        <h3 className="text-3xl font-bold">20%
                        </h3>
                        <p className="text-xl">
                            Down Payment
                        </p>
                    </div>
                </div>
                <div className="shadow-lg">
                    <div className="flex flex-col justify-center items-center p-4 text-center">
                        <h3 className="text-3xl font-bold">60%
                        </h3>
                        <p className="text-xl">
                            During Construction
                        </p>
                    </div>
                </div>
                <div className="shadow-lg">
                    <div className="flex flex-col justify-center items-center p-4 text-center">
                        <h3 className="text-3xl font-bold">20%
                        </h3>
                        <p className="text-xl">
                            On Handover
                        </p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Payment