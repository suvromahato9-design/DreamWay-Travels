import { useState } from 'react'
import { BRAND } from './site.js'
const ID=import.meta.env.VITE_FORMSPREE_ID
const init={name:'',email:'',phone:'',destination:'',from:'',start:'',end:'',adults:2,children:0,rooms:1,pref:'Any',budget:'',notes:''}
function F({k,label,v,set,err,type='text',...r}){return <label>{label}<input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} {...r}/>{err[k]&&<span className="err" role="alert">{err[k]}</span>}</label>}
export default function BookingForm({kind='Tour'}){
 const [v,setV]=useState(init),[err,setErr]=useState({}),[st,setSt]=useState('idle')
 const set=k=>e=>setV({...v,[k]:e.target.value})
 const check=()=>{const e={}
  if(v.name.trim().length<2)e.name='Enter your full name.'
  if(!/^\S+@\S+\.\S+$/.test(v.email))e.email='Enter a valid email address.'
  if(!/^\+?[\d\s-]{10,14}$/.test(v.phone))e.phone='Enter a 10-digit phone number.'
  if(!v.destination.trim())e.destination='Tell us where you want to go.'
  if(v.start&&v.end&&v.end<v.start)e.end='Return date must be after the start date.'
  if(Number(v.adults)<1)e.adults='At least 1 adult.'; return e}
 const body=()=>Object.entries({Type:kind,...v}).map(([k,x])=>`${k}: ${x}`).join('\n')
 const submit=async ev=>{ev.preventDefault();const e=check();setErr(e);if(Object.keys(e).length)return
  if(!ID){window.location.href=`mailto:${BRAND.email}?subject=${encodeURIComponent(kind+' enquiry - '+v.name)}&body=${encodeURIComponent(body())}`;setSt('mailto');return}
  setSt('loading')
  try{const r=await fetch(`https://formspree.io/f/${ID}`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
   body:JSON.stringify({...v,type:kind,_replyto:v.email,_subject:`${kind} enquiry from ${v.name}`})})
   if(!r.ok)throw new Error('send');setSt('ok');setV(init)}catch{setSt('error')}}
 const p={v,set,err}
 if(st==='ok')return <div className="note ok" role="status"><h3>Enquiry received</h3><p>Thank you. This is an enquiry, not a confirmed booking. We will reply by email or phone.</p></div>
 if(st==='mailto')return <div className="note" role="status"><h3>Your email app should be open</h3><p>Send the pre-filled email to complete your enquiry. If nothing opened, write to {BRAND.email}.</p><button className="btn" onClick={()=>setSt('idle')}>Back to form</button></div>
 return <form className="form" onSubmit={submit} noValidate>
  <F k="name" label="Full name" autoComplete="name" {...p}/><F k="email" label="Email" type="email" autoComplete="email" {...p}/>
  <F k="phone" label="Phone / WhatsApp" type="tel" autoComplete="tel" {...p}/><F k="destination" label="Destination" {...p}/>
  <F k="from" label="Departure city" {...p}/><F k="start" label="Travel from" type="date" {...p}/><F k="end" label="Travel to" type="date" {...p}/>
  <F k="adults" label="Adults" type="number" min="1" {...p}/><F k="children" label="Children" type="number" min="0" {...p}/><F k="rooms" label="Rooms" type="number" min="1" {...p}/>
  <label>Package preference<select value={v.pref} onChange={set('pref')}>{['Any','Budget','Standard','Premium','Luxury'].map(o=><option key={o}>{o}</option>)}</select></label>
  <F k="budget" label="Estimated budget (INR)" {...p}/>
  <label className="wide">Special requirements<textarea rows="4" value={v.notes} onChange={set('notes')}/></label>
  {st==='error'&&<p className="err wide" role="alert">We could not send your enquiry. Try again, or call {BRAND.phone}.</p>}
  <button className="btn wide" disabled={st==='loading'}>{st==='loading'?'Sending…':'Send enquiry'}</button>
  {!ID&&<p className="meta wide">Email service not configured: this form opens your email app instead.</p>}</form>}
