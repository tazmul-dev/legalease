"use client";

import { Card, Button, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const topExperts = [
  {
    id: "1",
    name: "Eleanor Richards",
    specialty: "Family Law",
    avatar: "https://i.pravatar.cc/150?u=eleanor",
    hires: "1,240 hires",
  },
  {
    id: "2",
    name: "Marcus Thorne",
    specialty: "Criminal Defense",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    hires: "985 hires",
  },
  {
    id: "3",
    name: "David Chen",
    specialty: "Real Estate",
    avatar: "https://i.pravatar.cc/150?u=david",
    hires: "842 hires",
  },
];

export default function TopLegalExperts() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top Legal Experts</h2>
          <p className="text-gray-500 text-sm">Our most trusted professionals this month.</p>
        </div>

        {/* Experts List */}
        <div className="flex flex-col md:gap-4">
          {topExperts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  
                  {/* Manual User Display (Replaces User Component) */}
                  <div className="flex items-center gap-4">
                    <Avatar 
                      src={expert.avatar} 
                      size="lg" 
                      isBordered 
                      color="primary" 
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{expert.name}</h4>
                      <p className="text-sm text-gray-500">{expert.specialty}</p>
                    </div>
                  </div>

                  {/* Hire Count & Link */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {expert.hires}
                    </span>
                    <Link href={`/lawyers/${expert.id}`}>
                      <Button size="sm" variant="light" color="primary" className="min-w-0 px-3">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}