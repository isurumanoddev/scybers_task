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
    const [warning, setWarning] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log("Number ", data.number);
        setCount(data.number)

        if (data.number > 0 || data.number < 10) {
            setWarning(false);
        } else {
            setWarning(true)
        }

    }
    console.log("errors ", errors);


    const increment = () => {
        if (count < 10) {
            setCount((number) => Number(number) + 1);
            setWarning(false)
        } else {
            setWarning(true)
        }

    };
    const decrement = () => {
        if (count > 0) {

            setCount((number) => Number(number) - 1);
            setWarning(false)
        } else {
            setWarning(true)
        }
    }


    return (
        <div className={"space-y-4"}>

            <div className={"space-y-2 flex flex-col justify-center items-center"}>
                <div className={'flex flex-col justify-center items-center relative w-full pt-4'}>
                    <DisplayNumber value={count}/>
                    {
                        warning &&
                        <ColloutCard message={"Enter number between 0 - 10 "} warning/>
                    }
                </div>

                <div className={"flex justify-center   items-center relative p-3 border-t-2 gap-5"}>

                    <IconButton
                        onClick={increment}
                        size={'large'}
                         color="warning"
                        variant="contained"

                        className={"    rounded-full"}><Add color="warning"  sx={{ fontSize: 60 }}
                        className={'text-5xl p-2'}/></IconButton>
                    <IconButton
                        color="warning"
                        size={'large'}
                        onClick={decrement}
                        variant="contained"

                        className={"    rounded-full"}><Remove color="warning"  sx={{ fontSize: 60 }}
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

                    <Button  color="warning"  variant="contained" className={"w-full bg-gray-700 text-white hover:bg-gray-600"}
                            type="submit">Submit</Button>
                </form>


            </div>


        </div>
    );
}

export default NumberPicker;






