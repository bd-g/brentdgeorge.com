<template>
  <div class="light-content">   
    <div class="text-background">
      <div class="text-accent">
        <div class="text-container">
          <div class="eighty-width">
            <h2>My Resume</h2>
            <h5>A short intro to my body of work so far</h5>
            <p>We've all heard the saying "don't judge a book by it's cover". Well, I encourage you to read my resume,
              but also to reach out and get to know me! I think you'll learn a lot more about both my experience as well
              as my character, and I'd love to make a new friend. Reach out on LinkedIn or by email, both listed on my resume.</p>
            <button type="submit" class="resume-download" onclick="window.open('./Brent_George_Resume_2020_09_09.pdf')">
                Download <i class="fa fa-file-pdf-o" style="font-size:20px;color:red"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume"
}
</script>

<style scoped>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  p {
    text-align: justify;
  }

  .eighty-width {
    width: 80%;
  }

  .eighty-width * {
    padding: 10px;
  }
  
  .resume-download, .resume-download * {
    padding: 0;
  }

</style>