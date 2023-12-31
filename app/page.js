'use client'


import {Card, Divider, Subtitle, Text} from "@tremor/react";
import NumberPicker from "@/components/NumberPicker";
import {Typewriter, useTypewriter} from 'react-simple-typewriter'


export default function Home() {
    const [text, count] = useTypewriter({
        words: ["Next js ,React js ,Tailwind CSS,Material UI ,Tremor 2.0 + More"],
        loop: true,
        delaySpeed: 1000,
        typeSpeed: 40,

    });

    // bg-[rgb(36,36,36)]
    return (
        <main className="h-screen text-gray-600 snap-y snap-mandatory overflow-y-scroll py-12 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin
        bg-[rgb(36,36,36)] flex flex-col justify-center items-center relative
        ">
            <div className={"w-full  absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12"}/>


            <Card className={"  max-w-lg bg-opacity-90   bg-amber-50  rounded-lg shadow-lg p-8 snap-center"}>
                <Text className={" text-black text-4xl text-center font-bold mb-10 animate-pulse"}> React Task</Text>
                <div className={"relative"}>
                    <Subtitle className={"text-lg pb-1 text-center text-gray-800"}>Powered by </Subtitle>
                    <Subtitle className={"absolute font-semibold text-sm text-center text-gray-800"}>{text}</Subtitle>
                </div>


                <Divider className={"my-10 bg-gray-400 "}/>


                <Card decorationColor="indigo" className="rounded-lg ring-gray-200 bg-white/60 shadow  ">
                    <NumberPicker/>
                </Card>

            </Card>


        </main>
    );
}
//bg-gradient-to-br from-[#394F68] to-[#183B7E]