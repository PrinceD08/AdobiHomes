<template>
  <div id="contact">
    <div id="contactHeader">
    <p style="color: orangered;">LET’S MAKE IT HOME</p>
    <h1>A conversation.</h1>
    <h1>A new beginning.</h1>
    <p>Whether you’re looking for your first home, more room to grow, or your next investment, we’d love to help.</p>
    </div>
    <section id=section>
      <div id="section1">
        <p style="font-size: 200%; font-weight: 900;">Adobi Homes Nigeria</p>
        <p>Curated properties across three of Nigeria’s most sought-after cities.</p>
        <p>Lagos</p> <hr>
        <p>Abuja</p> <hr>
        <p>Port Harcourt</p> <hr>
        <div section id="contactInfo">
          <p style="font-weight: 700;">Direct enquiries coming soon</p>
          <p>Our phone number, email, office address, and WhatsApp contact are awaiting confirmation. Please check back for direct contact details.</p>
        </div>
        <p id="find">Find your next home</p>
      </div>
      <div id="section2">
        <img src="/images/adobi-duplex.jpg" alt="">
      </div>
    </section>

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
  </div>
</template>
<style scoped>
#contactHeader {
  margin: 5%;
  margin-top: 15%;
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
#contactInfo{
  background-color: rgb(180, 180, 180);
  padding: 2% 5%;
  border-left: 10px solid orangered;
}
#find{
  background-color: orangered;
  color: white;
  display: inline-block;
  padding: 3% 5%;
  border-radius: 0.3em;
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
}
</style>