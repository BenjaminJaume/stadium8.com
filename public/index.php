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
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and %PUBLIC_URL% in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (%PUBLIC_URL%) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <title>STADIUM 8</title>

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
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="%PUBLIC_URL%/scripts/librairies/jquery-3.4.1.js"></script>
    <script src="%PUBLIC_URL%/scripts/librairies/popper.min.js"></script>
    <script src="%PUBLIC_URL%/scripts/librairies/bootstrap.min.js"></script>
    <!-- Custom Javascript -->
    <!-- <script src="%PUBLIC_URL%/scripts/custom.js"></script> -->
    </body>
</html>
