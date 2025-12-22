import React from 'react'

const Item = () => {
    return (
        <>
            <div className="pt-25 pb-10 bg-orange-200">
                <div className="w-10/12 mx-auto">
                    <div className="flex justify-around items-center bg-neutral-primary-soft p-6 rounded-base">
                        <h2 className="text-3xl font-bold">Exclusive Item</h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item