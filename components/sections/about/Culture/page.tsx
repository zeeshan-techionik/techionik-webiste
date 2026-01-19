// import Image from "next/image";
import CultureValueBlock from "../Culture/CultureValueBlock";
import { cultureData } from "@/data/CultureData";
import CultureImageText from "./CultureImageText";

const Culture = () => {
    return (
        <div className="main max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 space-y-7">
            <h2 className="">
                {cultureData.title}
            </h2>
            <div className="content grid items-center
                lg:grid-cols-[1fr_2fr] lg:space-y-0
                grid-cols-[1fr] space-y-7">   

                <div className="">
                    <CultureImageText
                        description={cultureData.description}
                        imageUrl={cultureData.imageUrl}
                        altText={cultureData.altText}
                    />
                </div>

                <div className="right flex flex-col space-y-12">

                    
                    <CultureValueBlock items={cultureData.culturePoints} />

                    <hr className="w-full border border-[#2A2A34]" />

                    
                    <CultureValueBlock items={cultureData.valuePoints} />

                </div>

            </div>
    </div>
    );
}

export default Culture;