<template>
<div class="container-fluid bgall" style="">
    <div class="row">
      <div class="container-fluid">
        <div class="col-12 col-md-8 offset-md-2">
          <div class="container-fluid p-3 mt-3" style="background-color: #aaa">
            <div class="row">
              <div class="col-12" v-for="banner in allimage" :key="banner.no" v-if="banner.status === 'TRUE'">
                <div style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img :src="banner.image1" class="static" style="position: relative;">
                      <img :src="banner.image2" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                      <img :src="banner.image3" class="cloud">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">
                      {{banner.teks}}
                    </div>
                    <div class="col-12">
                      <div class="row my-3">
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=aktifcus(banner.urlbutton1)>{{banner.teksbutton1}}</button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=aktifcus(banner.urlbutton2)>{{banner.teksbutton2}}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            <!-- <div class="row">
              <div class="col-12 col-md-4 offset-md-4 text-center"> -->
<!--            <div v-if="section1" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="col-12">
                      <div class="row my-3">
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=aktifcus()>Ke Section 2</button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=bukaSection3()>Ke Section 3</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
<!--                 <div v-if="section2 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInLeft animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="col-12">
                      <div class="row my-3">
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=bukaSection4()>Ke Section 4</button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=bukaSection5()>Ke Section 5</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="section3 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInLeft animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="col-12">
                      <div class="row my-3">
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=bukaSection6()>Ke Section 6</button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn button-tahun" @click=bukaSection7()>Ke Section 7</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="section4 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="my-3">
                      <button type="button" class="btn button-tahun" @click=bukaSection1()>Balik Yak</button>
                    </div>
                  </div>
                </div>
                <div v-if="section5 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="my-3">
                      <button type="button" class="btn button-tahun" @click=bukaSection1()>Balik Yak</button>
                    </div>
                  </div>
                </div>
                <div v-if="section6 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="my-3">
                      <button type="button" class="btn button-tahun" @click=bukaSection1()>Balik Yak</button>
                    </div>
                  </div>
                </div>
                <div v-if="section7 == true" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <div class="box">
                      <img src="~/assets/img/bg.png" class="static" style="position: relative;"> 
                      <img src="~/assets/img/Group.png" class="cloud">
                      <img src="~/assets/img/spaceship.png" class="rockets" v-bind:class="{ 'rocketsmooth': isRocketSmooth, 'rocketcus': isRocketCus }">
                    </div>
                    <div class="text-left pt-2 px-2" style="font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="my-3">
                      <button type="button" class="btn button-tahun" @click=bukaSection1()>Balik Yak</button>
                    </div>
                  </div>
                </div> -->
