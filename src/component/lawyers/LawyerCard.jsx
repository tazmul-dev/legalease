import Link from "next/link";

export default function LawyerCard({lawyer}) {
  return (
    
 <Link 
 href={`/loyers/${lawyer?._id}`}
 
 >
      <div className=" group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">

        {/* Status Badge */}
       
          <span className="absolute right-4 top-4 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 border border-red-500/20">
            {lawyer?.status}
          </span>
    
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="h-20 w-20 rounded-full object-cover border-2 border-zinc-800"
          />

          <div>
            <h3 className="text-xl font-bold text-white">
              {lawyer.name}
            </h3>

            <p className="text-blue-400 text-sm font-medium">
              {lawyer.specialization}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-5 text-sm leading-6 text-zinc-400 line-clamp-3">
          {lawyer.summary}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">

          <div>
            <p className="text-xs text-zinc-500">
              Consultation Fee
            </p>

            <h4 className="text-lg font-bold text-white">
              ৳ {lawyer.consultationFee}
            </h4>
          </div>

          <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">
            View Details →
          </span>

        </div>

      </div>
    </Link>
   
   
  );
}