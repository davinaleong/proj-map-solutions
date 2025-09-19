import IconMap from "./../assets/icons/map.svg"

function MapHeader() {
  return (
    <header>
      <h2 className="text-2xl font-bold flex gap-2 align-middle justify-center">
        <img src={IconMap} alt="Map Icon" width="20" height="20" />
        <span>Map Solution</span>
      </h2>
    </header>
  )
}

export default MapHeader
