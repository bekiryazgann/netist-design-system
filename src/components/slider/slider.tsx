import * as SliderPrimitive from '@radix-ui/react-slider';
import React from "react"
import {clx} from "@/utils/clx";

interface SliderProps{
    className?: string,
    defaultValue?: number[],
    value?: number[]
}

export const Slider = ({className, defaultValue = undefined, value = undefined, ...props}: SliderProps) => {
    let length: number = 1

    if (value !== undefined){
        length = value.length
    } else if(defaultValue !== undefined){
        length = defaultValue.length
    }


    return (
        <SliderPrimitive.Root
            defaultValue={defaultValue} max={100} step={1} {...props}
            className={clx("relative flex items-center w-full max-w-md", className)}>
            <SliderPrimitive.Track className="relative grow-1 w-full h-[6px] rounded-full bg-gray-200">
                <SliderPrimitive.Range className="absolute bg-blue-500 bg-blue-500 h-[6px] rounded-full" defaultValue={10}/>
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block w-5 h-5 cursor-pointer bg-white border border-gray-200 rounded-full relative before:content-[''] before:block before:absolute before:top-1/2 before:left-1/2 before:w-[6px] before:h-[6px] before:bg-blue-500 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"/>
            {length === 2 && (
                <SliderPrimitive.Thumb className="block w-5 h-5 cursor-pointer bg-white border border-gray-200 rounded-full relative before:content-[''] before:block before:absolute before:top-1/2 before:left-1/2 before:w-[6px] before:h-[6px] before:bg-blue-500 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"/>
            )}
        </SliderPrimitive.Root>
    )
}
