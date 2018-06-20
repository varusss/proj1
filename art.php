<!DOCTYPE html>
<html lang="en">
<?php require 'module/head.php' ?>

<body onscroll="changeNav(); fadeOutColor();">
    <?php require 'module/navbar.php' ?>
    <div class="backgroundColor"></div>
      <div class="text">
          <div class="dashTop"></div>
          <h1>Art</h1>
          <div class="dashBottom"></div>
      </div>

            <div class="art">
                <div class="imgA">
                    <div class="pic"><img src="img/art2.jpg" alt="" width="450"></div>
                    <div class="pic"><img src="img/art3.jpg" alt="" width="450"></div>
                    <div class="pic"><img src="img/art4.jpg" alt="" width="450"></div>
                    <a class="prev" onclick="prevSlide()">&#10094;</a>
                    <a class="next" onclick="nextSlide()">&#10095;</a>
                </div>
                <div class="text3">
                    <div class="box3-2">
                        <div class="border">
                            <p>
                                This is my artwork. I’m taking ceramics class that my high school provided. I learn how to make pottery and sculpture in three different ways, by hand, by wheel, or by mold.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    <?php require 'module/footer.php' ?>
    <script src="js/js.js"></script>
</body>
</html>
