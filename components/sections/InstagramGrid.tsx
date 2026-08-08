"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function InstagramGrid() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop",
      title: "Porsche 911 GT3 - Full Body Stealth PPF Application",
      likes: "482",
      comments: "34",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      title: "Mercedes-AMG G63 - Nano Ceramic Protection & hydrophobic test",
      likes: "621",
      comments: "52",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=600&auto=format&fit=crop",
      title: "BMW M8 Competition - Gloss PPF & Custom Interior Coating",
      likes: "519",
      comments: "41",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop",
      title: "Audi RS6 Avant - Paint Restoration & Multi-layer Ceramic",
      likes: "398",
      comments: "29",
    },
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Instagram size={18} className="text-brand-pink" />
              <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em]">
                Sosyal Medyada NC Master
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white">
              @nc_master33 Stüdyo Akışı
            </h2>
          </div>

          <a
            href="https://instagram.com/nc_master33"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-brand-pink/50 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105"
          >
            <Instagram size={16} className="text-brand-pink" />
            <span>Instagram&apos;da Takip Et</span>
            <ExternalLink size={14} className="text-gray-400" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/nc_master33"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 backdrop-blur-sm">
                <div className="flex justify-between items-center text-white text-xs">
                  <span className="bg-brand-pink/80 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    nc_master33
                  </span>
                  <Instagram size={18} className="text-brand-pink" />
                </div>

                <p className="text-white text-xs font-light line-clamp-2">
                  {post.title}
                </p>

                <div className="flex items-center gap-4 text-white text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-brand-pink fill-brand-pink" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} className="text-gray-300" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
