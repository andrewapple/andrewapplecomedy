<?php
if($_POST["message"]) {

mail("andrewdapple@gmail.com", "SAY HEY FORM SUBMISSION",

$_POST["insert your message here"]. "From: an@email.address");

}
?><!DOCTYPE html>
<!--
<form method="post" action="subscriberform.php">


<textarea name="message"></textarea>


<input type="submit">


</form>
-->
<html>
  <head>
    <link rel="stylesheet" href="resources/css/styles.css" >
  </head>
  <body> 
     <!-- Header -->

     <section class="header">
      <div class="logo">
        <a href="index.html">
          <img src="resources/logos/andrew.png">
        </a>
      </div>
      </section> 
    

    <!-- Navigation -->

    <nav class="main-nav" align="center">
      <nav class="main-nav" >
        <ul class="nav2">
          <li><a href="index.html" class="fordeco">bio</a></li>
          <li><a href="shows.html" class="fordeco">shows</a></li>
          <li><a href="writing samples.html" class="fordeco">writing samples</a></li>
          <li><a href="photos.html" class="fordeco">photos</a></li>
          <li><a href="clips.html" class="fordeco">clips</a></li>
          <li><a href="book me.html" class="fordeco">book me</a></li>
          <li><a href="say hey.html" class="fordeco">say hey</a></li>
        </ul>
    </nav>
      <!-- Contact Form-->
      <section class="form">
        <form method="post" action="sayheyform.php">
          <label for="fname">First Name:</label><br>
          <input type="text" id="fname" name="fname"><br>
          <label for="lname">Last Name:</label><br>
          <input type="text" id="lname" name="lname"><br>
          <label for="email">Your Email:</label><br>
          <input type="text" id="email" name="email"><br>

          <label for="message">I'll go first. What's up?</label>
          <br>
          <textarea id="message" name="message" placeholder="Psst! This is where you answer? :)"></textarea>
          <br>
          <input class="subbutton" type="submit" value="submit">
        </form>
      </section>

      <!-- Social Links-->

    <section class="socials">
      
      <a href="https://www.instagram.com/andrew_apple/">
        <img class="icon" src="resources/social media icons/instagram.png">
      </a>
  
      <a href="https://twitter.com/andrew__apple">
        <img class="icon" src="resources/social media icons/twitter.png">
      </a>
    
      <a href="https://www.facebook.com/andrewapplecomedy/">
        <img class="icon" src="resources/social media icons/facebook.png">
      </a>
   
      <a href="https://www.instagram.com/andrew_apple/">
        <img class="icon" src="resources/social media icons/tiktok.png">
      </a>
   
      <a href="https://www.youtube.com/channel/UCbNyDMc6tsVAiFaS0v8Qcqg">
        <img class="icon" src="resources/social media icons/youtube.png">
      </a>
  
      <a href="https://www.reddit.com/user/andrew_apple">
        <img class="icon" src="resources/social media icons/reddit.png">
      </a>
    
  </section>

  <!-- Footer -->

  <div class="footer">
    <p>© Andrew Apple Comedy 2022</p>
    <p>© Bearshark Films</p>
  </div>

  </body>
</html>