import Button from "../components/Button"


const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign up from
  <span className="text-coral-red"> Update </span>& Newsletter
</h3>
<div className=""><input type="text" name="w-[40%]" placeholder="subscribe" className="input" id="" /><div className="w-full"><Button label="Sign up" width='w-full'/></div></div>
    </section>
  )
}

export default Subscribe