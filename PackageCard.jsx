import { Link } from 'react-router-dom'
import { waLink } from './site.js'
export default function PackageCard({p}){ return (
<article className="card"><div className="ph" style={{'--h':p.hue}} role="img" aria-label={`${p.title} (photo placeholder)`}><small>Sample photo area</small></div>
 <div className="cb"><h3>{p.title}</h3><p>{p.blurb}</p><p className="meta">{p.days} · Price on request</p>
 <div className="row"><Link className="btn sm" to="/planner">Enquire</Link>
 <a className="btn sm ghost" target="_blank" rel="noreferrer" href={waLink(`Hello DreamWay Travels, I am interested in the ${p.title} package. Please share details.`)}>WhatsApp</a></div></div></article>)}
