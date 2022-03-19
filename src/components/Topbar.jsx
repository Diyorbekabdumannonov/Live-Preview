import logos from './../assets/logos.png'

export default function Topbar() {
  return (
    <div className="topbar max-desktop">
      <div>
        <h3>15°C</h3>
        <h3>Wednesday, 10 January 2021</h3>
        <button className="breakingNewsBtn">Breaking News</button>
        <h3>Indonesia says located black box recorders from crashed plane</h3>
      </div>
      <div>
        <img src={logos} alt='logos' />
      </div>
    </div>
  )
}
