jQuery(document).ready(function ($) {
    const currentYear = new Date().getFullYear();
    $(".footer_str").text(
      "Copyright © 2020-" +
        currentYear +
        " Wxb Fans Group. All Rights Reserved."
    );
  });