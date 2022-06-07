import React, { Fragment } from 'react'
import "./fotter.css"

export default function Footer() {
  return (
      <Fragment>
    <div>        
<footer class="footer">
  <div class="footer__half footer__half-1">
        <h2 class="footer__big-title">COME ON IN!</h2>   
    <h3 class="footer__title">Weekdays</h3>
    <p class="footer__desc">08PM - 12AM</p>
    <h3 class="footer__title">Weekends</h3>
    <p class="footer__desc">12PM - 02AM</p>
    <a href="#" class="btn">Browse menu</a>
  </div>
  <div class="footer__half footer__half-2">
    <h2 class="footer__big-title">CONTACT</h2>
    <h3 class="footer__title">Phone</h3>
    <p class="footer__desc">+(000) 111 222 333</p>
    <h3 class="footer__title">Mail</h3>
    <p class="footer__desc">address@mail.com</p>
    <h3 class="footer__title">Address</h3>
    <p class="footer__desc">543 TN, doula street
     NY, New York
    </p>
  </div>
</footer>
    </div>
    </Fragment>
  )
}
