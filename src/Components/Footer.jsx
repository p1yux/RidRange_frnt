import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import './Me.css'

const baseUrl='https://minipro.pythonanywhere.com/api'

const Footer = () => {

  const [pageData, setPageData]=useState([]);

  useEffect(()=>{
    try{
        axios.get(baseUrl+'/pages/')
        .then((res)=>{
          setPageData(res.data)
        });
    }catch(error){
        console.log(error);
    }
  },[]);

  return (
    <>
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-4">
            <div class="row g-5 ps-5">
            <div class="col-lg-3 col-md-6">
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Quick Link</h4>
                    <a><Link class="btn btn-link" to="/aboutus">About Us</Link></a>
                    <a><Link class="btn btn-link" to="/policy">Privacy Policy</Link></a>
                    <a><Link class="btn btn-link" to="/policy">Terms & Condition</Link></a>
                    <a><Link class="btn btn-link" to="/faq">FAQs & Help</Link></a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Shahadara</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 999xx493xx</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>icodestarts@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" target='__blank' href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;2023  <Link class="border-bottom" to="/"> RidRange</Link><br/><br/>
                        All Right are Reserved
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                          <Link to="/">Home</Link>
                          <Link to="/faq">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

    </>
  )
}

export default Footer
