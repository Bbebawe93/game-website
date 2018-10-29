<?php
// include common.php to use common function in the page
include "php-include/head.php";

// call output_head() function to output document head
output_head("Home", "page description");

include "php-include/header.php";

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
                        <h2 class="secondary-heading">Improve your Ranking</h2>
                        <p>Extended kindness trifling remember he confined outlived if. Assistance sentiments yet
                            unpleasing
                            say. Open they an busy they my such high. An active dinner wishes at unable hardly no
                            talked
                            on.
                            Immediate him her resolving his favorites. Wished denote abroad at branch at.</p>
                        
                    </article>
                </div>
                <!-- End main grid right column -->
                <!-- Begin main grid left column -->
                <aside>
                    <div class="left-col side-img">
                        <img src="img/demo.jpg" alt="" title="">
                        <img src="img/demo.jpg" alt="" title="">
                        <img src="img/demo.jpg" alt="" title="">
                    </div>
                </aside>
                <!-- End main grid left column -->
            </main>
            <!-- End document main -->
        </div>
        <!-- end wrapper (header and main) -->
<?php
include "php-include/footer.php";
output_footer();
?>