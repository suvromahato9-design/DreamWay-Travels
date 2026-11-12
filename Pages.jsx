import { Link } from 'react-router-dom'
import { BRAND, PACKAGES, PAGES, TESTIMONIALS, POLICIES, waLink } from './site.js'
import PackageCard from './PackageCard.jsx'
import BookingForm from './BookingForm.jsx'
const Head=({t,s})=><section className="head"><h1>{t}</h1>{s&&<p>{s}</p>}</section>
const Grid=({list})=><div className="grid">{list.map(p=><PackageCard key={p.id} p={p}/>)}</div>
export const Home=()=><>
 <section className="hero"><div><h1>Explore more.<br/>Travel better.<br/>Make memories.</h1>
  <p>Tours, hotels, tickets and cabs, planned by people you can call.</p>
  <div className="row"><Link className="btn" to="/planner">Plan my trip</Link><a className="btn ghost light" href={waLink()} target="_blank" rel="noreferrer">WhatsApp us</a></div></div>
  <div className="sun" aria-hidden="true"/></section>
 <section className="sec"><h2>Popular sample packages</h2><p className="meta">Sample content. Itineraries and prices are confirmed on enquiry.</p><Grid list={PACKAGES.slice(0,6)}/></section>
 <section className="sec"><h2>Plan it your way</h2><div className="tiles">{[['/honeymoon','Honeymoon'],['/family','Family'],['/group','Group'],['/weekend','Weekend'],['/hotels','Hotels'],['/cab','Cabs']].map(([p,l])=><Link key={p} to={p} className="tile">{l}</Link>)}</div></section></>
export const About=()=><><Head t="About DreamWay Travels" s={BRAND.tagline}/><section className="sec prose"><p>DreamWay Travels helps travellers plan holidays, book stays, arrange tickets and hire cabs.</p><p><i>Sample text: add your real story, years of operation, registrations and team details here.</i></p></section></>
export const Packages=()=><><Head t="Tour Packages" s="All sample packages. Pricing on request."/><section className="sec"><Grid list={PACKAGES}/></section></>
export const Category=({cat})=><><Head t={PAGES[cat][0]} s={PAGES[cat][1]}/><section className="sec"><Grid list={PACKAGES.filter(p=>p.cat.includes(cat))}/></section></>
export const Service=({kind,title,text})=><><Head t={title} s={text}/><section className="sec narrow"><BookingForm kind={kind}/></section></>
export const Gallery=()=><><Head t="Gallery" s="Sample placeholders. Add your own licensed photos."/><section className="sec"><div className="grid g3">{PACKAGES.map(p=><div key={p.id} className="ph sq" style={{'--h':p.hue}}><small>{p.title}</small></div>)}</div></section></>
export const Testimonials=()=><><Head t="Testimonials" s="Sample placeholders, not real reviews."/><section className="sec grid">{TESTIMONIALS.map(t=><blockquote key={t.n} className="card cb"><p>{t.t}</p><footer>{t.n}</footer></blockquote>)}</section></>
export const Contact=()=><><Head t="Contact Us"/><section className="sec narrow"><p>Call or WhatsApp <a href={`tel:${BRAND.tel}`}>{BRAND.phone}</a><br/>Email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p><div className="row"><a className="btn" href={`tel:${BRAND.tel}`}>Call now</a><a className="btn ghost" target="_blank" rel="noreferrer" href={waLink()}>WhatsApp</a></div><h2>Send an enquiry</h2><BookingForm kind="General"/></section></>
export const Policy=({k})=><><Head t={POLICIES[k][0]}/><section className="sec prose"><p className="note">Draft template. Have it reviewed against your actual business terms before publishing.</p>{POLICIES[k][1].map(t=><p key={t}>{t}</p>)}</section></>
