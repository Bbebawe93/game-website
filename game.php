<?php
// include common.php to use common function in the page
include "php-include/head.php";

// call output_head() function to output document head
output_head("Home", "page description");

include "php-include/header.php";

output_header("Game");
?>
  <!-- Begin document main -->
  <main role="main" class="main-grid">
            <!-- Begin main grid right column -->
            <div class="right-col">
                <section>
                    <h1 class="main-heading">Start Playing</h1>
                    <canvas id="canvas">Your browser does not
                        support html5 canvas</canvas>
                </section>
            </div>
            <!-- End main grid right column -->
            <!-- Begin main grid left column -->
            <div class="left-col">
                <section>
                    <h2 class="secondary-heading">Game Commands</h2>
                    <p>game commands
                        <br>
                        <br>
                        <br>
                        <br>
                    </p>
                </section>
            </div>
            <!-- End main grid left column -->
        </main>
        <!-- End document main -->
    </div>
    <!-- end wrapper (header and main) -->
<?php
include "php-include/footer.php";
output_footer();
?>