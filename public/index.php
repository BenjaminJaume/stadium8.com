<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />

    <title>STADIUM 8</title>
    
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $TEMPLATE_PATH; ?>/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $TEMPLATE_PATH; ?>/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $TEMPLATE_PATH; ?>/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo $TEMPLATE_PATH; ?>/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $TEMPLATE_PATH; ?>/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo $TEMPLATE_PATH; ?>/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />

     <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="%PUBLIC_URL%/stylesheets/librairies/bootstrap.min.css"
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
    <!-- Custom Javascript -->
    <!-- <script src="%PUBLIC_URL%/scripts/custom.js"></script> -->
    </body>
</html>
