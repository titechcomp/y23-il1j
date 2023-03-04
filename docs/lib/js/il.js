function force_download_pdf($body) {
  $body.find('a').each(function () {
    $a = $(this);
    href = $a.attr('href');
    console.log(href);
    if (href.match(/\.pdf$/)) {
      $a.attr('download', href.replace(/.*\//, ''));
      console.log($a.download);
    }
  });
}

function on_load() {
  $body = $(document.body);
  force_download_pdf($body);
}

$(window).on('load', on_load);
// $(window).on('resize', on_resize);
