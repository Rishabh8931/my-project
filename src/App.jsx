import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("#eee8d5");
  const [ambientColor, setAmbientColor] = useState("#ffffff");

  const colors = [
    {
      name: "Ivory",
      value: "#eee8d5",
      className: "bg-stone-300 hover:bg-stone-200",
      ambientBgColor: "#bcbbbb",
    },
    {
      name: "Obsidian",
      value: "#0f1115",
      className: "bg-zinc-900 hover:bg-zinc-800",
      ambientBgColor: "#454545",
    },
    {
      name: "Champagne",
      value: "#d6c6a8",
      className: "bg-amber-300 hover:bg-amber-200",
      ambientBgColor: "#c5baa5",
    },
    {
      name: "Ruby",
      value: "#8b0000",
      className: "bg-red-800 hover:bg-red-700",
      ambientBgColor: "#8d4a4a",
    },
    {
      name: "Emerald",
      value: "#064e3b",
      className: "bg-emerald-800 hover:bg-emerald-700",
      ambientBgColor: "#477d6f",
    },
    {
      name: "Sapphire",
      value: "#0f2a5f",
      className: "bg-blue-900 hover:bg-blue-800",
      ambientBgColor: "#465b86",
    },
    {
      name: "Amethyst",
      value: "#581c87",
      className: "bg-purple-900 hover:bg-purple-800",
      ambientBgColor: "#75588d",
    },
    {
      name: "Rose Gold",
      value: "#b76e79",
      className: "bg-rose-400 hover:bg-rose-500",
      ambientBgColor: "#c69a9f",
    },
    {
      name: "Copper",
      value: "#9a3412",
      className: "bg-orange-800 hover:bg-orange-700",
      ambientBgColor: "#a87965",
    },
    {
      name: "Gold",
      value: "#b8860b",
      className: "bg-yellow-600 hover:bg-yellow-500",
      ambientBgColor: "#c2a95c",
    },
  ];

  return (
    <div
      className="
        relative
        flex
        h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        transition-colors
        duration-500
      "
      style={{ backgroundColor: bgColor }}
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
         
          blur-3xl
        "
        style={{ backgroundColor: ambientColor }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-96
          w-96
          rounded-full
          bg-white/20
          blur-3xl
        "
        style={{ backgroundColor: ambientColor }}
      />

      {/* Main content */}
      <div className="select-none text-center">
        <h1
          className="
            text-4xl
            font-black
            tracking-tight
            text-black/75
            drop-shadow-lg
            sm:text-6xl
          "
        >
          Background Color Changer
        </h1>

        <p
          className="
            mt-4
            text-sm
            font-medium
            tracking-wide
            text-black/50
            sm:text-base
          "
        >
          Choose a color and transform your environment.
        </p>
      </div>

      {/* Floating color dock */}
      <div
        className="
    absolute
    bottom-6
    left-1/2
    -translate-x-1/2

    flex
    h-20
    w-[90%]
    max-w-3xl

    items-center
    justify-start
    gap-4

    overflow-x-auto
    scrollbar-none

    rounded-3xl
    border
    border-white/40
    bg-white/20
    py-4
    px-8

    shadow-2xl
    backdrop-blur-2xl

    transition-all
    duration-300
  "
      >
        {colors.map((color) => {
          const [baseColor, hoverColor] = color.className.split(" ");

          return (
            <Button
              key={color.value}
              onClick={() => {
                setBgColor(color.value);
                setAmbientColor(color.ambientBgColor || color.value);
              }}
              colorCode={baseColor}
              hoverColor={hoverColor}
            >
              {color.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
