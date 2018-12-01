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
                    <canvas id="game-canvas">Your browser does not
                        support html5 canvas</canvas>
                        <form id="game-command">
                        <div id="command-error"></div>
                        <label for="command">Game Command</label>
                        <input type="text" name="command" id="command">
                        <button type="button" id="submit-btn">Run</button>
                        </form>
                </section>
            </div>
            <!-- End main grid right column -->
            <!-- Begin main grid left column -->
            <div class="left-col">
                <section>
                    <h2 class="secondary-heading">Game Commands</h2>
                    <div class="game-commands">
                        <ul>
                            <li><span>start</span> => start the game</li>
                            <li><span>stop</span> => stop the game</li>
                            <li><span>r</span> => moves paddle to right 20px</li>
                            <li><span>r2</span> => moves paddle to right 40px</li>
                            <li><span>r3</span> => moves paddle to right 60px</li>
                            <li><span>l</span> => moves paddle to left 20px</li>
                            <li><span>l2</span> => moves paddle to left 40px</li>
                            <li><span>l3</span> => moves paddle to left 60px</li>
                        </ul>
                    </div>
                </section>
            </div>
            <!-- End main grid left column -->
        </main>
        <!-- End document main -->
        <script type="text/javascript" src="js/user.js"></script>
        
        <script type="text/javascript" src="js/game.js"></script>
    </div>
    <!-- end wrapper (header and main) -->
<?php
// include footer.php to call footer function
include "php-include/footer.php";

// call output_footer function to output document footer
output_footer();
?>