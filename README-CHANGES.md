# Sivaani Associate - homepage messages update

## New / changed files (upload these; everything else is unchanged)
- index.html      (changed) hero slide copy panels, new Life Insurance section, head links
- script.js       (changed) slide text sync, WhatsApp links, hover/keyboard pause, swipe, "Know more" links
- messages.css    (NEW)     styling for slide text + Life section (style.css is NOT modified)
- messages-data.js(NEW)     all new wording, Tamil + English, in one place

All other files in this folder are your originals, included only so the folder is complete.
Images are NOT included: keep your existing images/ folder (images/hero/slide-1..4 are reused, same files).

## What changed
- Hero: 4 HTML-text slides over your existing photos, in this order (photos re-matched, files unchanged):
  1 Child Education (slide-2 photo), 2 Health (slide-4), 3 Life (slide-1), 4 Career (slide-3).
  The first-slide preload in <head> now points at slide-2.
- Each slide: headline, supporting line, description, gold WhatsApp button (your exact message, Tamil version in Tamil mode,
  sent to CONFIG.whatsapp) and a "Know more" link: Child/Health open the existing enquiry form, Life scrolls to the new
  section, Career opens the existing Career popup.
- Slides now change every 6 s; pause on mouse hover, keyboard focus, the pause button; swipe on phones; arrows and dots as before.
  Reduced-motion users get no autoplay. The brand line (h1) is now a compact strapline above the slide headline.
- New section #life-promise (after "Our Insurance Solutions") with your Life Insurance wording. Its picture reuses slide-1.
  The 6 product cards, nav, form, catalogue, popups, Supabase/admin files are untouched.

## Please check
- Tamil text is a translation: have the owner read messages-data.js (ta block) before launch.
- Life section photo crop (object-position in messages.css, .life-vis img) once you see the real slide-1 photo.
- Health slide wording follows your brief: it does NOT say premiums are unnecessary.

## Preview locally
Put the files next to your images/ folder, run `python3 -m http.server`, open http://localhost:8000

## Testing checklist
- Tamil and English: all 4 slides readable, headlines fully visible on phone (360-430 px), no sideways scroll
- Each slide's gold button opens WhatsApp with the right message; "Know more" opens the right flow
- Hover/focus pauses; pause button; arrows; dots; swipe on phone
- Life section buttons: WhatsApp message, "View Life Insurance Plans" opens the Life enquiry form
- Product cards, hero form, catalogue (#catalogue), Career/Testimonials/Contact popups still work
- Browser console has no errors

## Deploy to GitHub Pages (manually, nothing is deployed for you)
1. In your repo: git checkout -b homepage-messages
2. Copy index.html, script.js, messages.css, messages-data.js into the repo root; commit and push the branch.
3. Check it (local preview, or temporarily point Pages at the branch). Then merge to your Pages branch.
4. Wait ~1 minute, hard refresh (Ctrl+F5) on phone and desktop, run the checklist. Roll back with git revert if needed.
