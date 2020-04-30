<template>
  <div class="light-content">
    <div class="text-background">
      <div class="text-accent">
        <div class="map-container">
          <h2>My Life Map</h2>
          <h5>For the visual learners out there</h5>
          <div class="map no-mobile">
            <div class="top-map">
              <p>2) My family moved to Michigan when I was very young and I grew up there in the 
                suburbs of Detroit.
              </p>
            </div>
            <div class="middle-map">
              <p>1) I was born in Utah, though I didn't stay for long.</p>
              <img class="map-img" src="@/assets/combinedMap.jpg">
              <p>3) When I graduated high school, I moved to the great country of the Philippines! I lived here for two years serving
                a mission for the <a class="black-link" href="https://www.comeuntochrist.org" target="_blank">
                Church of Jesus Christ of Latter-Day Saints.</a>
              </p>
            </div>
            <div class="bottom-map">
              <p>Fun fact: My wife is from Texas - that's where my love of Southern BBQ comes from!</p>
              <p class="ten-width no-mobile">&nbsp;</p>
              <p>4) After my mission, I moved back to Utah to attend college at BYU, and that is where
                I work and study now!
              </p>
            </div>  
          </div>
          <div class="map no-desktop">
            <img class="mobile-map-img" src="@/assets/combinedMap.jpg">
            <p>
              1) I was born in Utah, though I didn't stay for long.
            </p>
            <p>
              2) My family moved to Michigan when I was very young and I grew up there in the 
                suburbs of Detroit.
            </p>
            <p>
              3) When I graduated high school, I moved to the great country of the Philippines! I lived here for two years serving
                a mission for the <a class="black-link" href="https://www.comeuntochrist.org" target="_blank">
                Church of Jesus Christ of Latter-Day Saints.</a>
            </p>
            <p>
              4) After my mission, I moved back to Utah to attend college at BYU, and that is where
              I work and study now!
            </p>
            <p>
              Fun fact: My wife is from Texas - that's where my love of Southern BBQ comes from!
            </p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeMap'
}

</script>

<style scoped>
.map {
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin: 50px 20px 50px 20px;
}

.top-map p, .middle-map p, .bottom-map p{
  font-size: 80%;
  flex: 1;
  margin: 0;
}

.top-map{
  display: flex;
  justify-content: flex-end;
  width: 25%;
}
.middle-map {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bottom-map{
  max-width: 50%;
  display: flex;
  flex-direction: row;
}

.ten-width{
  max-width: 10%;
}

.black-link {
  color:  black;
  text-decoration: underline;
}

.black-link:hover {
  color: #45A29E;
  text-decoration-color: #45A29E;
}

.map-img {
  max-width: 60%;
  flex: 5;
}

@media only screen and (min-width: 960px){
  .no-desktop {
     display: none;
  }
}


@media only screen and (max-width: 959px){
  .no-mobile {
    display: none;
  }

 .mobile-map-img {
    width: 90%;
    margin: 0 0 25px;
  }
}

</style>