import React from "react";

// Social/contact/profile images from your site
const images = {
  mrBeanCamera: "https://ext.same-assets.com/2638013065/3265355891.gif",
  catTyping: "https://ext.same-assets.com/2638013065/2333314651.gif",
  podcastCover: "https://ext.same-assets.com/2638013065/1423799462.jpeg",
  lambo: "https://ext.same-assets.com/2638013065/1794990976.png",
  beach: "https://ext.same-assets.com/2638013065/530506922.gif",
  // Spline style: add a geometric/abstract background (Spline style placeholder)
  spline3dBg: "https://ext.same-assets.com/3705534677/849522504.png",
};

export default function App() {
  return (
    <div className="font-sans bg-[#141516] min-h-screen text-white">
      {/* Fancy animated nav placeholder */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex justify-between px-8 py-5 bg-[#141516]/70 backdrop-blur-md shadow-xl border-b border-[#222226] animate-fade-in">
        <div className="flex items-center gap-2">
          <img src={images.spline3dBg} className="w-7 h-7" alt="Spline Logo" />
          <span className="text-lg font-bold tracking-wide">Manan</span>
        </div>
        <div className="flex gap-8 text-base items-center">
          <a href="#about" className="hover:text-[#564bcc] transition-all duration-300">About</a>
          <a href="#projects" className="hover:text-[#564bcc] transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#1f96b5] transition-all duration-300 font-semibold">Contact</a>
        </div>
      </nav>

      {/* Hero section with animated background placeholder */}
      <section className="relative flex flex-col justify-center items-center pt-32 pb-24 bg-gradient-to-b from-[#232346] via-[#141516] to-[#141516]">
        {/* Spline style 3D/canvas bg placeholder */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src={images.spline3dBg} alt="Spline Style" className="opacity-40 w-full h-full object-cover animate-pulse-slow" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#564bcc] to-[#1f96b5]">Abdul Manan</h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-6 animate-fade-in-up-delay">Computer Scientist & Youtuber</h2>
          <div className="flex gap-4 justify-center mb-7">
            <a href="https://github.com/abdulmananch" target="_blank" rel="noopener noreferrer" className="btn-glow">GitHub</a>
            <a href="https://www.youtube.com/mananfm" target="_blank" rel="noopener noreferrer" className="btn-glow">YouTube</a>
            <a href="https://www.instagram.com/mr.alladen/" target="_blank" rel="noopener noreferrer" className="btn-glow">Instagram</a>
            <a href="https://www.tiktok.com/@mananfm" target="_blank" rel="noopener noreferrer" className="btn-glow">TikTok</a>
          </div>
        </div>
      </section>

      {/* About Me section - Spline card style */}
      <section id="about" className="max-w-3xl mx-auto px-6 pb-20 pt-8">
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#564bcc]">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Highly focused and ambitious, I speak 5 languages: English, Arabic, Urdu, Punjabi & Spanish.<br/>Not to mention the coding languages: HTML, CSS, JavaScript, C++, and Swift. I love video & photo editing. There is just so much creative freedom and ability to bring my imagination to life with making or editing photos, videos, and code.</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={images.podcastCover} alt="Podcast Cover" className="rounded-2xl w-48 h-48 object-cover border-4 border-[#564bcc] shadow-lg" />
            <img src={images.lambo} alt="Lambo" className="rounded-xl w-36 object-contain" />
          </div>
        </div>
      </section>

      {/* Projects (Spline 'examples') section */}
      <section id="projects" className="bg-[#181920] py-20 px-6 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#1f96b5] text-center">Projects & Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Project cards using your images, Spline style */}
            <div className="bg-[#232346]/60 rounded-2xl p-5 shadow-xl hover:scale-105 transition-transform duration-500 border border-[#564bcc]/20">
              <img src={images.mrBeanCamera} alt="Mr Bean Camera" className="rounded-xl mb-4 object-cover w-full h-36" />
              <h3 className="text-lg font-semibold text-white mb-1">Funny Camera GIF</h3>
              <p className="text-gray-400">A favorite meme/gif. Used across my online presence.</p>
            </div>
            <div className="bg-[#232346]/60 rounded-2xl p-5 shadow-xl hover:scale-105 transition-transform duration-500 border border-[#564bcc]/20">
              <img src={images.catTyping} alt="Cat Typing" className="rounded-xl mb-4 object-cover w-full h-36" />
              <h3 className="text-lg font-semibold text-white mb-1">Cat Typing GIF</h3>
              <p className="text-gray-400">A nod to focus and work—my online persona coding away.</p>
            </div>
            <div className="bg-[#232346]/60 rounded-2xl p-5 shadow-xl hover:scale-105 transition-transform duration-500 border border-[#564bcc]/20">
              <img src={images.beach} alt="Manan Beach" className="rounded-xl mb-4 object-cover w-full h-36" />
              <h3 className="text-lg font-semibold text-white mb-1">Beach GIF</h3>
              <p className="text-gray-400">Captured in a playful moment. More coming soon!</p>
            </div>
            {/* Bonus: use Spline-style visuals for inspiration */}
            <div className="bg-[#232346]/60 rounded-2xl p-5 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500 border border-[#564bcc]/20">
              <img src="https://ext.same-assets.com/3705534677/1668748279.png" className="w-20 h-20 mb-3" alt="3D Spline Cube" />
              <h3 className="text-lg font-semibold text-white mb-1">3D Spline Cube (Demo)</h3>
              <p className="text-gray-400">Experimental project, Spline-style 3D asset demo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me (HIGH PRIORITY) */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#1a1f2c]/90 to-[#141516] relative animate-fade-in-up">
        <div className="max-w-2xl mx-auto rounded-3xl shadow-2xl p-12 text-center border border-[#564bcc]/40 bg-[#181a23]/80 backdrop-blur-lg">
          <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#564bcc] to-[#1f96b5]">Contact Me</h2>
          <p className="text-gray-300 mb-8 text-lg">Want to collaborate, chat, or hire me? Reach out directly via socials or shoot me a message below.</p>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input className="rounded-xl p-3 bg-[#232346] text-white focus:ring-2 focus:ring-[#564bcc] border-0" placeholder="Your Name" required />
            <input type="email" className="rounded-xl p-3 bg-[#232346] text-white focus:ring-2 focus:ring-[#564bcc] border-0" placeholder="Your Email" required />
            <textarea className="rounded-xl p-3 bg-[#232346] text-white focus:ring-2 focus:ring-[#564bcc] border-0" placeholder="Message" rows={4} required />
            <button type="submit" className="mt-3 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#564bcc] to-[#1f96b5] hover:scale-105 hover:from-[#1f96b5] hover:to-[#564bcc] transition-all duration-300">Send</button>
          </form>
        </div>
      </section>

      {/* Footer with Spline-style theme and social links */}
      <footer className="py-10 text-center text-gray-400 border-t border-[#232346] mt-10 animate-fade-in-up">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://github.com/abdulmananch" target="_blank" rel="noopener noreferrer"><span className="icon-[mdi--github] w-6 h-6 inline-block" /></a>
          <a href="https://www.youtube.com/mananfm" target="_blank" rel="noopener noreferrer"><span className="icon-[mdi--youtube] w-6 h-6 inline-block" /></a>
          <a href="https://www.instagram.com/mr.alladen/" target="_blank" rel="noopener noreferrer"><span className="icon-[mdi--instagram] w-6 h-6 inline-block" /></a>
          <a href="https://www.tiktok.com/@mananfm" target="_blank" rel="noopener noreferrer"><span className="icon-[mdi--tiktok] w-6 h-6 inline-block" /></a>
        </div>
        <div className="text-sm">© 2024 Abdul Manan | Inspired by Spline.design</div>
      </footer>
    </div>
  );
}
