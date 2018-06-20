<!DOCTYPE html>
<html lang="en">
<?php require 'module/head.php' ?>

<body class="page1">
    <div class="headerImg">
      <div class="textBox">
        <div class="border">
          <h1 style="animation: textBounce 0.4s linear 0.4s; animation-fill-mode: forwards;">Welcome to my Portfolio</h1>
          <h1 style="animation: textBounce 0.4s linear 0.8s; animation-fill-mode: forwards;">I'm Oanh Tran</h1>
        </div>
      </div>
        <a onclick="down()" class="button"></a>
    </div>
    <br><br><br>
    <div class="home flex-h">
        <div>
            <div class="aboutMe">
                <a href="aboutme.php">
                           <img src="img/aboutmeIcon.png" alt="" >
                        <div class="middle">
                            <p class="recheader1"><span>About Me</span></p>
                        </div>
                       </a>
            </div>
            <div class="aboutMe">
                <a href="program.php">
                           <img src="img/ProgrammingIcon.png" alt="">
                        <div class="middle">
                            <p class="recheader1"><span>Programming</span></p>
                        </div>
                       </a>

            </div>
        </div>

        <div>
            <div class="aboutMe">
                <a href="resume.php">
                           <img src="img/resumeIcon.png" alt="">
                        <div class="middle">
                            <p class="recheader1"><span>Resume</span></p>
                        </div>
                       </a>
            </div>
            <div class="aboutMe">
                <a href="writting.php"><img src="img/WrittingIcon.png" alt="">
                        <div class="middle">
                            <p class="recheader1"><span>Writting</span></p>
                        </div>
                        </a>
            </div>
        </div>
        <div class="div">
            <div class="aboutMe">
                <a href="contact.php">
                       <img src="img/mailIcon.png" alt="">
                        <div class="middle">
                            <p class="recheader1"><span>Contact</span></p>
                        </div>
                        </a>

            </div>
            <div class="aboutMe">
                <a href="art.php">
                        <img src="img/artIcon.png" alt="">
                        <div class="middle">
                            <p class="recheader1"><span>Art</span></p>
                        </div>
                        </a>
            </div>
        </div>


    </div>

    <script src="js/js.js"></script>
</body>
</html>
