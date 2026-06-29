# Linktree Design Archive

This folder tracks saved design directions for the SnackOverflowGeorge link hub.
The actual implementations are kept as runnable Next.js routes so they can be
reviewed locally or deployed without restoring old commits.

## Current Live Direction

- Editorial homepage
- Route: `/`
- Source: `app/page.tsx` and `app/components/CompactEditorialHome.tsx`

## Saved Versions

| Design | Route | Source |
| --- | --- | --- |
| Classic icon-grid Linktree | `/classic` | `app/classic/page.tsx` |
| Bento dashboard | `/beta/bento` | `app/beta/bento/page.tsx` |
| Dark glass / 3D link deck | `/beta/glass` | `app/beta/glass/page.tsx` |
| Editorial big-hero comparison copy | `/beta/editorial` | `app/beta/editorial/page.tsx` and `app/components/EditorialHome.tsx` |
| Saved-version index | `/beta` | `app/beta/page.tsx` |

## Notes

- Keep these routes until George explicitly chooses which alternates to delete.
- `/classic` preserves the pre-editorial homepage.
- `/beta/*` preserves the exploratory redesign directions from the Linktree
  redesign pass.
