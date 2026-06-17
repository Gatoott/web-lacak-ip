export default function Card({ip, country, city, province, timezone, spesifik, latitude, longitude, isp, }) {
    return(
        <div className="card">
            <div className="map">
                <iframe
                width="100%"
                height="100%"
                style={{border: 0}}
                loading="lazy"
                allowFullscreen
                src="https://maps.google.com/maps?q=-6.91746,107.61912&t=&z=15&ie=UTF8&iwloc=&output=embed"
                >
                </iframe>
            </div>

            <div className="tulisan">
                <div className="hero">
                    <small><i className="fa-solid fa-location-crosshairs"></i> IP Adress</small>
                    <h2>{ip}</h2>
                </div>

                <div className="row">
                    <span><i class="fa-solid fa-earth-asia"></i> Country</span>
                    <span>{country}</span>
                </div>

                <div className="row">
                    <span><i class="fa-solid fa-map"></i> Province</span>
                    <span>{province}</span>
                </div>

                <div className="row">
                    <span><i class="fa-solid fa-city"></i> City</span>
                    <span>{city}</span>
                </div>

                <div className="row">
                    <span><i class="fa-solid fa-location-dot"></i> Coordinat</span>
                    <span>{latitude}, {longitude}</span>
                </div>

                <div class="row">
                    <span><i class="fa-solid fa-clock"></i> Timezone</span>
                    <span>{timezone} ({spesifik})</span>
                </div>

                <div class="row">
                    <span><i class="fa-solid fa-building"></i> ISP</span>
                    <span>{isp}</span>
                </div>
            </div>
        </div>
    )
}