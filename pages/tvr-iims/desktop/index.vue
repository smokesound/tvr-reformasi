<template>
  <div class="container-fluid bgall" style="">
    <div class="row">
      <div class="container-fluid"> 
        <div class="col-12">
          <div class="container-fluid">
            <div class="row">
              <div class="offset-4 col-2">
                <div v-if="isi" style="color:#fff; vertical-align: center;">
                  <div class="bounceInRight animated">
                    <img src="../assets/img/bg.png" class="" style="position: relative;"> 
                    <img src="../assets/img/Group.png" class="absolute awan">
                    <img src="../assets/img/spaceship.png" class="absolute roket animated infinite shake">
                    <div>
                      <button type="button" class="btn button-tahun" @click=colok()>Pencet Jing</button>
                    </div>
                  </div>
                </div>
                <div v-else class="bounceInLeft animated" style="color:#fff">
                  <div>
                    <button type="button" class="btn button-tahun" @click=colok()>Pencet su</button>
                  </div>   
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12" style="text-align: center">
              <div class="opendetail" @click="openDetail(banner.text, banner.detail, banner.image)">See Details</div>
              <div>
                <button type="button" class="btn button-tahun" @click=colok()>Pencet Jing</button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ app }) {
    let [univ] = await Promise.all([
      axios.get('https://ot.tirto.id/tvr/tvriimsapril2018').then((data) => data.data)
    ])
    let result
    result = {
      allimage: univ.data.Sheet1,
      imagename: univ.data.Sheet1.text,
      audinih: univ.data.Sheet1[4].image
    }
    console.log(result.audinih)
    return result
  },
  methods: {
    openDetail(text, detail, url) {
      this.text = text
      this.detail = detail
      this.url = url
      this.kambing = true
      console.log("pressed")
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
      console.log("kepencet kok")
    }
  },
  data() {
    return {
      text: '',
      isi: false,
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
        noSwiping : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
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
  background:#000000;
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
</style>