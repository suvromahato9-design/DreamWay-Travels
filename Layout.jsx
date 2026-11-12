import { useState, useEffect } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { BRAND, waLink } from './site.js'
const NAV=[['/','Home'],['/about','About'],['/packages','Packages'],['/domestic','Domestic'],['/international','International'],['/honeymoon','Honeymoon'],['/family','Family'],['/group','Group'],['/weekend','Weekend'],['/hotels','Hotels'],['/transport','Flights & Trains'],['/cab','Cabs'],['/planner','Trip Planner'],['/gallery','Gallery'],['/testimonials','Reviews'],['/contact','Contact']]
export default function Layout(){
 const [open,setOpen]=useState(false); const {pathname}=useLocation()
 useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname])
 return <>
 <a className="skip" href="#main">Skip to content</a>
 <header className="bar"><Link to="/" className="logo">DreamWay<span> Travels</span></Link>
  <button className="menu" aria-expanded={open} onClick={()=>setOpen(!open)}>Menu</button>
  <nav className={open?'nav open':'nav'} aria-label="Main">{NAV.map(([p,l])=><NavLink key={p} to={p}>{l}</NavLink>)}</nav>
  <a className="btn sm" href={`tel:${BRAND.tel}`}>Call {BRAND.phone}</a></header>
 <main id="main"><Outlet/></main>
 <footer><div><b>{BRAND.name}</b><p>{BRAND.tagline}</p><p><a href={`tel:${BRAND.tel}`}>{BRAND.phone}</a> · <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p></div>
  <div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/refund">Cancellation & Refund Policy</Link></div></footer>
 <a className="wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a></>}
