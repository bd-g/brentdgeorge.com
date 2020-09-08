<template>
  <div class="home">
    <h1 class="mint light buffered">BRENT GEORGE</h1>
    <h4 class="light-grey">BYU Computer Engineering / Select Bankcard Engineering Department</h4>
    <div class="header-text">Computer engineering student. Engaged and self-driven professional who learns and adapts quickly. <br/> Currently working as a software developer at Select Bankcard in Lehi, Utah.
    </div>
    <div class="info-bar-wrapper">
      <div class="info-bar">
        <div class="info-bar-row">
          <div class="info-bar-block">
            <h4 class="info-heading light-grey">Projects</h4>
            <ul class="box-bullet-seperated">
              <li class = "box-text">Eliminated 1.5 hours of daily tasks with custom C#/SQL automation services<br/>Included Windows services, GUIs, and SQL stored procedures and schemas</li>
              <li class = "box-text">Developed automated workflow to generate, send out, and request signatures on Engagement Letters for Scalar LLC</li>
              <li class = "box-text">Researched capabilities of various distributed run-time applications for use in Azure Cloud for Event Streaming service handling millions of events per day</li>
              <li class = "box-text">Created UWP Flashcard app with feature to automate creation of flashcards from student notes</li>
            </ul>
          </div>
          <div class="info-bar-block">
            <h4 class="info-heading light-grey">Experience</h4>
            <ul class="box-bullet-seperated">
              <li class = "box-text">Select Bankcard - Software Development Intern<br/><em>May 2020 - Present</em></li>
              <li class = "box-text">Utah Underwater Robotics - Executive Director<br/><em>February 2019 - Present</em></li>
              <li class = "box-text">Navitaire, an Amadeus company - Cloud Solutions Intern<br/><em>October 2019 - April 2020</em></li>
              <li class = "box-text">Scalar LLC - Software Development Intern<br/><em>January 2019 - October 2019</em></li>
            </ul>
          </div>
        </div>
        <div class="info-bar-row">
          <div class="info-bar-block">
            <h4 class="info-heading light-grey">Contact</h4>
            <div class = "box-bullet">
              <li class = "box-text">Email: <a class = "base-link" href="mailto:brentdgeorge1@gmail.com" target="_blank">brentdgeorge1@gmail.com</a></li>
              <li class = "box-text"><a class = "base-link" href="https://www.github.com/bd-g" target="_blank">Github</a></li>
              <li class = "box-text"><a class = "base-link" href="https://www.linkedin.com/in/brent-d-george/" target="_blank">LinkedIn</a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>


<style scoped>
* {
  color: #C5C6C7;
}

.mint {
  color: #66FCF1;
}

.light-grey {
  color: #C5C6C7;
}

.buffered {
  margin: 30px 0px 30px;
}

.light {
  font-weight: 300;
}

h1 {
  text-align: center;
  font-size: 5em;
}

h2 {
  text-align: center;
  font-size: 3em;
}

h3 {
  text-align: center;
  font-size: 1.8em;
}

h4 {
  text-align: center;
  font-size: 1.4em;
  margin: 10px;
}

h5 {
  text-align: center;
  font-size: 1.2em;
  margin: 10px;
}

.info-bar-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 10px 50px 10px;
}

.info-bar {
  display: flex;
  flex-direction: column;
  width: 75%;
  border-color: #66FCF1;
  border-style: solid;
  border-width: 2px 0 0 0;
}

.info-bar-row {
  display: flex;
  border-color: #66FCF1;
  border-style: solid;
  border-width: 0 0 2px 2px;
}             /*top R B  L*/

.info-bar-block {
  border-color: #66FCF1;
  border-style: solid;
  border-width: 0  2px 0 0;
  padding: 10px;
  flex: 1;
}

.box-text {
  color: #C5C6C7;
  line-height: 150%; 
  font-size: 1.1em; 
  text-align: center;
}

.box-bullet-seperated, .box-bullet {
  list-style: none;
}

.box-bullet-seperated li {
  border-bottom: 1px solid #C5C6C7;
  padding: 10px;
}

.box-bullet-seperated li:last-child {
  border: none;
}

.base-link {
  color: #45A29E;
}

.base-link:hover {
  color: #C5C6C7;
}

/* Mobile Styles */
@media only screen and (max-width: 959px) {
  .info-bar {
    width: 95%;
    border-color: #66FCF1;
    border-style: solid;
    border-width: 2px 0 0 0;
  }
  
  .info-bar-row {
    flex-direction: column;
    border: none;
  }
  
  .info-bar-block {
    border-color: #66FCF1;
    border-style: solid;
    border-width: 0  2px 2px 2px;
  }
}


</style>
