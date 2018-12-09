<?php
// include head.php to call common function in the page
include "php-include/head.php";

// call output_head() function to output document head
output_head("Ranking", "page description");

// include header.php to call header function
include "php-include/header.php";

// call output_header function to output document header
output_header("Ranking");
?>
 <!-- Begin document main -->
 <main role="main" class="main-grid">
                <!-- Begin main grid right column -->
                <div class="right-col">
                    <article role="article">
                        <h1 class="main-heading">Top Players</h1>
                        <p><b>Top 10 players Ranking</b></p>
                        <table id="ranking-table">
                            <tr>
                                <th>Ranking</th>
                                <th>Player Name</th>
                                <th>Score</th>
                            </tr>
                            <tr>
                                <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                                <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                            <tr>
                            <td class="ranking-number"></td>
                                <td class="player-name"></td>
                                <td class="player-score"></td>
                            </tr>
                        </table>
                        <br>
                        <h2 class="secondary-heading">Improve your Ranking</h2>
                        <p>Extended kindness trifling remember he confined outlived if. Assistance     sentiments yet unpleasing say. Open they an busy they my such high. An      active dinner wishes at unable hardly no talked on.Immediate him her        resolving his favorites. Wished denote abroad at branch at.</p>

                    </article>
                </div>
                <!-- End main grid right column -->
                <!-- Begin main grid left column -->
                <aside>
                    <div class="left-col ">
                    <img src="img/game-4.png" alt="" title="" class="side-img">
                    <img src="img/game-5.png" alt="" title="" class="side-img">
                    <img src="img/game-6.png" alt="" title="" class="side-img">
                </div>
                </aside>
                <!-- End main grid left column -->
            </main>
            <!-- End document main -->
            <!-- javascript links --> 
            <script type="text/javascript" src="js/user.js"></script>
            <script type="text/javascript" src="js/ranking.js"></script>
        </div>
        <!-- end wrapper (header and main) -->
<?php
// include footer.php to call footer function
include "php-include/footer.php";

// call output_footer function to output document footer
output_footer();
?>