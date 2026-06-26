
import LawyerContaner from "@/component/lawyers/LawyerContaner";
import { browsLawyers } from "@/lib/api/lawyers";
import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";



const loyersPage = async() => {
  const lawyers = await browsLawyers()
  
   return (
   <div>

      <LawyerContaner lawyers={lawyers} ></LawyerContaner>
        
    
   </div>
  );
};

export default loyersPage;
