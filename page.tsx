import Instagram from "@/components/Instagram";
import Navbar from "@/components/Navbar";
import New from "@/components/New-Arrivals";
import Our from "@/components/Our-Blog";
import Side from "@/components/side-table";
import SingleSeater from "@/components/single-seater";
import Top from "@/components/top-picker";




export default function Home (){

    return(
      <>
      <Navbar/>
      <SingleSeater/>
      <Side/>
      <Top/>
      <New/>
      <Our/>
      <Instagram/>
      
      
</>
    )
};

