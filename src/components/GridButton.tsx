import React from "react"

type GridButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export function GridButton({ children, onClick }: GridButtonProps) {
  return (
    <button
      className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:opacity-70 text-xl overflow-hidden"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
