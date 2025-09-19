import IconGrid from "./../assets/icons/grid-2x2.svg"

function GridHeader() {
  return (
    <header>
      <h2 className="text-2xl font-bold flex gap-2 align-middle justify-center">
        <img src={IconGrid} alt="Grid Icon" width="20" height="20" />
        <span>Grid Solution</span>
      </h2>
    </header>
  )
}

export default GridHeader
