import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
/* import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
 */
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
{/*         <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
{/*         <div className="content has-text-centered has-background-black-ter			 has-text-white-ter">
          <div className="container has-background-black-ter			 has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        На главную
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Информация
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/contact">
                        Контакты
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/news">
                      Последние новости
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/culture">
                        Культура
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Контакты
                      </Link>
                    </li> 
                  </ul>
                </section>
              </div>
              
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div class="content has-text-centered mb-3" >
        <p>&copy;Щербинин Олег, {new Date().getFullYear()} лицензия <a href="https://creativecommons.org/licenses/by/4.0/deed.ru">CC BY 4.0 </a></p> 
        </div>
      </footer>
    )
  }
}

export default Footer
