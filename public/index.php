<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="STADIUM8 - Polideportivo Sámara"
    />

    <title>STADIUM8</title>
    
    <!-- Favicons -->
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="%PUBLIC_URL%/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="%PUBLIC_URL%/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="%PUBLIC_URL%/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="%PUBLIC_URL%/favicon/site.webmanifest" />

     <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="%PUBLIC_URL%/stylesheets/librairies/bootstrap.min.css"
    />

    <!-- Bootstrap Responsive Font Sizes CSS -->
    <link
      rel="stylesheet"
      href="%PUBLIC_URL%/stylesheets/librairies/bootstrap-rfs.css"
    />

    <!-- Google Fonts-->
    <link
      href="%PUBLIC_URL%/stylesheets/librairies/google-fonts.css"
      rel="stylesheet"
    />

    <!-- Animate.css -->
    <link
      rel="stylesheet"
      href="%PUBLIC_URL%/stylesheets/librairies/animate.min.css"
    />

    <!-- Normalize.css -->
    <link
      rel="stylesheet"
      href="%PUBLIC_URL%/stylesheets/librairies/normalize.css"
    />

    <!-- Custom CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="%PUBLIC_URL%/stylesheets/styles.css"
    />
</head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="%PUBLIC_URL%/scripts/librairies/jquery-3.4.1.js"></script>
    <script src="%PUBLIC_URL%/scripts/librairies/popper.min.js"></script>
    <script src="%PUBLIC_URL%/scripts/librairies/bootstrap.min.js"></script>

    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
    ></script>
    <script type="text/javascript">
      (function() {
        emailjs.init("user_KOA5KYbhEjGwScZu5ovQ5");
      })();
    </script>

    <!-- Custom Javascript -->
    <script src="%PUBLIC_URL%/scripts/custom.js"></script>
    </body>
</html>
