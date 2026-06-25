import { getUserSession } from "@/lib/core/session";
import Edit from "./Edit";
import ManageProfile from "./ManageProfile";
import { createService, getLowyaer } from "@/lib/action/loyerService";





const manageProfilepage = async() => {
  const user = await getUserSession()
  console.log(user?.id, "User")
   
  const loyerData = await getLowyaer(user?.id);
  // const res = await fetch(`http://localhost:5000/magege/profile/${user?.id}`)
  // const loyerData =await res.json()

  console.log(loyerData)
   
    return (
        <div>
          {loyerData >0? 
           <ManageProfile user={user} createService={createService}></ManageProfile> :
         <Edit></Edit> 
          }
      
      
   
        </div>
    );
};

export default manageProfilepage;