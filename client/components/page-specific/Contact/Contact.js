
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'
import styles from '../About/About.css'
import Products from '../../css/products.css'

// React
import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("ContactMenuItem").classList.add("active");
  }

  render () {
    return (
      <div className={`row-no-padding`}>
        <div className="col-xs-12">
          <div className={`${Products.lifeInsuranceContainer} ${Shadow.containerShadow} container main-container`}>

            <div className={`col-xs-12`}>

              <h2>Why Choose us</h2>
                <p>When buying insurance it is essential to find the RIGHT insurer based on your health, hobbies and lifestyle as this will have a major effect on the final premium you will pay. We are passionate in finding you the RIGHT insurer with the very best cover for your individual circumstances, whilst making sure we secure you the most competitive rates in the marketplace today.</p>
                <p>Curabitur porttitor, urna a malesuada scelerisque, ex lectus dignissim odio, id pellentesque urna urna a leo. Maecenas ac accumsan metus. Fusce pellentesque id arcu ac luctus. Duis porttitor purus ac nisi dapibus, suscipit tempus odio facilisis. Curabitur sed diam in nulla condimentum rhoncus. Sed a consectetur tortor, quis malesuada sapien. Suspendisse posuere sodales metus in scelerisque. Morbi sit amet augue non eros lobortis semper ac eget nibh. Aliquam sit amet dolor nulla. Suspendisse sed nulla ut quam malesuada porta. Quisque at tortor eget sem pretium porttitor.</p>
            </div>

          </div> {/* pagecontainer */}
        </div> {/* col-xs-12 */}
      </div>
    )
  }
}
