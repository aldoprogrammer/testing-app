import MainContent from "./Content/MainContent";

export default function Container () {
     return(
        <div className="bg-slate-800
        md:h-screen w-full
        overflow-x-hidden">
            <MainContent/>
        </div>
     )
}