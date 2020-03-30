import { Component, OnInit } from '@angular/core';
import { LoadCssService } from 'src/app/service/loadCss/load-css.service';
import { QuanlythanhvienService } from 'src/app/service/quanlythanhvien/quanlythanhvien.service';
import * as $ from 'jquery';
declare var $: any;
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Thanhvien } from 'src/app/model/thanhvien';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {

  currentUser: AuthLoginInfo;
  current = '';
  isLogin = false;
  thanhVien: Thanhvien = new Thanhvien();
  constructor(private router: Router, private tokenStorage: TokenStorageService, private loadCss: LoadCssService,
    private thanhVienService: QuanlythanhvienService) {
    loadCss.loadCss('assets/css/bootstrap.css');
    loadCss.loadCss('assets/vendors/linericon/style.css');
    loadCss.loadCss('assets/css/font-awesome.min.css');
    loadCss.loadCss('assets/vendors/owl-carousel/owl.carousel.min.css');
    loadCss.loadCss('assets/vendors/lightbox/simpleLightbox.css');
    loadCss.loadCss('assets/vendors/nice-select/css/nice-select.css');
    loadCss.loadCss('assets/vendors/animate-css/animate.css');
    loadCss.loadCss('assets/vendors/popup/magnific-popup.css');
    loadCss.loadCss('assets/css/style.css');
    loadCss.loadCss('assets/css/responsive.css');
    loadCss.loadScript('assets/js/jquery-3.3.1.min.js');
    loadCss.loadScript('assets/js/popper.js');
    loadCss.loadScript('assets/js/bootstrap.min.js');
    loadCss.loadScript('assets/js/stellar.js');
    loadCss.loadScript('assets/vendors/lightbox/simpleLightbox.min.js');
    loadCss.loadScript('assets/vendors/nice-select/js/jquery.nice-select.min.js');
    loadCss.loadScript('assets/vendors/isotope/imagesloaded.pkgd.min.js');
    loadCss.loadScript('assets/vendors/isotope/isotope.pkgd.min.js');
    loadCss.loadScript('assets/vendors/owl-carousel/owl.carousel.min.js');
    loadCss.loadScript('assets/vendors/popup/jquery.magnific-popup.min.js');
    loadCss.loadScript('assets/js/jquery.ajaxchimp.min.js');
    loadCss.loadScript('assets/vendors/counter-up/jquery.waypoints.min.js');
    loadCss.loadScript('assets/vendors/counter-up/jquery.counterup.js');
    loadCss.loadScript('assets/js/mail-script.js');
    loadCss.loadScript('assets/js/theme.js');
  }

  ngOnInit() {
    var nav_offset_top = $('header').height() + 50;
    function navbarFixed() {
      if ($('.header_area').length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $('.header_area').addClass('navbar_fixed');
          } else {
            $('.header_area').removeClass('navbar_fixed');
          }
        });
      }
    }
    navbarFixed();
    this.current = this.tokenStorage.getUsername();
    if (this.tokenStorage.getUsername() !== null) {
      this.isLogin = true;
      this.getThanhvien();
    } else {
      this.isLogin = false;
    }
    console.log(this.isLogin);
  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
    this.isLogin = false;
    console.log(this.tokenStorage.getUsername());
  }
  getThanhvien() {
    this.thanhVienService.getThanhVienByUser(this.tokenStorage.getUsername()).subscribe(
      data => {
        this.thanhVien = data;
      }
    );
  }
}
