/*jshint esversion: 6 */
(function() {
  "use strict";
  const $=convert.$;
  console.log('BF collection on empty cart test running');
      
  function addContent() {
        $('#CartDrawer').after(` <div class="empty-cart_drawer"> <div class="drawer__header">
          <button class="drawer__close" type="button" onclick="this.closest('cart-drawer').close()" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
  <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
</path></svg>

          </button>
          <h2 class="drawer__heading mb-0">My cart
            
            <span class="drawer__heading-items-count">(<span id="drawer_items_count">0
              </span>
              items)</span>
          </h2>
        </div>
<div class="free_shipping_bar_master">
            <div class="rewards">
              <p id="sc_reward_message">Spend <span class="free-shipping-amount">$99</span> more for free shipping!</p>
              <div class="rewards-progress-bar">
                <div class="rewards-progress" style="width:0%;"></div>
              </div>
              <p class="free_shipping_bottom_text">Free Shipping*</p>
            </div>
          </div>
<div class="cart-drawer__empty-content">
                <h2 class="cart__empty-text">Your cart is empty
                </h2>
               
                <a href="/collections/all" class="continue-shopping-btn button">
                  Continue shopping
                </a><p class="cart__login-title h3">Have an account?
                  </p>
                  <p class="cart__login-paragraph">
                   <a href="/account/login" class="link underlined-link">LogIn</a>
                  </p></div>










<div class="empty-cart-upsells" id="empty-cart-upsells">
<h2 class="empty-cart-upsell-heading">Shop Our Best Sellers</h2>
               <div id="empty-cart-upsells-Container" class="empty-cart-upsells-container">
                 
                 
                   
                        
                     <table class="empty-cart-upsell-one" data-product="Dynamic Duo">
  <tbody>
    <tr>

      <td class="offer-badge">
        <div>Best Value Pack</div>
      </td>
      <td class="empty-cart-upsell-item empty-cart-upsell-img-container" width="80"><img class="empty-cart-upsell-img"
          src="//justthrivehealth.com/cdn/shop/products/Just-Thrive-PNG-files-for-main-Product-Pages-V213---Dynamic-Dup_1500x.png?v=1666013459">
      </td>
      <td class="empty-cart-upsell-item empty-cart-upsell-title" data-variant-id="24293348868196">Dynamic Duo
        <br> <span class="empty-cart-upsell-subtext">Probiotic + Joot Just Calm</span> <br>
        <product-form>
          <form method="post" action="/cart/add" accept-charset="UTF-8" class="form" enctype="multipart/form-data"
            novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type"
              value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id"
              value="40037601083457">
            <input id="max-lineitem-property" type="hidden" name="properties[__Max lineItem property]" value="6">

            <button id="-submit" type="submit" name="add" class="ajax-empty-cart-upsell ajax-empty-cart-upsell__add "
              aria-haspopup="dialog" aria-labelledby="-submit title--6842119127105" aria-live="polite"
              data-sold-out-message="true">
              <span>+ Add</span>
              <span class="sold-out-message hidden">
                Sold out
              </span>
              <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </button><input type="hidden" name="product-id" value="6842119127105">
          </form>
        </product-form>
      </td>
      <td class="upsell-price">

        <strong class="original_price_upsell">$80.99
        </strong>
        <span class="compare_at_price">$94.98</span>
      </td>
    </tr>
  </tbody>
</table>



<table class="empty-cart-upsell-one" data-product="Probiotic - 30 Day Supply">
  <tbody>
    <tr>

 
      <td class="empty-cart-upsell-item empty-cart-upsell-img-container" width="80"><img class="empty-cart-upsell-img"
          src="//justthrivehealth.com/cdn/shop/products/Just-Thrive-PNG-files-for-main-Product-Pages-V29---Probiotic_1500x.png?v=1666013551">
      </td>
      <td class="empty-cart-upsell-item empty-cart-upsell-title" data-variant-id="24293348868196">Probiotic - 30 Day
        Supply
        <br>
        <product-form>
          <form method="post" action="/cart/add" accept-charset="UTF-8" class="form" enctype="multipart/form-data"
            novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type"
              value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id"
              value="25256665251940">
            <input id="max-lineitem-property" type="hidden" name="properties[__Max lineItem property]" value="6">

            <button id="-submit" type="submit" name="add" class="ajax-empty-cart-upsell ajax-empty-cart-upsell__add "
              aria-haspopup="dialog" aria-labelledby="-submit title--2635616157796" aria-live="polite"
              data-sold-out-message="true">
              <span>+ Add</span>
              <span class="sold-out-message hidden">
                Sold out
              </span>
              <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </button><input type="hidden" name="product-id" value="2635616157796">
          </form>
        </product-form>
      </td>
      <td class="upsell-price">

        <strong class="original_price_upsell">$49.99
        </strong>
      </td>
    </tr>
  </tbody>
</table>



<table class="empty-cart-upsell-one" data-product="Just Calm">
  <tbody>
    <tr>

      <td class="empty-cart-upsell-item empty-cart-upsell-img-container" width="80"><img class="empty-cart-upsell-img"
          src="//justthrivehealth.com/cdn/shop/products/Just-Thrive-PNG-files-for-main-Product-Pages-V26---Just-Calm_1500x.png?v=1666012860">
      </td>
      <td class="empty-cart-upsell-item empty-cart-upsell-title" data-variant-id="24293348868196">Just Calm
        <br>
        <product-form>
          <form method="post" action="/cart/add" accept-charset="UTF-8" class="form" enctype="multipart/form-data"
            novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type"
              value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id"
              value="39768831885377">
            <input id="max-lineitem-property" type="hidden" name="properties[__Max lineItem property]" value="1">

            <button id="-submit" type="submit" name="add" class="ajax-empty-cart-upsell ajax-empty-cart-upsell__add "
              aria-haspopup="dialog" aria-labelledby="-submit title--6752362070081" aria-live="polite"
              data-sold-out-message="true">
              <span>+ Add</span>
              <span class="sold-out-message hidden">
                Sold out
              </span>
              <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </button><input type="hidden" name="product-id" value="6752362070081">
          </form>
        </product-form>
      </td>
      <td class="upsell-price">

        <strong class="original_price_upsell">$44.99
        </strong>
      </td>
    </tr>
  </tbody>
</table>



<table class="empty-cart-upsell-one" data-product="Ultimate IgG">
  <tbody>
    <tr>

 
      <td class="empty-cart-upsell-item empty-cart-upsell-img-container" width="80"><img class="empty-cart-upsell-img"
          src="//justthrivehealth.com/cdn/shop/products/Just-Thrive-PNG-files-for-main-Product-Pages-V23---Ultimate-IgG-2_1500x.png?v=1666012841">
      </td>
      <td class="empty-cart-upsell-item empty-cart-upsell-title" data-variant-id="24293348868196">Ultimate IgG
        <br>
        <product-form>
          <form method="post" action="/cart/add" accept-charset="UTF-8" class="form" enctype="multipart/form-data"
            novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type"
              value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id"
              value="29625326010433">
            <input id="max-lineitem-property" type="hidden" name="properties[__Max lineItem property]" value="6">

            <button id="-submit" type="submit" name="add" class="ajax-empty-cart-upsell ajax-empty-cart-upsell__add "
              aria-haspopup="dialog" aria-labelledby="-submit title--3961387614273" aria-live="polite"
              data-sold-out-message="true">
              <span>+ Add</span>
              <span class="sold-out-message hidden">
                Sold out
              </span>
              <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </button><input type="hidden" name="product-id" value="3961387614273">
          </form>
        </product-form>
      </td>
      <td class="upsell-price">

        <strong class="original_price_upsell">$69.99
        </strong>
      </td>
    </tr>
  </tbody>
</table>
<table class="empty-cart-upsell-one" data-product="Probiotic Gummies">
  <tbody>
    <tr>


      <td class="empty-cart-upsell-item empty-cart-upsell-img-container" width="80"><img class="empty-cart-upsell-img"
          src="//cdn.shopify.com/s/files/1/0170/5384/3556/files/main-image_2_1_1500x.png?v=1683899714"></td>
      <td class="empty-cart-upsell-item empty-cart-upsell-title" data-variant-id="24293348868196">Probiotic Gummies
        <br>
        <product-form>
          <form method="post" action="/cart/add" accept-charset="UTF-8" class="form" enctype="multipart/form-data"
            novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type"
              value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id"
              value="40431773122625">
            <input id="max-lineitem-property" type="hidden" name="properties[__Max lineItem property]" value="6">

            <button id="-submit" type="submit" name="add" class="ajax-empty-cart-upsell ajax-empty-cart-upsell__add "
              aria-haspopup="dialog" aria-labelledby="-submit title--6960906764353" aria-live="polite"
              data-sold-out-message="true">
              <span>+ Add</span>
              <span class="sold-out-message hidden">
                Sold out
              </span>
              <div class="loading-overlay__spinner hidden">
                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </button><input type="hidden" name="product-id" value="6960906764353">
          </form>
        </product-form>
      </td>
      <td class="upsell-price">

        <strong class="original_price_upsell">$44.99
        </strong>
      </td>
    </tr>
  </tbody>
</table>

     </div>
    </div>
 </div>
`);

  }
  
  
  $(document).ready(function() {
      addContent();
   });
  
})();
