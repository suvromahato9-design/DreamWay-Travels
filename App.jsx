import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { Home, About, Category, Packages, Service, Gallery, Testimonials, Contact, Policy } from './pages/Pages.jsx'
export default function App(){ return (
<Routes><Route element={<Layout/>}>
 <Route index element={<Home/>}/><Route path="about" element={<About/>}/>
 <Route path="packages" element={<Packages/>}/>
 {['domestic','international','honeymoon','family','group','weekend'].map(c=><Route key={c} path={c} element={<Category cat={c}/>}/>)}
 <Route path="hotels" element={<Service kind="Hotel booking" title="Hotel Booking Enquiry" text="Tell us where and when. We will send options."/>}/>
 <Route path="transport" element={<Service kind="Flight & train" title="Flight & Train Assistance" text="We help you compare and arrange tickets. Fares are quoted after you enquire."/>}/>
 <Route path="cab" element={<Service kind="Cab & car rental" title="Cab & Car Rental" text="Airport transfers, outstation trips and local sightseeing."/>}/>
 <Route path="planner" element={<Service kind="Custom trip" title="Custom Trip Planner" text="Describe your ideal trip in the special requirements box."/>}/>
 <Route path="gallery" element={<Gallery/>}/><Route path="testimonials" element={<Testimonials/>}/>
 <Route path="contact" element={<Contact/>}/>
 {['privacy','terms','refund'].map(p=><Route key={p} path={p} element={<Policy k={p}/>}/>)}
</Route></Routes>)}
