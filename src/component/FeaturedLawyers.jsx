"use client";

import { Card, Button, Avatar, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

// Mock data: Replace this with your fetched database data later
const mockLawyers = [
  {
    _id: "1",
    name: "Eleanor Richards",
    specialty: "Family Law",
    experience: "12 Years",
    rating: 4.9,
    reviews: 124,
    location: "New York, NY",
    image: "https://i.pravatar.cc/150?u=eleanor",
  },
  {
    _id: "2",
    name: "James Cavendish",
    specialty: "Corporate Law",
    experience: "15 Years",
    rating: 4.8,
    reviews: 89,
    location: "Chicago, IL",
    image: "https://i.pravatar.cc/150?u=james",
  },
  {
    _id: "3",
    name: "Marcus Thorne",
    specialty: "Criminal Defense",
    experience: "8 Years",
    rating: 4.7,
    reviews: 210,
    location: "Los Angeles, CA",
    image: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    _id: "4",
    name: "Sophia Martinez",
    specialty: "Immigration",
    experience: "10 Years",
    rating: 5.0,
    reviews: 342,
    location: "Miami, FL",
    image: "https://i.pravatar.cc/150?u=sophia",
  },
  {
    _id: "5",
    name: "David Chen",
    specialty: "Real Estate",
    experience: "20 Years",
    rating: 4.9,
    reviews: 156,
    location: "San Francisco, CA",
    image: "https://i.pravatar.cc/150?u=david",
  },
  {
    _id: "6",
    name: "Olivia Sterling",
    specialty: "Intellectual Property",
    experience: "6 Years",
    rating: 4.6,
    reviews: 78,
    location: "Austin, TX",
    image: "https://i.pravatar.cc/150?u=olivia",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function FeaturedLawyers({lawyers}) {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Legal Experts
            </h2>
            <p className="text-lg text-gray-600">
              Connect with top-rated attorneys who have a proven track record of success in their respective fields.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/lawyers">
              <Button color="primary" variant="flat" className="font-medium">
                View All Lawyers
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Lawyers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {lawyers.map((lawyer) => (
            <motion.div key={lawyer._id} variants={cardVariants} className="h-full">
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
   
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}