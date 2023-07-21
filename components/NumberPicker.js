'use client'

import React, {useState} from 'react';

import {FieldValues, SubmitHandler, useForm} from "react-hook-form";


import {Add, LocationCity, PlusOne, Public, Remove} from "@mui/icons-material";
import Input from "@/components/Input";
import {Button, IconButton} from "@mui/material";
import DisplayNumber from "@/components/DisplayNumber";
import ColloutCard from "@/components/ColloutCard";


function NumberPicker() {

    const [count, setCount] = useState(0);
    const [warning, setwarning] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log("Number ", data.number);
        setCount(data.number)

    }
    console.log("errors ", errors);


    const increment = () => {
        if (count < 10) {
            setCount((number) => number + 1);
              setwarning(false)
        } else {
            setwarning(true)
        }

    }
    const decrement = () => {
        if (count > 0) {

            setCount((number) => number - 1);
             setwarning(false)
        } else {
            setwarning(true)
        }
    }


    return (
        <div className={"space-y-4"}>

            <div className={"space-y-2 flex flex-col justify-center items-center"}>

                <DisplayNumber value={count}/>
                {
                    warning &&
                        <ColloutCard message={"Enter number between 0 - 10 "} warning/>
                }
                <div className={"flex justify-center   items-center relative p-3 border-t-2 gap-5"}>

                    <IconButton
                        onClick={increment}

                        className={" bg-gray-700 text-white hover:bg-gray-600 rounded-full"}><Add
                        className={'text-5xl p-2'}/></IconButton>
                    <IconButton
                        onClick={decrement}

                        className={" bg-gray-700 text-white hover:bg-gray-600 rounded-full"}><Remove
                        className={'text-5xl p-2'}/></IconButton>


                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col  max-w-sm gap-2"}>
                    <Input
                        type="number"
                        register={register}
                        label={"Enter Number"}
                        id={"number"}
                        errors={errors}

                    />

                    <Button className={"w-full bg-gray-700 text-white hover:bg-gray-600"} type="submit">Submit</Button>
                </form>


            </div>


        </div>
    );
}

export default NumberPicker;






