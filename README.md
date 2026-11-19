
# Personal page (current)

`index.html` at the repository root is now a self-contained, hand-maintained
single-page site (dark theme, animated terminal hero, skills, selected work,
career timeline and contact). It needs **no build step** — edit `index.html`,
commit and push; GitHub Pages serves it directly.

Content sections live in plain HTML in order: hero, stats, about, skills, work,
experience, contact. Update the experience timeline and work cards in place.

The `nextjs-blog/` folder and `deploy-github.sh` are the legacy Next.js version
kept for reference. Running `npm run build` there would overwrite `index.html`
with the old design, so don't run it unless you intend to revert.
