
import{CustomerReview, Footer, Hero, Offer, PopularProduct, Quality, Services, Subscribe} from "./sections"
import Nav from "./components/Nav"
const App = () => {
  return (
   <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><PopularProduct/></section>
    <section className="padding"><Quality/></section>
    <section className="padding-x py-10"><Services/></section>
    <section className="padding"><Offer/></section>
    <section className="padding bg-pale-blue"><CustomerReview/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
    <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    
   </main>
  )
}

export default App