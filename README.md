
# Personal page (current)

`index.html` at the repository root is a self-contained, hand-maintained
single-page site (dark theme, animated terminal hero, CV summary, skills,
certifications, selected recent employers and contact). It needs **no build
step** — edit `index.html`, commit and push; GitHub Pages serves it directly.

Content sections live in plain HTML in order: hero, stats, about, skills,
certifications, experience and contact. Update the experience timeline in
place. The downloadable CV remains at `document/CV-LongVu.pdf`.

The `nextjs-blog/` folder and `deploy-github.sh` are the legacy Next.js version
kept for reference. Running `npm run build` there would overwrite `index.html`
with the old design, so don't run it unless you intend to revert.
