type MapHotspotProps = {
  label: string
  top: string
  left: string
  onClick: () => void
}

function MapHotspot({ label, top, left, onClick }: MapHotspotProps) {
  return (
    <button
      className="cursor-pointer absolute uppercase font-bold w-[2ch] aspect-square bg-neutral-200 rounded-sm shadow-sm hover:opacity-70"
      style={{ top, left }}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default MapHotspot
