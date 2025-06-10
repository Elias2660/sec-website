"use server"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PersonBoxProps {
    className: string,
    name: string,
    position: string,
    description: string,
    image: string | StaticImport,
}

export default async function PersonBox(props: PersonBoxProps) {
    if (typeof props.image === "string") {
        return (
            <div className={`${props.className}`}>
                <div className="grid grid-cols-12 grid-rows-12 w-fit h-fit">
                    <Image className="w-fill h-fill rounded-md col-start-2 col-span-4 row-start-1 row-span-4" src={props.image} width={400} height={400} alt={`Image for ${props.name}, who is ${props.position}`} />
                    <div className="ml-2 col-start-6 col-span-6 row-start-1 row-span-11">
                        <div className="miltonian text-2xl font-bold">
                            {props.name}
                        </div>
                        <div className="italic lexend font-light">
                            {props.position}
                        </div>
                        <div className="col-start-7 lexend font-light text-xs sm:text-base">
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={`${props.className}`}>
            <div className="grid grid-cols-12 grid-rows-12">
                <Image  className="rounded-md col-start-2 col-span-4 row-start-1 row-span-full w-fill h-fill" src={props.image} alt={`Image for ${props.name}, who is ${props.position}`} placeholder="blur" />
                <div className="ml-2 col-start-6 col-span-6 row-start-1 row-span-full">
                    <div className="miltonian text-2xl font-bold">
                        {props.name}
                    </div>
                    <div className="italic lexend font-light">
                        {props.position}
                    </div>
                    <div className="col-start-7 lexend font-light text-xs sm:text-base">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
}