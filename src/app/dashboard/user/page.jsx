import { getmyRequerst } from "@/lib/action/users";
import HiringHistory from "./HiringHistory";
import { getUserSession } from "@/lib/core/session";


const UserPage = async() => {
    const Userid = await getUserSession()
    const id =  Userid.id
    // console.log(Userid)
    
  const hiringHistory =  await getmyRequerst(id)
    return (
        <div>
          <HiringHistory hiringHistory={hiringHistory}></HiringHistory>
        </div>
    );
};

export default UserPage;