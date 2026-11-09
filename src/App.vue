<script setup>
import { ref } from 'vue'
const isHidden = ref(true)
</script>
<template>
  <div id="header">
    <div id="headerIcon">
      <img src="/images/house.svg" alt="">
    </div>
    <div id="headerText">
      <p id="Header">Adobi Homes</p>
      <p>Exceptional Homes. Real Possibilities. </p>
    </div>
    <nav :class="{ hidden: isHidden }" id="headerLink">
      <div id="navText">
        <p style="font-weight: bold; font-size: 150%; margin: 1% 0;">Adobi Homes</p>
        <p>Your Next Chapter Starts Here</p>
      </div>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/About" class="link">About</router-link>
      <router-link to="/Contact" class="link">Contact</router-link>
      <router-link to="/Properties" class="link">Properties</router-link>
    </nav>
    <p id="letsTalk">Let's Talk ⟶</p>
    <div @click="isHidden = !isHidden" id="down">
      <img src="/images/grip.svg" alt="">
    </div>
  </div>
    <router-view />
</template>
<style>
#headerIcon {
  display: inline-block;
  padding: 2%;
  background-color: orangered;
  border-radius: 50%;
  margin: 0 2%;
}
#navText{
  display: none;
}
#headerText {
  display: inline-block;
}
#header {
  color: black;
  padding-top: 1%;
  position: fixed;
  z-index: 1;
  top: 0cap;
  width: 90%;
  backdrop-filter: blur(30px);
  margin-top: 2%;
  border-radius: 1em;
  margin-left: 2%;
  margin-right: 2%;
}
#Header{
  font-size: 200%;
  font-weight: 100;
  margin: 1% 0;
}
#headerText {
  display: inline-block;
}
nav{
  display: inline-block;
  margin-left: 25%;
  width: 35%;
}

.link{
  text-decoration: none;
  color: black;
  font-size: 120%;
  margin: 0 4%;

}
#letsTalk {
  display: inline-block;
  background-color: orangered;
  padding: 1% 2%;
  border-radius: 1em;
}
#letsTalk:hover {
  background-color: rgb(255, 93, 35);
}
#down{
  display: none;
}
@media (max-width: 940px) and (orientation: portrait){
  #down{
    display: inline-block;
    margin-left: 10%;
    z-index: 5;
    position: absolute;
    margin-top: 1%;
  }
  .hidden {
  display: none;
  }
  #letsTalk{
    display: none;
  }
  #navText{
    display: contents;
  }
  nav{
    position: absolute;
    right: 0;
    background-color: white;
    height: 60em;
    width: 90%;
    padding-left: 3%;
    padding-top: 5%;
    font-size: 130%;
    margin-right: -5%;
    margin-top: -3.5%;
  }
  .link{
    display: block;
    margin: 9%;
    border-bottom: 1px solid rgb(111, 111, 111);
    padding-bottom: 5%;
  }
}
</style>