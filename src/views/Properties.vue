<script setup>
import { ref } from 'vue'
import propertyData from "@/data/property.json"
const property1 = propertyData.property.find((item) => item.id === 1)
const property2 = propertyData.property.find((item) => item.id === 2)
const property3 = propertyData.property.find((item) => item.id === 3)
const property4 = propertyData.property.find((item) => item.id === 4)
const property5 = propertyData.property.find((item) => item.id === 5)
const property6 = propertyData.property.find((item) => item.id === 6)
const location = ref('')
const propertyType = ref('')
const priceRange = ref('')
</script>
<template>
  <div id="properties">
    <section id="section1">
      <div id="section1TextContainer">
        <p style="color: orangered;">A PLACE TO CALL YOUR OWN</p>
        <h1>A PLACE TO CALL YOUR OWN</h1>
        <p>Thoughtfully selected homes in exceptional neighbourhoods. Discover a property that feels like your next chapter.</p>
        </div>
        <div id="searchBar">
            <div id="location">
                <div id="locationIcon">
                    <img src="/images/map-pin.svg" alt="">
                </div>
                <div id="locationInput">
                <p>Location</p>
                <select id="locationsOptions" v-model="location">
                    <option value="">Select Location</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                </select>
                </div>
            </div>
            <div id="propertyTypes">
                <div id="propertyTypeIcon">
                    <img src="/images/hotel.svg" alt="">
                </div>
                <div id="propertyTypeInput">
                <p>Property Type</p>
                <select id="propertyTypesOptions" v-model="propertyType">
                    <option value="">Select Property Type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Duplex">Duplex</option>
                </select>
                </div>
            </div>
            <div id="priceRange">
                <div id="priceRangeIcon">
                    <img src="/images/wallet-minimal.svg" alt="">
                </div>
                <div id="priceRangeInput">
                <p>Price Range</p>
                <select id="priceRangeOptions" v-model="priceRange">
                    <option value="">Select Price Range</option>
                    <option value="1000000-5000000">₦1,000,000 - ₦5,000,000</option>
                    <option value="5000000-10000000">₦5,000,000 - ₦10,000,000</option>
                    <option value="10000000-20000000">Over ₦10,000,000 </option>
                </select>
                </div>
                </div>

                    <p id="searchButton">🔍 Search ⟶</p>
        </div>
      </section>

        <section id="section2">
            <div id="section2Header">
                <p class="colorOrange">CURATED FOR YOUR NEXT CHAPTER</p>
                <h2>Featured Properties</h2>
                <p>Discover exceptional homes in Nigeria’s most sought-after neighbourhoods.</p>
            </div>
            <div class="section2Container">
                <div class="part1">
                <img class="section2ImgContainer" :src="property1.image" :alt="property1.propertyName" />
                </div>
                <div class="part2">
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property1.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property1.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property1.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property1.beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property1.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property1.size }}</p>
                </div>
                <hr>
                <p style="font-size: 220%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property1.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
                </div>
            </div>

            <div class="section2Container">
                <img class="section2ImgContainer" :src="property2.image" :alt="property2.propertyName" />
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property2.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property2.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property2.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property2.beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property2.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property2.size }}</p>
                </div>
                <hr>
                <p style="font-size: 200%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property2.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
            </div>

            <div class="section2Container">
                <img class="section2ImgContainer" :src="property3.image" :alt="property3.propertyName" />
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property3.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property3.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property3.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property3.beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property3.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property3.size }}</p>
                </div>
                <hr>
                <p style="font-size: 200%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property3.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
            </div>

            <div class="section2Container">
                <img class="section2ImgContainer" :src="property4.image" :alt="property4.propertyName" />
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property4.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property4.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property4.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property4.beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property4.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property4.size }}</p>
                </div>
                <hr>
                <p style="font-size: 200%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property4.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
            </div>

            <div class="section2Container">
                <img class="section2ImgContainer" :src="property5.image" :alt="property5.propertyName" />
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property5.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property5.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property5.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property5.beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property5.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property5.size }}</p>
                </div>
                <hr>
                <p style="font-size: 200%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property5.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
            </div>

            <div class="section2Container">
                <img class="section2ImgContainer" :src="property6.image" :alt="property6.propertyName" />
                <p style="margin-left: 6%;"><span class="colorOrange">{{ property6.propertyType }}</span></p>
                <p style="font-size: 150%; font-weight: 900; margin-left: 6%;">{{ property6.propertyName }}</p>
                <p style="margin-left: 6%;">{{ property6.propertyLocation }}</p>
                <div style="width: 100%;margin-left: 6%;">
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bed.svg" alt=""> {{ property6    .beds }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/bath.svg" alt=""> {{ property6.baths }}</p>
                    <p style="display: inline-block; margin: 0% 4%;"><img style="width: 20%;" src="/images/brackets.svg" alt=""> {{ property6.size }}</p>
                </div>
                <hr>
                <p style="font-size: 200%;font-weight: 900;margin: 2%  0%; margin-left: 6%;">{{ property6.price }}</p>

                <p id="whatsapp">Contact Via Whatsapp</p>
                <p id="details">View Details</p>
            </div>
        </section>
        <footer>
            <div id="footer1">
            <p class="colorOrange">LET’S MAKE IT HOME</p>
            <p style="font-size: 250%;margin: 1% 0; display: inline-block;">Your next chapter starts here.</p> <p id="swaAgent">Speak with an agent ⟶</p>
            <p style="color: black;">Tell us what home looks like to you. We’ll help you find it.</p>
            </div>
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
#section1TextContainer{
  text-align: center;
  display: inline-block;
}
#section1{
  margin-top: 20%;
  text-align: center;
}
#searchBar{
    width: 80%;
    margin: 0 10%;
    background-color: white;
    color: black;
    border-radius: 1em;
    box-shadow : 0 0 5px orangered;
}
select{
    width: 100%;
    border: 0px solid white;
}
#location, #propertyTypes, #priceRange{
    width: 25%;
    display: inline-block;
}
#locationIcon, #propertyTypeIcon, #priceRangeIcon{
    display: inline-block;
    text-align: center;
    padding: 10%;
    width: 10%;
}
#locationInput, #propertyTypeInput, #priceRangeInput{
    display: inline-block;
}
#searchButton{
    background-color: orangered;
    color: white;
    border-radius: 1em;
    padding: 2% 5%;
    display: inline-block;
    text-align: center;
    margin: 2%;
}
#section1TextContainer{
    width: 100%;
}
#section1FooterText{
    width: 100%;
    background-color: white;
    color: black;
}
.trust {
    width: 20%;
    display: inline-block;
    text-align: center;
}
#section2Header{
    padding-left: 5%;
}
.part1{
    display:flex;
    z-index: 3;
}
.part2{
    z-index: 2;
}
h2{
    font-size: 250%;
    font-weight: 100;
    margin: 1% 0;
}
.section2ImgContainer {
    width: 100%;
    overflow: hidden;
    border-radius: 0.5em;
}
.section2ImgContainer:hover {
    overflow: hidden;
    transform: scale(1.05);
    transition: 0.5s;
}
hr {
    margin: 0% 5%;
}
.section2Container {
    width: 40%;
    display: inline-block;
    border: solid 1px rgb(177, 176, 176);
    border-radius: 0.5em;
    margin: 2% 0;
    margin-left: 6%;
    overflow: hidden;
    color: rgb(55, 54, 54);
}
.section2Container:hover {
    box-shadow: 0 0 20px rgb(184, 184, 184);
    transition: 0.5s;
    transform:translateY(-6px)
}
#whatsapp {
    display: inline-block;
    background-color: darkgreen;
    padding: 3% 0;
    width: 47%;
    text-align: center;
    border-radius: 0.5em;
    margin-left: 2%;
    color: white;
}
#whatsapp:hover {
    background-color: green;
}
#details {
    display: inline-block;
    margin-left: 1%;
    background-color: rgb(163, 162, 162);
    width: 47%;
    padding: 3% 0;
    text-align: center;
    border-radius: 0.5em;
    color: black;
}
#details:hover {
    background-color: rgb(128, 128, 128);
}
#footer1{
    background-color: rgb(226, 238, 253);
    padding: 2% 5%;
}
#swaAgent{
    background-color: orangered;
    display: inline-block;
    margin-left: 40%;
    padding: 1% 3%;
    border-radius: 0.5em;
    color: white;
}
.row{
    width: 30%;
    display: inline-block;
}
#footerLogo{
    width: 2%;
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
    #searchBar{
        margin: 3% auto;
        width: 92%;
        border-radius: 0.6em;
    }
    #locationIcon, #propertyTypeIcon, #priceRangeIcon{
        width: 1%;
    }
    #location, #propertyTypes, #priceRange{
        display: block;
        width: 100%;
        text-align: left;
        margin: 0;
        height: 5em;
        border-bottom: 1px solid rgb(177, 176, 176);
    }
    #searchButton{
        margin: 6% 3%;
        padding: 5% 5%;
        display: block;
        border-radius: 0.6em;
    }
    .section2Container {
        width: 90%;
        display: block;
        margin: 3% auto;
    }
    #swaAgent{
        display: block;
        margin: 3% 0;
        width: 50%;
        padding: 5% 3%;
        text-align: center;
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
}
</style>