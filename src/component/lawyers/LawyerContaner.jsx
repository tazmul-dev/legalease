"use client"
import { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";
import LawyerFelter from "./LawyerFelter";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";


const LawyerContaner = ({ lawyers, filters}) => {
  const [searchQuery, setSearchQuery] = useState(filters.search);
  const [selectedType, setSelectedType] = useState(filters.status||"all");
  const [selectedCategory, setSelectedCategory] = useState( filters.category||"all");

  const router = useRouter()
 
  const [page, setPage]=useState(filters.page || 1)
  const totalItems = lawyers.length;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems/itemsPerPage)
  const getPageNumbers = ()=>{
    const page = [1,2,3]
    return page
  }
const startItem = 1
  
const endItem = totalItems

  useEffect(() => {
    const sp = new URLSearchParams()

    if (searchQuery) {
      sp.set('search', searchQuery)
    }
    if (selectedType !== 'all') {
      sp.set('status', selectedType)
    }
    if (selectedCategory !== 'all') {
      sp.set('category', selectedCategory)
    }
    if (page) {
      sp.set('page', page)
    }
    //  console.log('search params',sp.toString())

    const path = `?${sp.toString()}`
    router.push(path)


  }, [selectedType, router, searchQuery, selectedCategory, page])

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

      <p>{lawyers.length}</p>
      <>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawyers.map(lawyer => <LawyerCard key={lawyer?._id} lawyer={lawyer} ></LawyerCard>)}


      </div>

     <Pagination className="w-full">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ),
              )}
              <Pagination.Item>
                <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
      </>

    </div>
  );
};

export default LawyerContaner;