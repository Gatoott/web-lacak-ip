export default function Search({setIp, getIp}) {
    return (
        <div className="search-wrap">
            <input type="text" placeholder="Contoh: 8.8.8.8" onChange={(e) => setIp(e.target.value)}/>
            <button onClick={getIp}>Lacak</button>
        </div>
    )
}