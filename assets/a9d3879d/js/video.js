function initVideoOverlay()
{
    if($('.video_overlay').length)
    {
        var overlay = $('.video_overlay');
        $('.video_container_outer').on('click', function()
        {
            overlay.css('opacity', "0");
        })
    }
}

});
