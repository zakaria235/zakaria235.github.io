

$(document).ready(function () {

  $('.nav-btn').on('click', function () {
    var target = $(this).data('section');

    $('.nav-btn').removeClass('active');
    $(this).addClass('active');

    $('.cv-section').removeClass('active');
    $('#' + target).addClass('active');

    if (target === 'skills') {
      animateSkillBars();
    }
  });

  function animateSkillBars() {
    $('.skill-bar').each(function () {
      var level = $(this).data('level'); 
      $(this).css('width', '0%');
      $(this).animate({ width: level + '%' }, 900);
    });
  }

  if ($('#skills').hasClass('active')) {
    animateSkillBars();
  }

  $('.accordion-header').on('click', function () {
    var $header = $(this);
    var $body   = $header.next('.accordion-body');
    var isOpen  = $header.hasClass('open');

    $('.accordion-header').removeClass('open');
    $('.accordion-body').slideUp(250);

    if (!isOpen) {
      $header.addClass('open');
      $body.slideDown(250);
    }
  });

  window.validateContactForm = function (name, email, message) {
    var errors = {};

    if ($.trim(name) === '') {
      errors.name = 'Le nom est obligatoire.';
    }

    if ($.trim(email) === '') {
      errors.email = "L'email est obligatoire.";
    } else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Format d'email invalide.";
      }
    }

    if ($.trim(message) === '') {
      errors.message = 'Le message est obligatoire.';
    }

    return errors; 
  };

  $('.profile-photo img').on('mouseenter', function () {
    $(this).stop(true).animate({ opacity: 0.85 }, 200);
  }).on('mouseleave', function () {
    $(this).stop(true).animate({ opacity: 1 }, 200);
  });

});