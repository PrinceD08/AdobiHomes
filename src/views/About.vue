<template>
  <div id="about">
    <div id="aboutHeader">
      <p style="color: orangered;">THE ADOBI HOMES APPROACH</p>
      <h1>More than a property.</h1>
      <h1>A place to belong.</h1>
      <p>Finding a home is personal. We believe your property journey should be, too.</p>
    </div>
    <section>
      <div id="section1">
        <img src="/images/adobi-villa.jpg" alt="">
      </div>
      <div id="section2">
        <p style="font-size: 250%;font-weight: 600; margin: 2% 0;">Local knowledge.</p>
        <p style="font-size: 250%;font-weight: 600; margin: 2% 0;">A thoughtful perspective.</p>
        <p>Adobi Homes connects people with homes in Lagos, Abuja, and Port Harcourt. From contemporary duplexes to comfortable apartments, our focus is on spaces that suit your life.</p>
        <p style="font-weight: 900;">Confidence in every step</p>
        <p>Clear information and careful attention to each property.</p>
        <p style="font-weight: 900;">A genuine sense of place</p>
        <p>Neighbourhoods that offer more than just an address.</p>
        <p style="font-weight: 900;">A personal connection</p>
        <p>Your priorities at the heart of the conversation.</p>
      </div>
    </section>
  </div>

  <footer>
    <div id="footer2">
                <div class="row" id="row1">
                    <img id="footerLogo" src="/images/house.svg" alt="">
                    <p style="font-size: 150%;display: inline-block; margin-left: 13%;">Adobi Homes</p>
                    <p>Exceptional Homes .Real Possibilities</p>
                    <p>Exceptional spaces.</p>
                    <p>A place to call your own.</p>
                </div>
                <div class="row" id="row2">
                    <p>Explore</p>
                    <p>Home</p>
                    <p>Properties</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div class="row">
                    <p>Find us in Nigeria</p>
                    <p>Lagos · Abuja · Port Harcourt</p>
                    <p>Speak with our team</p>
                    <p>Your next home is closer than you think.</p>
                </div>
            
            <hr>
            <p id="copyright">&copy;  2024 Adobi Homes Nigeria Ltd. All rights reserved.</p>
            </div>
  </footer>
</template>
<style scoped>
#aboutHeader {
  margin: 5%;
}
#about {
  margin-top: 13%;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}
#section1, #section2 {
  width: 40%;
  display: inline-block;
  margin: auto 5%;
}
hr{
  margin: 2% 5%;
}
.row{
    width: 30%;
    display: inline-block;
}
#footerLogo{
    width: 2%;
    height: 2%;
    background-color: orangered;
    padding: 1%;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    margin-top: 1%;
    margin-left: -1%;
}
#row1{
    padding-left: 7%;
}
#footer2{
    background-color: rgb(3, 20, 40);
    padding: 2% 0;
    color: rgb(231, 232, 255);
}
#copyright{
    padding-left: 5%;
    margin-top: 2%;
    margin-bottom: 0;
}
@media (max-width: 940px) and (orientation: portrait){
  #section1, #section2{
    display: block;
    width: 99%;
    margin: 0;
  }
  #row1{
        width: 90%;
        display: block;
        margin: 3% auto;
    }
    #footerLogo{
        width: 5%;
        margin-left: 3%;
        margin-top: 4%;
    }
    #row2, #row3{
        width: 40%;
        margin: 3% auto;
        text-align: left;
        padding-left: 7%;
    }
    #copyright{
        margin: 8% 0;
    }
}
</style>
