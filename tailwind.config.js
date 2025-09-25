module.exports = {
  theme: {
    extend: {
      animation: {
        "stars-move": "stars 120s linear infinite",
        "stars-move-slow": "stars 200s linear infinite reverse",
        flame: "flame 0.2s infinite alternate",
        glitch: "glitch 2s infinite",
        "warp-exit": "warp 1.2s forwards ease-in",
        "spin-slow": "spin 6s linear infinite",
        "spin-reverse": "spin 4s linear infinite reverse",
      },
      keyframes: {
        stars: {
          from: { transform: "translate(0,0)" },
          to: { transform: "translate(1000px,1000px)" },
        },
        flame: {
          from: { opacity: "0.6", height: "45px" },
          to: { opacity: "1", height: "60px" },
        },
        glitch: {
          "0%": { textShadow: "2px 0 red, -2px 0 cyan" },
          "20%": { textShadow: "-2px -2px red, 2px 2px cyan" },
          "40%": { textShadow: "2px 2px red, -2px -2px cyan" },
          "60%": { textShadow: "-2px 0 red, 2px 0 cyan" },
          "80%": { textShadow: "2px -2px red, -2px 2px cyan" },
          "100%": { textShadow: "none" },
        },
        warp: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "40%": { transform: "scale(1.5) skewX(10deg)", opacity: "0.8" },
          "100%": { transform: "scale(3) skewX(30deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
