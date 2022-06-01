import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/653338.webp?k=685e6dfbea743087cddf602f58a8c48b567e82916d0e886dd104fb8348e96676&o=" alt=""  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Cartagena</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/653391.webp?k=0bc65ed59c5a0672f577c5394e7e31b173fc680205dee2a6a7abdb5ea1a53bee&o=" alt=""  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Santa Marta</h1>
                <h2>456 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/653368.webp?k=ba171a6cb86dbe3c116dfddac2358d8c34156e7cfdf02ef3e039061a9892e7fa&o=" alt=""  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>San Andrés</h1>
                <h2>789 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured