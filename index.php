<?php
// include head.php to call common function in the page
include "php-include/head.php";

// call output_head() function to output document head
output_head("Home", "page description");

// include header.php to call header function
include "php-include/header.php";

// call output_header function to output document header
output_header("Home");
?>
 <!-- Begin document main -->
 <main role="main" class="main-grid">
                <!-- Begin main grid right column -->
                <div class="right-col">
                    <article role="article">
                        <h1 class="main-heading">Welcome to PLAY online</h1>
                        <p>Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat
                            smiling
                            add
                            but. Wonder twenty hunted and put income set desire expect. Am cottage calling my is
                            mistake
                            cousins talking up. Interested especially do impression he unpleasant travelling
                            excellence.
                            All
                            few our knew time done draw ask.</p>
                        <p>Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable
                            attention
                            set suspected led offending. Admitting an performed supposing by. Garden agreed matter are
                            should
                            formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment
                            put
                            excuse narrow. Spite mirth money six above get going great own. Started now shortly had for
                            assured
                            hearing expense. Led juvenile his laughing speedily put pleasant relation offering.</p>

                        <div class="img-row">
                            <img src="img/Placeholder.png" alt="" title="">
                            <img src="img/Placeholder.png" alt="" title="">
                            <img src="img/Placeholder.png" alt="" title="">
                        </div>
                        <br>
                        <h2 class="secondary-heading">How to play</h2>
                        <p>Extended kindness trifling remember he confined outlived if. Assistance sentiments yet
                            unpleasing
                            say. Open they an busy they my such high. An active dinner wishes at unable hardly no
                            talked
                            on.
                            Immediate him her resolving his favorites. Wished denote abroad at branch at.</p>
                        <p><b>Game Commands</b><br>
                            <code>right</code> move to right<br>
                            <code>left</code> move to left<br>

                        </p>


                    </article>
                </div>
                <!-- End main grid right column -->
                <!-- Begin main grid left column -->
                <div class="left-col">
                    <section>
                        <h3 class="third-heading">Rankings</h3>
                        <table id="ranking-table">
                            <tr>
                                <th>Ranking</th>
                                <th>Player Name</th>
                                <th>Score</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beshoy bebawe</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beshoy</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beshoy</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beshoy</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beshoy</td>
                                <td>9</td>
                            </tr>
                        </table>
                        <br>
                    </section>
                    <section>
                        <h3 class="third-heading">Start Playing Now</h3>
                        <p>Login to your account to start playing. or register for a new account if you do not have an
                            account
                            yet.</p>
                        <a href="account.php" class="login-reg-btn"><strong>Login/Register</strong></a>
                    </section>
                </div>
                <!-- End main grid left column -->
            </main>
            <!-- End document main -->
        </div>
        <!-- end wrapper (header and main) -->
<?php
// include footer.php to call footer function 
include "php-include/footer.php";

// call output_footer function to output document footer
output_footer();
?>