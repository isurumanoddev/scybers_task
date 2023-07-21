'use client'

import {Card, Divider, Subtitle, Text} from "@tremor/react";
import NumberPicker from "@/components/NumberPicker";



export default function Home() {


    return (
        <main className="min-h-screen text-gray-600 p-10
        bg-gradient-to-br from-[#394F68] to-[#183B7E] flex flex-col justify-center items-center
        ">
            <Card className={"  max-w-2xl bg-opacity-90   bg-white  rounded-lg shadow-lg p-8"}>
                <Text className={" text-black text-4xl text-center font-bold mb-10 animate-pulse"}>Scybers Task</Text>

                <Subtitle className={"text-sm text-center text-gray-800"}>Powered by Next js ,Tailwind CSS,Material UI ,Tremor 2.0 + More
                    !</Subtitle>

                <Divider className={"my-10 bg-gray-400 "}/>



                <Card  decorationColor="indigo" className="rounded-lg ring-gray-200 bg-gray-50 shadow  ">
                    <NumberPicker/>
                </Card>

            </Card>


        </main>
    );
}
//bg-gradient-to-br from-[#394F68] to-[#183B7E]