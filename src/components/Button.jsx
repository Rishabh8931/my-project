export function Button({ children, onClick, colorCode, hoverColor }) {
  return (
    <button
      onClick={onClick}
      className={`
  ${colorCode}
  ${hoverColor}

  shrink-0

  h-12
  min-w-28

  rounded-2xl

  px-7
  py-3

  text-base
  font-bold
  text-white

  shadow-lg
  shadow-black/15

  transition-all
  duration-300
  ease-out

  hover:-translate-y-1
  hover:scale-105
  hover:shadow-2xl

  active:translate-y-0
  active:scale-95

  focus:outline-none
  focus:ring-2
  focus:ring-white/60
`}
    >
      {children}
    </button>
  );
}
