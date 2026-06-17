export default function Search({ip}) {
    return (
        <div className="search-wrap">
            <input type="text" placeholder="Contoh: 8.8.8.8" value={ip} id="ip"/>
            <button>Lacak</button>
        </div>
    )
}