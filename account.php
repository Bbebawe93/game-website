<?php 
// include head.php to call common function in the page
include("php-include/head.php");

// call output_head() function to output document head
output_head("Account", "page description");

// include header.php to call header function
include "php-include/header.php";

// call output_header function to output document header
output_header("Account");
?>
 <!-- Begin document main -->
 <main role="main" class="main-grid">
                <!-- Begin main grid right column -->
                <div class="right-col">
                    <section>
                        <h1 class="main-heading">Register for a new Account</h1>
                        <!-- Registration form -->
                        <form id="registration-form" class="" action="" method="POST">
                            <fieldset>
                                <legend>&nbsp;&nbsp;Please fill in this registration form to create an
                                    account&nbsp;&nbsp;</legend>
                                <hr>
                                <label for="full-name">Full Name:</label><span id="full-name-error"> error message
                                </span>
                                <div class="form-grid">
                                    <i class="fas fa-id-card icon"></i>
                                    <input type="text" name="full-name" id="full-name">
                                </div>

                                <label for="reg-username">Username:</label><span id="username-error"></span>
                                <div class="form-grid">
                                    <i class="fa fa-user icon"></i>
                                    <input type="text" name="username" id="reg-username">
                                </div>
                                <label for="email">Email:</label><span id="email-error"></span>
                                <div class="form-grid">
                                    <i class="fa fa-envelope icon"></i>
                                    <input type="email" name="email" id="email">
                                </div>
                                <label for="reg-password">Password:</label><span id="reg-password-error"></span>
                                <div class="form-grid">
                                    <i class="fas fa-key icon"></i>
                                    <input type="password" name="reg-password" id="reg-password">
                                </div>
                                <button type="submit" id="register-button">Register</button>
                                <button type="reset" class="clear-button">Clear</button>
                            </fieldset>
                        </form>
                    </section>
                </div>
                <!-- End main grid right column -->
                <!-- Begin main grid left column -->
                <div class="left-col">
                    <section>
                        <h2 class="secondary-heading">Login to your Account</h2>
                        <!-- Login form -->
                        <form id="login-form">
                            <fieldset>
                                <legend>&nbsp;&nbsp;Please fill in form to login to your account&nbsp;&nbsp;</legend>
                                <hr>
                                <label for="log-username">Username: </label><span id="log-username-error"></span>
                                <div class="form-grid">
                                    <i class="fa fa-user icon"></i>
                                    <input type="text" name="log-username" id="log-username">
                                </div>
                                <label for="log-password">Password: </label>
                                <div class="form-grid">
                                    <i class="fas fa-key icon"></i>
                                    <input type="password" name="log-password" id="log-password">
                                </div>
                                <button type="submit" id="login-button">Login</button>
                                <button type="reset" class="clear-button">Clear</button>
                            </fieldset>
                        </form>
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
