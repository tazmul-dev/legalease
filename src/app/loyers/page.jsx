
import LawyerContaner from "@/component/lawyers/LawyerContaner";
import { browsLawyers } from "@/lib/api/lawyers";
import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";



const loyersPage = async({searchParams}) => {

  const filters = await searchParams;

  const filterObjec = {
    ...filters
  }

  const querySearch = new URLSearchParams(filterObjec)
  const queryString = querySearch.toString()
 

  const lawyers = await browsLawyers(queryString)
  
   return (
   <div>

      <LawyerContaner lawyers={lawyers} ></LawyerContaner>
        
    
   </div>
  );
};

export default loyersPage;
