# Claire Hart Quiz Landing

Short quiz-only funnel for Claire Hart's Gumroad products. The page intentionally behaves like a mobile quiz app:
one screen at a time, illustrated answer cards, progress indicator, matching screen, then product CTA.

## Product routing

- General stiffness, posture, low energy, habit loss: The Gentle Movement System for Women
  - https://claireharts.gumroad.com/l/mkcph
- Knee soreness, stairs, knee confidence: Bulletproof Knees
  - https://claireharts.gumroad.com/l/strongknees
- Mixed answers: start with The Gentle Movement System, then add Bulletproof Knees.

## Structure

- `index.html` - quiz shell, templates, result CTA.
- `styles.css` - responsive funnel design.
- `app.js` - 7-question quiz scoring and result rendering.
- `assets/quiz-art/` - generated raster illustrations used in quiz answer cards.
- `assets/` - product cover images pulled from the Gumroad product metadata.

## Deploy

Upload this folder's contents to a GitHub repository root and enable GitHub Pages:

- Settings -> Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

The published page can then be used in Instagram bio, ads, or as a pre-sell page before Gumroad.