<!--               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'tvriims_mobile',
  layout: 'tvriims',
  async asyncData({ app }) {
    let [univ] = await Promise.all([
      axios.get('https://ot.tirto.id/tvr/tvrreformasimei2018').then((data) => data.data)
    ])
    let result
    result = {
      allimage: univ.data.Sheet1,
      imagename: univ.data.Sheet1.text,
      audinih: univ.data.Sheet1[4].image
    }
    console.log(result.allimage)
    return result
  },
  methods: {
    openDetail(text, detail, url) {
      this.text = text
      this.detail = detail
      this.url = url
      this.kambing = true
      console.log('pressed')
    },
    closePopup() {
      this.kambing = false
    },
    colok() {
      if (this.isi === false) {
        this.isi = true
      } else {
        this.isi = false
      }
      console.log('kepencet kok')
    },
    bukaSection1() {
      if (this.section1 === false) {
        this.section1 = true
        this.section4 = false
        this.section5 = false
        this.section6 = false
        this.section7 = false
      } else {
        this.section1 = false
      }
      console.log('kepencet kok')
    },
    bukaSection2() {
      if (this.section2 === false) {
        this.section2 = true
        this.section1 = false
      } else {
        this.section2 = false
      }
      console.log('kepencet kok')
    },
    bukaSection3() {
      if (this.section3 === false) {
        this.section3 = true
        this.section1 = false
      } else {
        this.section3 = false
      }
      console.log('kepencet kok')
    },
    bukaSection4() {
      if (this.section4 === false) {
        this.section4 = true
        this.section2 = false
      } else {
        this.section4 = false
      }
      console.log('kepencet kok')
    },
    bukaSection5() {
      if (this.section5 === false) {
        this.section5 = true
        this.section2 = false
      } else {
        this.section5 = false
      }
      console.log('kepencet kok')
    },
    bukaSection6() {
      if (this.section6 === false) {
        this.section6 = true
        this.section3 = false
      } else {
        this.section6 = false
      }
      console.log('kepencet kok')
    },
    bukaSection7() {
      if (this.section7 === false) {
        this.section7 = true
        this.section3 = false
      } else {
        this.section7 = false
      }
      console.log('kepencet kok')
    },
    aktifcus(url) {
      this.isRocketCus = !this.isRocketCus
      this.isRocketSmooth = !this.isRocketSmooth
      setTimeout(() => {
        let datas = this.allimage
        datas.map((x) => {
          x.status = 'FALSE'
        })
        console.log(datas)
        this.allimage[url - 1].status = 'TRUE'
        // this.allimage[url - 2].status = 'FALSE'
      }, 3000)
      console.log(this.isRocketCus, this.isRocketSmooth)
      console.log(url)
      console.log(this.allimage[url - 1])
    }
  },
  data() {
    return {
      text: '',
      isRocketCus: false,
      isRocketSmooth: true,
      section1: true,
      section2: false,
      section3: false,
      section4: false,
      section5: false,
      section6: false,
      section7: false,
      detail: '',
      url: '',
      kambing: false,
      imagelist: {},
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        slideToClickedSlide: false,
        noSwipingSelector: '.swiper-slide',
        noSwiping: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>


<style scoped>
body{
  background:#000000;
  height: 100vh;
}
@font-face {
  font-family: 'NFS';
  src: url('~assets/css/fonts/NFS_by_JLTV.ttf'); /* IE9 Compat Modes */
  src: url('~assets/css/fonts/NFS_by_JLTV.ttf')  format('truetype'); /* Safari, Android, iOS */
}
@font-face {
  font-family: 'AMCAPS';
  src: url('~assets/css/fonts/AmericanCaptain.ttf'); /* IE9 Compat Modes */
  src: url('~assets/css/fonts/AmericanCaptain.ttf')  format('truetype'); /* Safari, Android, iOS */
}
  .my-swiper {
    height: 300px;
    width: 100%;
}
    .my-swiper.swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
      .swiper-pagination .swiper-pagination-bullet {
        background-color: red;
      }
    
    .bgall{
      /* background: url('https://mmc.tirto.id/image/2018/04/06/garage-04-logo.jpg'); */
      background:#707070;
      background-size: 100% !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      height: 100vh;
      /* overflow: hidden; */
    }
    .namecar{
      color: #fff;
      font-size: 30px;
      font-family: "AMCAPS", Arial, helvetica, sans-serif;
    }
    .button-tahun{
      width: 100%;
    }

    .barcomponent{
      /* font-family: "NFS", Arial, helvetica, sans-serif; */
      font-family: 'Rajdhani', sans-serif;
      color:#fff; display: inline-block; width: 100%;
      font-weight: bold;
    }
    .bg-cropper{
      width: 0;
      -webkit-transition: width 2s; /* Safari */
      transition: width 2s;
      max-width: 400px;
    }
    .bgcolor{
      background: red; /* For browsers that do not support gradients */
      background: -webkit-linear-gradient(left, #C2001D , #D86900, #E7E300, #008E29); /* For Safari 5.1 to 6.0 */
      background: -o-linear-gradient(right, #C2001D, #D86900, #E7E300, #008E29); /* For Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(right, #C2001D, #D86900, #E7E300, #008E29); /* For Firefox 3.6 to 15 */
      background: linear-gradient(to right, #C2001D , #D86900, #E7E300, #008E29); /* Standard syntax (must be last) */
      width: 400px;
      display: inline-block;
      height: 15px;
      border-radius: 4px;
      margin-top:0px;
      -webkit-animation-name: gradients; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
      animation: gradients 100s infinite;
      animation-duration: 4s;
    }
    .absolute{
      position: absolute;
      margin: 0 auto;
    }

    .detailpage{
      position: absolute;
      top: 0;
      color: #fff;
      background: #000;
      width: 100%;
      height: 100%;
      z-index: 11;
      left:0;
      overflow-x: hidden;
      padding-bottom: 20px;
    }
    .opendetail{
      background: rgb(0, 121, 255);
      padding: 6px 13px;
      margin: 20px 0;
      display: inline-block;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      font-family: 'Rajdhani', sans-serif;
      text-shadow: 1px 1px 1px #0075f7;
      opacity: .8;
      position: relative;
      -webkit-animation-name: examples; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
      animation: examples 100s infinite;
      animation-duration: 4s;
    }
    .opendetail:hover{
      opacity: 1;
    }

    /* Safari 4.0 - 8.0 */
    @-webkit-keyframes examples {
        0%   {background: rgb(0, 121, 255); }
        25% {background:  rgb(0, 95, 199); }
        50%   {background: rgb(0, 121, 255); }
        75% {background:  rgb(0, 95, 199); }
        100%   {background: rgb(0, 121, 255); }
    }

    /* Standard syntax */
    @keyframes examples {
        0%   {background: rgb(0, 121, 255); }
        25% {background:  rgb(0, 95, 199); }
        50%   {background: rgb(0, 121, 255); }
        75% {background:  rgb(0, 95, 199); }
        100%   {background: rgb(0, 121, 255); }
    }
    .closer{
      position: absolute;
      right: 0;
      top: 5px;
      font-size: 20px;
      opacity: 0.7;
      color: #f77;
      cursor: pointer;
    }
    .closer:hover{
      opacity: 1;
    }
    .detailcontent{
      font-family: 'Rajdhani', sans-serif;
    }
    .op8{
      opacity: .8;
    }
    .swiper-button-next, .swiper-button-prev{
      outline: none;
    }
    .awan{
      top: 165px;
    right: -150px;
    z-index: 10;
    }
    .roket{
      top: 50px;
    right: -40px;
    }

    .carrev{
      position: relative;
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation: example 100s infinite;
    animation-duration: 4s;
    }
    @-webkit-keyframes example {
        0%   { left:0px; top:0px;}
        25%  { left:2px; top:1px;}
        50%  { left:0px; top:0px;}
        75%  { left:2px; top:1px;}
        100% { left:0px; top:0px;}
    }

    /* Standard syntax */
    @keyframes example {
        0%   { left:0px; top:0px;}
        25%  { left:2px; top:1px;}
        50%  { left:0px; top:0px;}
        75%  { left:2px; top:1px;}
        100% { left:0px; top:0px;}
    }

    .rocketsmooth{
      position: relative;
    -webkit-animation-name: mulus; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation: mulus 100s infinite;
    animation-duration: 4s;
    }
    @-webkit-keyframes mulus {
        0%   { left:100px; top:0px;}
        25%  { left:2px; top:1px;}
        50%  { left:0px; top:0px;}
        75%  { left:2px; top:1px;}
        100% { left:0px; top:0px;}
    }

    /* Standard syntax */
    @keyframes mulus {
        0%   { left:80px; top:10px;}
        25%  { left:75px; top:8px;}
        50%  { left:80px; top:10px;}
        75%  { left:75px; top:8px;}
        100% { left:80px; top:10px;}
    }

    .rocketcus{
      position: relative;
    -webkit-animation-name: cus; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation: cus 100s infinite;
    animation-duration: 2s;
    }
    @-webkit-keyframes cus {
        0%   { left:100px; top:0px;}
        25%  { left:2px; top:1px;}
        50%  { left:0px; top:0px;}
        75%  { left:2px; top:1px;}
        100% { left:0px; top:0px;}
    }

    /* Standard syntax */
    @keyframes cus {
        0%   { left:80px; top:10px;}
        25%  { left:75px; top:8px;}
        50%  { left:80px; top:10px;}
        75%  { left:75px; top:8px;}
        100% { left:80px; top:-10000px;}
    }


    /* .super-circle{
      border: 20px solid #fff;
      height: 135px;
      position: absolute;
      width: 135px;
      margin-top:45%;
      left:40%;
      border-radius: 100%;
      top: 0;
      -ms-transform: skewX(280deg); 
      -webkit-transform: skewX(280deg);
      transform: skewX(280deg);
    } */

.box {
/* The box that will responsively resize */
border: 1px solid transparent;
position: relative;
}
.box img {
  display: block;
}
.box .static {
  /* The static image helps responsively resizing the bounding box correctly */ 
  width: 100%;
  height: auto;
}

.box .cloud {
  /* Placing the cat absolutely and with percentage values makes it responsive within the bounding box */
  position: absolute;
  top: 43%;
  left: 2%;
  width: 97%;
  height: auto;
  z-index: 2;
}
.box .rockets {
  position: absolute;
  top: 5%;
  left: 29%;
  width: 45%;
  color: #fff;
  font-family: sans-serif;
}
header {
    height: 50px;
    top: 0;
    transition: top 0.2s ease-in-out;
    width: 100%;
    z-index: 100;
}
.headers{
  background-color: #fff;
}
.dropdown-menu.show{
    border-radius: 10px;
    position: absolute !important;
    margin-left: -74px !important;
}
.dropdown-item{
    font-size:14px;
    color: #6d6d6d !important;
    -webkit-appearance: none !important;
}
.tombol{
    width:40px;
    background:#fff;
    color:#aaa;
    border-color:#fff;
    margin-left:15px;
    margin-top:5px;
    margin-bottom:15px;
    padding-top:2px;
    padding-bottom:2px;
    border-radius:5px;
    font-size:23px;
}
.logo-tirto{
    width:110px;
    padding-top:7px
}
.nav-up {
  top: -50px!important;
  transition: top .2s ease-in-out!important;
}
</style>