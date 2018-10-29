<?php
// include head.php to call common function in the page
include "php-include/head.php";

// call output_head() function to output document head
output_head("Game", "page description");

// include header.php to call header function
include "php-include/header.php";

// call output_header function to output document header
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
// include footer.php to call footer function
include "php-include/footer.php";

// call output_footer function to output document footer
output_footer();
?>