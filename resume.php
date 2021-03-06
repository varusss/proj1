<!DOCTYPE html>
<html lang="en">

<?php require 'module/head.php' ?>

<body onscroll="changeNav(); fadeOutColor();">
 <?php require 'module/navbar.php' ?>

            <div class="backgroundColor"></div>

            <div class="text">
                <div class="dashTop"></div>
                <h1>Resume</h1>
                <div class="dashBottom"></div>
            </div>

                <div class="flex-resume">
                    <div class="box3-1">
                        <div class="box3-2 fadeIn">
                            <div class="border">
                                <h2>Education</h2>
                                <div class="dash"></div>
                                <h4>Center of Advanced reaserch and Technology</h4>
                                <p>
                                    Collaborate professionally with team.
                                    <br>Adaptable to new environment.
                                    <br>Willing to learn new skill.
                                </p>
                                <h4>Clovis East High School</h4>
                                <p>
                                    Advanced Placement and Honor classes.
                                    <br>GPA 3.9
                                </p>
                                <br>
                            </div>
                        </div>

                        <div class="box3-2 fadeIn">
                            <div class="border">
                                <h2>Volunteer Work</h2>
                                <div class="dash"></div>
                                <h4>Feeding the Families</h4>
                                <p> Help distribute food to families in fresno area. </p>
                                <h4>Pancake Breakfast</h4>
                                <p>Help serve breakfast to veterans.</p>
                                <h4>Clovis Fest</h4>
                                <p>Help set up the fest.</p>
                                <br>
                            </div>
                        </div>
                    </div>

                    <div class="box3-1">
                        <div class="box3-2 fadeIn">
                            <div class="border">
                                <h2>Extracurricular Activities</h2>
                                <div class="dash"></div>
                                <br>
                                <p>Mock Trial
                                    <br>Robotic
                                    <br>Cyber Patriot</p>
                            </div>
                        </div>

                        <div class="box3-2 fadeIn">
                            <div class="border">
                                <h2>Certificates and Awards</h2>
                                <div class="dash"></div>
                                <br>
                                <p>Third Place State for Cyber Patriot
                                    <br>Quarter Finalist in Robotic
                                    <br>Principal Honor Roll
                                    <br>Outstanding Menber Award for Defense Trial</p>
                            </div>
                        </div>

                        <div class="box3-2 fadeIn">
                            <div class="border">
                                <h2>Computer Skills</h2>
                                <div class="dash"></div>
                                <br>
                                <p>Microsoft Office
                                    <br>Bracket
                                    <br>Photoshop
                                    <br>Eclipse</p>
                            </div>
                        </div>

                    </div>

                </div>

                <h2 class="recheader"><span>Recomendation Letters</span></h2>

                <div class="flex-resume">
                  <div class="letter-content">
                    <p id="letter1" onclick="displayLetter();">First Letter <span class="dash" id="dash1"></span></p>
                    <p id="letter2" onclick="displayLetter();">Second Letter <span class="dash" id="dash2"></span></p>
                  </div>
                  <div class="letter-container">
                    <div class="card">
                      <div class="letter1">
                            <div class="border">
                                <p>To Who It May Concern:</p>
                                <p>
                                    I met Oanh Tran for the first time in 2015 when she was a student in my English 10 class at Clovis East High School. As a student, she immediately impressed me. Oanh is a hard-working students who takes her education very seriously. During the year she spent in my class, she never once failed to turn in an assignment. Her work was always done thoroughly, and her thoughts and insights were unusually astute for a young woman her age. In one particular writing assignment, she shared with me her journey of assimilation when first arriving in the United States at a young age. She was able to convey her story so beautifully; I still reference her example when teaching writing to my current students.
                                </p>
                                <p>
                                    In addition to getting to know Oanh as her teacher, I’ve also had the opportunity to work with her as a coach. As the Mock trial advisor at Clovis East, I successfully recruited Oanh during her sophomore year. She earned a spot as a defense attorney, and was so impressive in that role that she earned Defensive Team Member of the year for the 2017 season. She returned as a defense attorney in the 2018 season, and again proves to be a valuable asset to the team. I never had to worry about whether or not Oanh would be prepared or up to the task; I knew that she would not disappoint me.
                                </p>
                                <p>
                                    Oanh is a young lady who will accomplish amazing things. She is brilliant, driven, and committed to giving every project her all. I look forward to learning about all the successes she is doubtlessly going to have.
                                </p>
                                <p>
                                    Please contact me if you have any questions or would like any more information.
                                    <br>
                                    <br>Thank you,
                                    <br>Janis Ziese
                                    <br>janiesziese@cusd.com
                                    <br>English Teacher
                                    <br>Clovis East High School
                                </p>
                            </div>

                            </div>
                      <div class="letter2">
                          <div class="border">
                              <p>Wednesday, October 4, 2017</p>
                              <p>To Whom It May Concern:
                                  <br>
                                  <br>It has been an honor and a privilege to have taught and work with Oanh Tran. As a student in my Honors chemistry class, she was very eager to learn and challenge herself. Completing the course as the number one student among her peers. Oanh asked questions and was always willing to tutor others when asked for assistance. She is a very self-motivated and responsible young woman, leading the Clovis East Robotics team as its main software programmer. Besides having a mentor for C++ programming, Oanh took it upon herself to study programming over the summer (using self-learning websites). She knew that the team had a need for programmers, so she wanted to be the “go to” person. She not only programmed our most sophisticated robot (as a fourth year team), but served as a junior mentor for her team mates: setting up training and tutorial session.</p>

                              <p>Oanh is also a member of our Junior Air Force ROTC team on campus and was instrumental in representing the team in their cyber challenge.</p>
                              <p>
                                  I highly recommend Oanh Tran to your organization as a person who is willing to make a difference and be a positive contributor.</p>


                              <p>
                                  Respectfully,
                                  <br> Quentin K. Toyloy
                                  <br> Chemistry/Physics Teacher
                                  <br> Clovis East Robotics Lead Coach
                                  <br> Clovis East High School
                                  <br> Bldg. 600 Room 661
                                  <br> 559-327- 4261 br
                              </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

    <?php require 'module/footer.php' ?>
</body>

</html>
