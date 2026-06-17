import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { id: 1, url: '/pic1.jpeg', caption: 'Street Photography - 2026' },
  { id: 2, url: '/pic2.jpeg', caption: 'Portraits - 2026' },
  { id: 3, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800', caption: 'Nature - 2024' },
  { id: 4, url: 'https://images.unsplash.com/photo-1506744626753-1fa44df14c28?auto=format&fit=crop&q=80&w=800', caption: 'Cityscapes' },
  { id: 5, url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800', caption: 'Forests' },
  { id: 6, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', caption: 'Mountains' }
];

const CreativeWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="creative" className="py-16 md:py-20">
      <div className="mb-6 md:mb-10 text-center max-w-3xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-[#111111] inline-block highlighter relative mb-6">
          Hobbies &amp; Creative Interests
        </h2>
        <p className="font-body-lg text-lg text-[#111111]/80 font-medium leading-relaxed">
          Beyond coding, I enjoy exploring creativity through photography, visual storytelling, and capturing meaningful moments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 md:mt-14 flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
        
        {/* Photography Description Card */}
        <div className="w-full lg:w-1/3">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#FFFDF7] p-8 border-2 border-[#222222] shadow-[8px_8px_0px_rgba(34,34,34,1)] relative scrapbook-border rotate-1 hover-polaroid-lift"
           >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#B8FF3B]/60 backdrop-blur-sm border border-[#222222] rotate-2"></div>
             
             <h3 className="font-display-lg-mobile text-3xl font-bold text-[#111111] mb-4">Photography</h3>
             <p className="font-body-md text-[#111111]/80 mb-6 font-medium leading-relaxed">
               Photography allows me to combine creativity and storytelling through visual composition, lighting, and real-world moments.
             </p>
             
             <div className="space-y-3">
               {['Street Photography', 'Nature Photography', 'Event Photography', 'Creative Shoots'].map(item => (
                 <div key={item} className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-[#111111] text-sm">camera</span>
                   <span className="font-label-caps text-xs font-bold uppercase text-[#111111]">{item}</span>
                 </div>
               ))}
             </div>
           </motion.div>
        </div>

        {/* Gallery Wall */}
        <div className="w-full lg:w-2/3">
          <div className="mb-8 border-b-2 border-dashed border-[#222222]/30 pb-4">
            <h3 className="font-label-caps text-sm font-bold uppercase tracking-widest text-[#111111]">Photography Gallery</h3>
          </div>

          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            {photos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <div className={`polaroid-frame p-3 bg-white border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)] transition-all duration-300 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover-polaroid-shake`}>
                   <img src={photo.url} alt={photo.caption} className="w-full h-auto object-cover filter contrast-125 saturate-50 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-500" />
                   <p className="mt-4 text-center font-label-caps text-[10px] uppercase text-[#111111] font-bold underline decoration-wavy decoration-[#B8FF3B]">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-[#111111]/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#FFFDF7] p-4 md:p-6 border-2 border-[#222222] shadow-[8px_8px_0px_rgba(184,255,59,1)] max-w-5xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute -top-16 right-0 text-[#F5F4E8] hover:text-[#B8FF3B] transition-colors flex flex-col items-center gap-1"
                onClick={() => setSelectedImage(null)}
              >
                <span className="material-symbols-outlined text-4xl">close</span>
                <span className="font-label-caps text-xs uppercase font-bold">Close</span>
              </button>
              <div className="border-2 border-[#222222]">
                <img src={selectedImage.url} alt={selectedImage.caption} className="w-full h-auto max-h-[75vh] object-contain mx-auto" />
              </div>
              <p className="mt-6 text-center font-label-caps text-sm uppercase font-bold text-[#111111]">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreativeWork;
