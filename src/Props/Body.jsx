import Carousel from "./Carrousel";
import CallToAction from "./CTA";
export default function Body(){

    return(<>
    <div className="bg-cyan-900  min-h-screen w-full flex flex-col">
    <CallToAction></CallToAction>
    <Carousel></Carousel>
    </div>
    
</>)}