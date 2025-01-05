import React, {useState, useEffect } from 'react'
import { FetchProducts } from '../pages/FetchProducts';


export default function Products ({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await FetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    

    
    <React.Fragment>
       

<div>
  <div className="hero_area">
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html"><img width={250} src="assets/images/logo.png" alt="#" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages <span className="caret" /></span></a>
                <ul className="dropdown-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="testimonial.html">Testimonial</a></li>
                </ul>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="product.html">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog_list.html">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                    C457.728,97.71,450.56,86.958,439.296,84.91z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
  <section className="inner_page_head">
    <div className="container_fuild">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <h3>Product Grid</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>products</span>
        </h2>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn-add-to-cart" onClick={() => addToCart(product)} >
                Add to Cart
                </button>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-box">
        <a href>
          View All products
        </a>
      </div>
    </div>
  </section>
  <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>
                  Location
                </span>
              </a>
              <a href>
                <i className="fa fa-phone" aria-hidden="true" />
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <div className="footer_detail">
            <a href="index.html" className="footer-logo">
              Famms
            </a>
            <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="footer_social">
              <a href>
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-pinterest" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <div className="map_container">
            <div className="map">
              <div id="googleMap" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div className="col-lg-7 mx-auto px-0">
          <p>
            © <span id="displayYear" /> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a><br />
            Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>





    </React.Fragment>
  )
}
