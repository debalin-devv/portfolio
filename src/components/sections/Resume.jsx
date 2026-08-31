import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle, X, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading */}
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Resume / CV
            </h2>
          </div>
          <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block rotate-2">
            📄 Paper Preview Document
          </span>
        </div>

        {/* Compact Physical Paper Container */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-[3px] border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] relative"
          >
            {/* Top Tape Accent */}
            <div className="absolute -top-3.5 left-6 bg-[#B5F547] border-2 border-black px-4 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000] -rotate-1">
              OFFICIAL CV DOCUMENT
            </div>

            {/* Document Header Info */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b-2 border-black pt-1">
              <div className="flex items-center gap-3">
                <div className="bg-[#B5F547] p-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
                  <FileText size={22} className="stroke-[2.5] text-black" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-black">
                    Debalin Sinha
                  </h3>
                  <p className="font-bold text-xs sm:text-sm text-black/75">
                    B.Tech Computer Science Engineering (CGPA: 7.58)
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-block font-mono text-[11px] font-bold text-black/60 bg-[#FAF8F5] border border-black px-2.5 py-1 rounded">
                CV (PDF Document)
              </span>
            </div>

            {/* Compact Thumbnail Container - Embedded PDF */}
            <div 
              onClick={() => setIsPreviewOpen(true)}
              className="bg-[#FAF8F5] border-2 border-black p-2.5 rounded-xl shadow-[3px_3px_0px_#000000] mb-5 cursor-pointer relative group overflow-hidden max-h-[220px]"
            >
              <iframe
                src="/cv/Debalin_Sinha_CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Debalin Sinha CV Preview"
                className="w-full h-[200px] rounded border border-black/30 bg-white pointer-events-none group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                <span className="bg-[#B5F547] border-2 border-black px-4 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000] flex items-center gap-2">
                  Click to View PDF <Eye size={16} className="stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Compact Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t-2 border-black">
              <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2.5 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  View Full PDF <Eye size={16} className="stroke-[2.5]" />
                </button>

                <a
                  href="/cv/Debalin_Sinha_CV.pdf"
                  download="Debalin_Sinha_CV.pdf"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-black px-5 py-2.5 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  Download PDF <Download size={16} className="stroke-[2.5]" />
                </a>
              </div>

              <span className="font-mono text-xs font-bold text-black/70 flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#10B981] stroke-[2.5]" /> Verified
              </span>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Full CV Lightbox Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-[3px] border-black rounded-2xl p-5 sm:p-6 shadow-[10px_10px_0px_#000000] max-w-4xl w-full relative my-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-4 right-4 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_#000000] text-black focus:outline-none"
              >
                <X size={20} className="stroke-[2.5]" />
              </button>

              {/* Modal Header */}
              <div className="pb-3 border-b-2 border-black pr-12 mb-4">
                <span className="font-mono text-xs font-bold uppercase text-black/70 bg-[#B5F547] border border-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_#000]">
                  OFFICIAL CURRICULUM VITAE
                </span>
                <h3 className="text-xl font-black text-black mt-1">
                  Debalin Sinha — Resume / CV (PDF)
                </h3>
              </div>

              {/* Full PDF Frame */}
              <div className="bg-[#FAF8F5] border-2 border-black p-2 rounded-xl shadow-[4px_4px_0px_#000000] mb-4 h-[70vh]">
                <iframe
                  src="/cv/Debalin_Sinha_CV.pdf"
                  title="Debalin Sinha CV PDF Viewer"
                  className="w-full h-full rounded border border-black bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t-2 border-black">
                <a
                  href="/cv/Debalin_Sinha_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  Open PDF in New Tab <ExternalLink size={16} className="stroke-[2.5]" />
                </a>
                <a
                  href="/cv/Debalin_Sinha_CV.pdf"
                  download="Debalin_Sinha_CV.pdf"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-black px-5 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  Download PDF <Download size={16} className="stroke-[2.5]" />
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="bg-gray-100 hover:bg-gray-200 border-2 border-black px-4 py-2 rounded-xl font-bold text-sm text-black shadow-[2px_2px_0px_#000]"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
