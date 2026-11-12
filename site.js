export const BRAND = { name:'DreamWay Travels', tagline:'Explore More. Travel Better. Make Memories.',
  phone:'+91 9433728870', tel:'+919433728870', wa:'919433728870', email:'dreamwaytravel.in@gmail.com' }
export const waLink = (msg='Hello DreamWay Travels, I would like to enquire.') =>
  `https://wa.me/${BRAND.wa}?text=${encodeURIComponent(msg)}`
// SAMPLE CONTENT: no prices, dates or availability are real.
export const PACKAGES = [
 {id:'darjeeling',title:'Darjeeling & Kalimpong',cat:['domestic','family','weekend'],days:'Sample: 4N/5D',hue:150,blurb:'Tea gardens, toy train views and Himalayan sunrise.'},
 {id:'sikkim',title:'Gangtok & North Sikkim',cat:['domestic','group'],days:'Sample: 6N/7D',hue:200,blurb:'Monasteries, mountain lakes and high passes.'},
 {id:'kerala',title:'Kerala Backwaters',cat:['domestic','honeymoon','family'],days:'Sample: 5N/6D',hue:165,blurb:'Houseboat stays, hill stations and beaches.'},
 {id:'andaman',title:'Andaman Islands',cat:['domestic','honeymoon'],days:'Sample: 5N/6D',hue:190,blurb:'Clear water, island hopping and quiet beaches.'},
 {id:'kashmir',title:'Kashmir Valley',cat:['domestic','honeymoon','group'],days:'Sample: 6N/7D',hue:210,blurb:'Lakes, gardens and mountain meadows.'},
 {id:'digha',title:'Digha & Mandarmani',cat:['weekend','family'],days:'Sample: 2N/3D',hue:35,blurb:'A short sea break from Kolkata.'},
 {id:'bali',title:'Bali',cat:['international','honeymoon'],days:'Sample: 5N/6D',hue:20,blurb:'Temples, rice terraces and beach villas.'},
 {id:'thailand',title:'Thailand',cat:['international','group','family'],days:'Sample: 5N/6D',hue:340,blurb:'Bangkok city life and Phuket islands.'},
 {id:'dubai',title:'Dubai',cat:['international','family'],days:'Sample: 4N/5D',hue:45,blurb:'Skyline, desert safari and shopping.'},
 {id:'singapore',title:'Singapore',cat:['international','family','group'],days:'Sample: 4N/5D',hue:260,blurb:'Gardens, theme parks and food streets.'}]
export const PAGES = {
 domestic:['Domestic Tours','Journeys across India.'], international:['International Tours','Overseas holidays, planned end to end.'],
 honeymoon:['Honeymoon Packages','Private, romantic stays and slow itineraries.'], family:['Family Tours','Comfortable pacing for all ages.'],
 group:['Group Tours','Shared departures and private groups.'], weekend:['Weekend Getaways','Short breaks you can book at short notice.']}
export const TESTIMONIALS = [
 {n:'Sample Traveller A',t:'Placeholder: replace with a real, permitted customer review.'},
 {n:'Sample Traveller B',t:'Placeholder: replace with a real, permitted customer review.'},
 {n:'Sample Traveller C',t:'Placeholder: replace with a real, permitted customer review.'}]
export const POLICIES = {
 privacy:['Privacy Policy',['We collect the details you enter in enquiry forms (name, email, phone, travel preferences) to respond to your request.','Enquiries are sent to our business email and are not sold to third parties.','Contact us to request correction or deletion of your data.']],
 terms:['Terms & Conditions',['Enquiries are not bookings. A booking is confirmed only when we confirm it in writing.','Quotes depend on availability and may change until confirmed.','Travel documents, visas and insurance are the traveller\u2019s responsibility unless agreed in writing.']],
 refund:['Cancellation & Refund Policy',['Cancellation and refund terms depend on the airline, hotel and supplier rules for each trip.','Applicable charges will be stated in your written quote before you pay.','Refund timelines depend on suppliers and payment providers.']]}
