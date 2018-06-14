<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body onscroll="changeNav();">
     <?php require 'module/navbar.php' ?>

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
            <br><br>
            <h2 style="text-align: center">Contact Me</h2>
            <div class="dash">

            </div>
            <form name="contact" id="form" action="mailto:">
                <!-- <label>Name</label> -->
                <br>
                <input type="text" id="name" required placeholder="Name">
                <br><br>
                <!-- <label>Email</label> -->
                <br>
                <input type="email" id="email" required placeholder="Email">

                <br><br><br>
                <!-- <label for="">Message</label> -->
                <textarea id="msm" cols="26" rows="7" required placeholder="Message"></textarea><br><br>
                <button type="submit" onclick="validate();">Submit</button>
                <div id="invalide"></div>

            </form>
        </div>

    <?php require 'module/footer.php' ?>
    <script src="js/js.js"></script>

</body>

</html>
