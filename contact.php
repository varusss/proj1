<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body onscroll="changeNav(); fadeOutColor();">
    <?php require 'module/navbar.php' ?>
    <div class="backgroundColor"></div>
    <div class="text">
        <div class="dashTop"></div>
        <h1>Contact</h1>
        <div class="dashBottom"></div>
    </div>

        <div class="contact">
            <div class="thanksLetter">
                <div class="boxc">
                    <div class="border">
                        <p>
                            Thank you for taking the time to visit my portfolio website. I hope that this website haf give you insight about me. I’m looking for an internship or a part time job in the computer science field.
                        </p>
                        <p>
                            You can contact me through my contact information listed below:
                            <br><br> oanhtran901@gmail.com
                            <br><br> (559)-797-2160
                        </p>
                    </div>
                </div>

            </div>
            <h2 style="text-align: center">Contact Me</h2>
            <div class="dash"></div>

            <form name="contact" id="form" action="mailto:">

                <div class="flex-contact">
                  <input type="text" id="firstName" required placeholder="First Name" style="margin-right: 2%">
                  <br><br>
                  <input type="text" id="lastName" required placeholder="Last Name" style="margin-left: 2%">
                </div>

                <br><br>

                <div class="flex-contact">
                  <input type="email" id="email" required placeholder="Email">
                  <input type="tel" id="phone" required placeholder="Phone Number">
                </div>


                <br><br><br>
                <textarea id="msm" cols="26" rows="1" required placeholder="Message"></textarea><br><br>
                <button type="submit" onclick="validate();">Submit</button>
                <div id="invalide"></div>

            </form>
        </div>

    <?php require 'module/footer.php' ?>
    <script src="js/js.js"></script>

</body>

</html>
