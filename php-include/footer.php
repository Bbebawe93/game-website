<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5baab61aece2e919f5d638f54a6e79f0092fb14b
<?php
# function outputs the footer element, uses date object to update copyright year
function output_footer() {
    $current_year = date("Y");
    # begin heredoc FOOTER
    echo <<<FOOTER
    <!-- Begin document footer -->
    <footer role="contentinfo">
        <div class="footer-grid">
            <div class="footer-info">
                <h2 class="footer-heading">Get in Touch</h2>
                <address>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:bb537@live.mdx.ac.uk">bb537@live.mdx.ac.uk</a></p>
                    <p><i class="fas fa-phone-square"></i> Phone: 0201 234 5678</p>
                </address>
            </div>
            <div class="copyright"><small>&copy; Copyright $current_year - All rights reserved</small></div>
        </div>
    </footer>
    <!-- End document footer -->
</body>
<!-- End document body -->

</html>
<!-- End html5 document -->
FOOTER;
# end heredoc FOOTER
} # end function
?>
<<<<<<< HEAD
=======
=======
<?php
function output_footer()
{
    $current_year = date("Y");
    $footer = <<<FOOTER
    <!-- Begin document footer -->
    <footer role="contentinfo">
        <div class="footer-grid">
            <div class="footer-info">
                <h2 class="footer-heading">Get in Touch</h2>
                <address>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:bb537@live.mdx.ac.uk">bb537@live.mdx.ac.uk</a></p>
                    <p><i class="fas fa-phone-square"></i> Phone: 0201 234 5678</p>
                </address>
            </div>
            <div class="copyright"><small>&copy; Copyright $current_year - All rights reserved</small></div>
        </div>
    </footer>
    <!-- End document footer -->
</body>
<!-- End document body -->

</html>
<!-- End html5 document -->
FOOTER;
    echo $footer;
}
>>>>>>> cb839bf45b6e273b96689bd7545594bbf9a0d994
>>>>>>> 5baab61aece2e919f5d638f54a6e79f0092fb14b
