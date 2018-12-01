<?php
# function outputs the navigation menu takes the current page as argument
function output_navigation($current_page) {
    $page_names = ["Home", "Game", "Ranking", "Account"];
    $page_links = ["index.php", "game.php", "ranking.php", "account.php"];
    # array to hold font icons
    $font_icons = ['<i class="fas fa-home"></i>', '<i class="fas fa-gamepad"></i>', '<i class="fas fa-trophy"></i>', '<i class="fas fa-user"></i>'];
    for ($x = 0; $x < count($page_names); $x++) {
        echo '<li><a ';
        if ($page_names[$x] == $current_page) {
            echo 'id="current"';
        }
        echo 'href="' . $page_links[$x] . '">' . $font_icons[$x] . " " . $page_names[$x] . '</a></li>' . "\n";
    }
} # end output_navigation function
# function outputs header elements, invokes function output_navigation
function output_header($current_page) {
    # begin heredoc HEADER_START
    echo <<<HEADER_START
    <!-- Begin document body -->
    <body class="grid">
        <!-- begin wrapper, wraps header and main, keeps footer and the bottom -->
        <div class="wrapper">
            <!-- Begin document header -->
            <header role="banner">
                <div class="header-grid">
                    <!-- Begin navigation menu -->
                    <span>
                        <a href="index.php"><img src="img/logo.jpg" alt="" id="logo"></a>
                    </span>
                    <nav role="navigation">
                        <ul id="nav-links">

HEADER_START;
# end heredoc HEADER_START
    # call to output_navigation function
    output_navigation($current_page);
    # begin heredoc HEADER_END
    echo <<<HEADER_END
                        </ul>
                    </nav>
                    <!-- End navigation menu -->
                </div>
            </header>
            <!-- End document header -->
HEADER_END;
# end heredoc HEADER_END

} # end function
?>