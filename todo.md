# Current task: Replace three Insights article images

- [ ] Inspect the three article records, live pages, and supplied image files.
- [ ] Optimize the supplied PNG images for web delivery while preserving acceptable quality.
- [ ] Copy optimized images into `client/public/assets/` for Vercel-compatible self-contained hosting.
- [ ] Update the matching records in `client/src/lib/blogPosts.ts` with image paths and descriptive alt text.
- [ ] Run TypeScript and production build checks.
- [ ] Verify all three article pages visually and confirm the image paths resolve.
- [ ] Save one checkpoint after verification.
- [ ] Push the verified checkpoint to GitHub `main`.
- [ ] Deliver the updated links and checkpoint to the user.

## Decisions

- Keep the images self-contained in the repository because the site must remain deployable on Vercel.
- Do not alter article copy, SEO metadata, or sitemap URLs unless verification reveals a related issue.
