"use client";

import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: "criminal",
    title: "Criminal Law",
    description: "Defense against criminal charges, bail, and appeals.",
    href: "/loyers?category=Criminal&page=1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: "corporate",
    title: "Corporate Law",
    description: "Business formations, mergers, contracts, and compliance.",
    href: "/loyers?category=corporate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "family",
    title: "Family Law",
    description: "Divorce, child custody, adoption, and domestic relations.",
    href: "/loyers?category=family",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  
];

// Framer Motion Variants for Staggered Load
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
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
};

export default function LegalCategories() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Legal Category
          </h2>
          <p className="text-lg text-gray-600">
            Find specialized legal experts tailored to your specific needs. Select a category below to filter available lawyers.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={cardVariants} className="h-full">
              <Link href={category.href} className="block h-full outline-none">
                <Card 
                  isHoverable 
                  isPressable 
                  // flex-col added so we can push the footer down if descriptions vary in length
                  className="group flex flex-col h-full bg-white border border-transparent hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 text-left w-full overflow-hidden"
                >
                  {/* Replaces CardBody - flex-grow ensures this area takes up empty space */}
                  <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow w-full">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      {category.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Replaces CardFooter */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 w-full">
                    <div className="flex items-center text-primary font-medium opacity-80 group-hover:opacity-100">
                      <span>Browse Lawyers</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}