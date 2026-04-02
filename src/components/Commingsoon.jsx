import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff > 0) {
        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((diff / 1000 / 60) % 60));
        setSeconds(Math.floor((diff / 1000) % 60));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div
      id="soon"
      className="min-h-screen w-full overflow-hidden bg-linear-to-br from-violet-950 via-purple-900 to-orange-800 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, .1) 25%, rgba(168, 85, 247, .1) 26%, transparent 27%, transparent 74%, rgba(251, 146, 60, .1) 75%, rgba(251, 146, 60, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, .1) 25%, rgba(168, 85, 247, .1) 26%, transparent 27%, transparent 74%, rgba(251, 146, 60, .1) 75%, rgba(251, 146, 60, .1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-12 w-32 h-32 border border-orange-400/20 rounded-full animate-float animation-delay-1000"></div>

        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-violet-500 to-orange-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <div className="relative bg-linear-to-br from-purple-500 via-violet-500 to-orange-400 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-violet-200 to-orange-200 animate-text-shimmer">
              Coming Soon
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200/80 font-light tracking-wide">
              Something extraordinary is being crafted
            </p>
          </div>

          <p className="text-lg text-slate-300/70 max-w-lg mx-auto leading-relaxed">
            Our blog is launching soon with insightful articles, stories, and
            perspectives you won't want to miss. Be among the first to know.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 my-8">
            <p className="text-orange-300 text-sm font-semibold mb-6 uppercase tracking-widest">
              Launch in
            </p>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Minutes" },
                { value: seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-linear-to-br from-purple-500/20 to-orange-400/20 border border-purple-400/30 rounded-lg p-3 sm:p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:border-orange-400/60 group-hover:from-purple-500/40 group-hover:to-orange-400/40">
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      {String(item.value).padStart(2, "0")}
                    </p>
                    <p className="text-xs sm:text-sm text-purple-300 mt-2 uppercase tracking-wider font-semibold">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <div className="flex flex-row">
                <button type="submit" className="header-btn3">
                  Notify Me
                </button>
              </div>
            </form>

            {submitted && (
              <div className="animate-fade-in-up bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-300 text-sm">
                ✨ Thanks! We'll notify you when we launch.
              </div>
            )}
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm">
              Follow us for updates • Blog launch 2026
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
