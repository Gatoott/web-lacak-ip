export default function Atas({ip}) {
    return (
        <header>
            <h1>Lacak <span>Alamat IP</span></h1>
            <p className="subtitle">Lokasi hanya perkiraan berdasarkan alamat IP, bukan alamat rumah.</p>
            <div className="badge">Your Ip: {ip}</div>
        </header>
    )
}