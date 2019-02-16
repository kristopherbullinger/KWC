const ContentDiv = document.querySelector("#content")
const Nav = document.querySelector("nav")


const renderContent = e => {
  switch (e.target.id) {
    case "window-cleaning-link":
      ContentDiv.innerHTML = WindowCleaningContent
      break
    case "home-link":
      ContentDiv.innerHTML = HomeContent
      break
    case "pressure-washing-link":
      ContentDiv.innerHTML = PressureWashingContent
      break
    case "roof-cleaning-link":
      ContentDiv.innerHTML = RoofWashingContent
      break
  }
  if (e.target.id === "window-cleaning-link") {
    ContentDiv.innerHTML = WindowCleaningContent
  }
}

Nav.addEventListener("click", renderContent)

const HomeContent = `<div class="content-image">
  <img src="images/KWC_Crew.jpg" alt="window cleaners">
  </div>
  <div id="about-us">
    <h3>Founded in 1998 and Family-Owned Ever Since</h3>
    <p>Through decades of experience, we have learned how to make any customer happy. We can wash your windows at your home or business, pressure was your house, deck, or walkway, and remove unsightly and dangerous mold from your rooftop. We have a reputation of providing top-notch service with a great attitude. Plus, we offer free estimates over the phone!<p>
    <p>Relax and let us do our work: we are fully insured and are long-standing members of PWNA and IWCA. We are dedicated to the safety of our employees, customers, and property.</p>
    <p>Check out what our customers have said about us on <a href="https://member.angieslist.com/member/store/11029059/about">Angie's List</a> and <a href="https://www.homeadvisor.com/rated.KensWindowCleaning.19853424.html#ratingsReviews">HomeAdvisor</a>!
  </div>
  </div>`

const WindowCleaningContent = `<div class="content-image">
  <img src="images/window_cleaner.jpg" alt="window cleaner">
  </div>
  <div id="about-us">
    <h3>Look Through Your Windows, Not at Them!</h3>
    <p>Nothing improves the appearance of your home or business like having the windows cleaned by professionals. After all, sunlight is a potent and natural mood booster. Windows become dusty and dirty slowly over time, and before you realize it, you'll find yourself looking at grime instead of sunshine. We are experts at bringing the shine and sparkle back into your home or business. Give us a call or email and we will show you why we are the best window cleaning company in the Albany and Rensselaer county areas! We will give you an estimate for free.</p>
  </div>
  </div>`

const PressureWashingContent = `<div class="content-image">
  <img src="images/pressure_washing_before.jpg" alt="dirty house before pressure washing job">
  <img src="images/pressure_washing_after.jpg" alt="clean house after pressure washing job">
  </div>
  <div id="about-us">
    <h3>Fight Grime</h3>
    <p>Mold, mildew, spores, dust, and a whole other host of nasties can latch on to your roof, siding, walkways or somewhere else to give your otherwise beautiful home or business a dirty appearance. Over time, it is easy to begin feeling that your property simply no longer looks the way that you want it do. Renew that sense of cleanliness, freshness, and professionalism about your property by letting us wipe away the accumulated dirt and dust.  We will professionally and carefully remove all grime from your property using nothing but gentle soap and pressurized water. And we do it with a smile every time.</p>
  </div>
  </div>`

const RoofWashingContent = `<div class="content-image">
  <img src="images/roof_cleaning.jpg" alt="cleaning a residential roof with soft-wash chemicals">
  </div>
  <div id="about-us">
    <h3>Keep Your Roof Healthy</h3>
    <p>Over time, mold and spores can take up residence in the shingles of your roof, which not only gives them a dirty appearance, but can also cause expensive damage! When an unsightly invader takes root in your roof, it can cause the material in your roof to break apart, which could cause it to erode and could lead to leaks in your home! Save yourself the headache of replacing your roof, and restore it to the way it looked when it was new: Let us perform our quiet, effective, and safe roof washing technique on your roof! Give us a call, and we'll be happy to offer your a quote and schedule an appointment.</p>
  </div>
  </div>`
