import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';

const certificationsList = [
  {
    id: 1,
    title: 'Introduction to Cyber Security',
    issuer: 'Infosys Springboard',
    year: '2026',
    credentialId: 'Infosys Springboard',
    skills: ['Cyber Security', 'Network Security', 'Information Security', 'Data Protection'],
    certificateUrl: '/polaroids/data_science certificate.png'
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Title */}
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Certifications
            </h2>
          </div>
          <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block -rotate-1">
            📜 Verified Credentials
          </span>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-md">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-[2.5px] border-black rounded-2xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#B5F547] p-2 rounded-xl border border-black shadow-[2px_2px_0px_#000]">
                      <ShieldCheck size={20} className="stroke-[2.5] text-black" />
                    </div>
                    <span className="font-mono text-xs font-bold text-black/70">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                  <span className="font-bold text-xs bg-[#FAF8F5] border border-black px-2.5 py-1 rounded">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-black text-xl text-black mb-1">
                  {cert.title}
                </h3>
                <p className="font-extrabold text-sm text-[#10B981] mb-4">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#FAF8F5] border border-black px-2.5 py-1 rounded text-xs font-bold text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black py-2.5 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
              >
                View Certificate <ExternalLink size={16} className="stroke-[2.5]" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[10px_10px_0px_#000000] max-w-3xl w-full relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_#000000] text-black focus:outline-none"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>

              {/* Modal Header */}
              <div className="pb-4 border-b-2 border-black pr-12 mb-4">
                <span className="font-mono text-xs font-bold uppercase text-black/70 bg-[#B5F547] border border-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_#000]">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-2xl font-black text-black mt-2">
                  {selectedCert.title} — Verified Certificate
                </h3>
              </div>

              {/* Certificate Image Frame */}
              <div className="bg-[#FAF8F5] border-2 border-black p-3 sm:p-4 rounded-xl shadow-[4px_4px_0px_#000000] mb-5">
                <img
                  src={selectedCert.certificateUrl}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-auto rounded-lg border border-black max-h-[60vh] object-contain mx-auto"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t-2 border-black">
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  Open Full Image <ExternalLink size={16} className="stroke-[2.5]" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
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

export default Certifications;
