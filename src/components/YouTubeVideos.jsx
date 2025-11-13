import { motion } from "framer-motion";

const YouTubeVideos = () => {
  // PASTE ANY 3 YOUTUBE LINKS (Shorts or Regular)
  const videoLinks = [
    "https://youtu.be/ghMaYaf1p1E?si=l68rlljRhw2YbOda",        // YouTube Short
    "https://youtube.com/shorts/7wtFZ8SkKm4?si=U7O3V4_XXhyUAQyR",     // Regular Video
    "https://youtube.com/shorts/qIwXcJmPokY?si=6Xzj8TAWTlUxp-aC",                   // Shortened link
  ];

  const videoTitles = [
    "Quick Tip: Fix in 60s",
    "Change Crack Display without change Original Display",
    "Samsung S22 Ultra Display Change",
  ];

  // Extract video ID from ANY YouTube URL (Shorts, watch, youtu.be, embed)
  const getVideoId = (url) => {
    if (!url) return "";
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return "";
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F37021] mb-4">
            See Getfix in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch real students, real results, real learning.
          </p>
        </motion.div>

        {/* 3 Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoLinks.map((link, index) => {
            const videoId = getVideoId(link);
            if (!videoId) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
                    title={videoTitles[index]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {videoTitles[index]}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                      <span>Auto-playing</span>
                    </div>
                  </div>
                </div>

                {/* Title Below */}
                <p className="mt-4 text-center font-semibold text-gray-800 group-hover:text-[#F37021] transition-colors">
                  {videoTitles[index]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@getfixonline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F37021] font-bold hover:gap-3 transition-all duration-300"
          >
            Watch All Videos on YouTube
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeVideos;