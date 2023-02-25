import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">

                  <li className="list-inline-item">
                    <a href="mailto:your-email@example.com">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="far fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>


                  <li className="list-inline-item">
                    <a href="https://twitter.com/SBootstrap">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>


                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/StartBootstrap">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>



                  <li className="list-inline-item">
                    <a href="https://github.com/BlackrockDigital">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>

                </ul>
                <p className="copyright text-muted text-center">Copyright &copy; BookApp 2019</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default Footer