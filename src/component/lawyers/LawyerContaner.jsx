"use client"
import { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";
import LawyerFelter from "./LawyerFelter";
import { useRouter } from "next/navigation";


const LawyerContaner = ({lawyers}) => {
    const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter()
  useEffect(()=>{
  const sp = new URLSearchParams()
   
  if(searchQuery){
    sp.set('name', searchQuery)
  }
   if(selectedType !=='all'){
    sp.set('status ', selectedType)
   }
   if(selectedCategory !=='all'){
    sp.set('category', selectedCategory)
   }
  //  console.log('search params',sp.toString())

   const path = `?${sp.toString()}`
   router.push(path)


  },[selectedType, router,searchQuery, selectedCategory ])

  // Compute matched filter rows instantly
  // const filteredLawyer = useMemo(() => {
  //   return lawyers.filter((lawyer) => {
  //     const matchesSearch =
  //       lawyer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       lawyer.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       lawyer.category?.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesType = selectedType === "all" || lawyer.jobType === selectedType;
  //     const matchesCategory = selectedCategory === "all" || job.jobCategory === selectedCategory;
      

  //     return matchesSearch && matchesType && matchesCategory
  //   });
  // }, [searchQuery, selectedType, selectedCategory]);

  
    return (
      
        
        <div>
          <LawyerFelter
          searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
          
          ></LawyerFelter>

            <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map(lawyer=> <LawyerCard key={lawyer?._id} lawyer={lawyer} ></LawyerCard>)}
         
        
      </div>
        </div>
    );
};

export default LawyerContaner;