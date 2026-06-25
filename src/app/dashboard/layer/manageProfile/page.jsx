import { getUserSession } from "@/lib/core/session";
import Edit from "./Edit";
import ManageProfile from "./ManageProfile";
import { createService } from "@/lib/action/loyerService";





const manageProfilepage = async() => {
  const user = await getUserSession()
  console.log(user?.id, "User")
    return (
        <div>
      <Edit></Edit>
      <ManageProfile user={user} createService={createService}></ManageProfile>
   
        </div>
    );
};

export default manageProfilepage;