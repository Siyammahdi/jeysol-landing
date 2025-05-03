# Gallery Images for About Page

This directory should contain the following images for the "Behind The Scenes" section on the About page:

## Required Images

1. **office-space.jpg** - Wide format image (16:9) of a modern office space
2. **team-meeting.jpg** - Square format image (1:1) of people in a meeting
3. **team-event.jpg** - Wide format image (16:9) of a team event or celebration
4. **coding-session.jpg** - Tall format image (3:4) of developers working
5. **celebration.jpg** - Square format image (1:1) of a team celebration
6. **design-review.jpg** - Square format image (1:1) of a design review session

## Image Specifications

- **Resolution**: Minimum 1200px on the longest side
- **Format**: JPG format with reasonable compression (quality 80-90%)
- **File Size**: Try to keep each image under 300KB for optimal page loading
- **Style**: Professional, well-lit images that showcase company culture

## Placeholder Usage

Until you have actual company photos, you can use stock photos or generated images that fit the descriptions above. Make sure you have the rights to use any images you include.

## Image Aspects

The gallery uses a masonry layout that depends on the correct aspect ratios:
- **Wide**: 16:9 aspect ratio
- **Square**: 1:1 aspect ratio
- **Tall**: 3:4 aspect ratio

The `aspectRatio` property in the `galleryImages` data array (found in `src/lib/mock-team.ts`) should match the actual aspect ratio of the images you place here. 