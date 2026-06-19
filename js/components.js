/**
 * components.js — Shared site-wide navigation and footer
 *
 * Injects the <nav> and <footer> into placeholder elements:
 *   <div id="site-nav"></div>
 *   <div id="site-footer"></div>
 *
 * Also wires up the mobile nav toggle, so pages don't need to duplicate that logic.
 */
(function () {
  'use strict';

  // ── Page detection ─────────────────────────────────────────
  var path = window.location.pathname;
  var isHome = path === '/' ||
               path.endsWith('/index.html') ||
               // local file-system opening (e.g. file:///C:/…/academy/)
               path.endsWith('/academy/') ||
               path === '';
  var isCareerGuidance = path.includes('career-guidance');
  var isFounder        = path.includes('founder');

  // Link prefix: empty on home (uses same-page anchors), 'index.html' elsewhere
  var p        = isHome ? '' : 'index.html';
  var homeHref = isHome ? '#'  : 'index.html';

  // ── Helper: replace a placeholder <div> with raw HTML ──────
  function inject(id, html) {
    var placeholder = document.getElementById(id);
    if (!placeholder) { return; }
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    placeholder.parentNode.replaceChild(wrapper.firstElementChild, placeholder);
  }

  // ── NAVIGATION ─────────────────────────────────────────────
  inject('site-nav', [
    '<nav class="navbar" aria-label="Main navigation">',
    '  <div class="container">',
    '    <a href="' + homeHref + '" class="brand" aria-label="techsery home">',
    '      <span class="brand-name">tech<span>sery</span></span>',
    '      <span class="brand-tagline">where tech aspirations are nurtured</span>',
    '    </a>',
    '',
    '    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '',
    '    <ul class="nav-links" id="navLinks" role="list">',
    '      <li><a href="' + p + '#courses">Courses</a></li>',
    '      <li><a href="' + p + '#second-innings">SecondInnings</a></li>',
    '      <li><a href="' + p + '#career-guidance"' + (isCareerGuidance ? ' class="active"' : '') + '>Career Guidance</a></li>',
    '      <li><a href="founder.html"'         + (isFounder         ? ' class="active"' : '') + '>Meet the Founder</a></li>',
    '      <li><a href="' + p + '#why-techsery">About</a></li>',
    '      <li><a href="' + p + '#featured-course" class="nav-cta">Enroll Now</a></li>',
    '    </ul>',
    '  </div>',
    '</nav>'
  ].join('\n'));

  // ── FOOTER ─────────────────────────────────────────────────
  inject('site-footer', [
    '<footer class="footer" aria-label="Site footer">',
    '  <div class="container">',
    '    <div class="footer-grid">',
    '',
    '      <div class="footer-brand">',
    '        <a href="' + homeHref + '" class="brand" aria-label="techsery home">',
    '          <span class="brand-name">tech<span>sery</span></span>',
    '          <span class="brand-tagline">where tech aspirations are nurtured</span>',
    '        </a>',
    '        <p style="margin-top:14px;">',
    '          Practical, career-focused tech education for students and professionals.',
    '          Building the bridge between theory and industry-readiness.',
    '        </p>',
    '      </div>',
    '',
    '      <div class="footer-col">',
    '        <h5>Courses</h5>',
    '        <ul>',
    '          <li><a href="index.html#courses">Basics</a></li>',
    '          <li><a href="index.html#courses">Advanced</a></li>',
    '          <li><a href="index.html#courses">Expert</a></li>',
    '          <li><a href="index.html#featured-course">Code to Career Bootcamp</a></li>',
    '        </ul>',
    '      </div>',
    '',
    '      <div class="footer-col">',
    '        <h5>Programs</h5>',
    '        <ul>',
    '          <li><a href="index.html#second-innings">SecondInnings</a></li>',
    '          <li><a href="career-guidance.html">Career Guidance</a></li>',
    '          <li><a href="career-guidance.html#resume-tailoring">Resume Building</a></li>',
    '          <li><a href="career-guidance.html#networking">Networking</a></li>',
    '        </ul>',
    '      </div>',
    '',
    '      <div class="footer-col">',
    '        <h5>Connect</h5>',
    '        <ul>',
    '          <li><a href="mailto:techserydotcom@gmail.com">techserydotcom@gmail.com</a></li>',
    '        </ul>',
    '      </div>',
    '',
    '    </div>',
    '',
    '    <div class="footer-bottom">',
    '      <span>&copy; 2026 techsery.com &middot; All rights reserved.</span>',
    '      <span>Made with purpose for every tech aspirant</span>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n'));

  // ── MOBILE NAV TOGGLE ──────────────────────────────────────
  var navToggle = document.getElementById('navToggle');
  var navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

}());
