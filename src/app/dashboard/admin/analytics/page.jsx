import { allusers } from "@/lib/api/admin";
import { Lawyers } from "@/lib/api/lawyers";
import { Card } from "@heroui/react";



const analyticsPage = async() => {

  const alluser = await allusers()
   const users = alluser.filter(user =>user.role==="user")
   const lawyers = alluser.filter(lawyer => lawyer.role==="layer")
   

    
    return (
<section className="py-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Total Users */}
        <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl">👥</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Users</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{users.length}</h3>
          </div>
        </Card>

        {/* Card 2: Total Lawyers */}
        <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl">⚖️</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +5%
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Lawyers</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{lawyers.length} </h3>
          </div>
        </Card>

        {/* Card 3: Total Hires */}
        <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl">💼</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +18%
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Hires</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">45,200</h3>
          </div>
        </Card>

        {/* Card 4: Total Revenue */}
        <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl">💰</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +8%
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">$2.4M</h3>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default analyticsPage;