# Personal Website 
>Link: https://yigengl.vercel.app

This is my personal website. I'm open to suggestions on this website or any other projects I own. Please report any bugs or issues you find.

You can contact me at ygngzln@gmail.com. <br>

**Credits:**
Programmed by me. Heavy graphic design aid by another person who prefers to remain anonymous. All background images from Pinterest.

## 3.5 (5/23/2026) - Project changes
- Edits made to data loading animation, looks cleaner now
- Image preloading for projects page

## 3.4 (5/9/2026) - Font changes
- Deleted unused fonts, standardized font usage across all pages for better readability and design.
- Updated sizes and weight of basically all text on the website to properly adjust

## 3.3 (5/6/2026) - Backgrounds
- New backgrounds for about me, qna, and updates pages. Some colors tweaked to fit backgrounds.

## 3.2 (4/26/2026) - About me + QNA revamp
- **About Me** - All information and text completely changed, added contacts, completely rearranged layout, fonts, sizes, and colors. 
- **QNA** - Fixed how Qs and As are displayed --> case style grid layout rather than a list. Fonts and some sizes changed.
- Minor size edits in updates page

## 3.1 (4/6/2026) - Project page fixes
- Added language icons to project cases
- Fixed project background image not loading properly
- Reorganized assets folder

## 3.0 (4/4/2026) - Migration and Overhaul
- **MIGRATED ENTIRE FRONTEND TO SVELTEKIT FROM BASE SVELTE**
- **General** - Updated a lot of packages, removed old libraries, and migrated to newer versions of things
- **Homepage** - Title and text changes, swapped pictures and project button locations, size edits
- **Blogs** - Completely removed because it's mostly slop
- **Pictures** - Updated text
- **Projects** - Overhaul, changed projects display layout and moved currentprojects display to the top
- New navbar layout
- MANY fonts and all sorts of colors have been changed. Website now attempts to adhere to a color theme. In other words, stuff looks even better now.

### 2.4 (8/26/2025) - QNA Fix
- Fixed an issue regarding data loading animation and resizing the window causing gaps
- Adjusted project page (cases and current project) sizes, colors, borders, minor details, etc

### 2.3 (12/30/2024) - Patch 3
- **Pictures page** - Added pictures page and link to it at the footer and at the homepage
- Added 3 pictures to pictures page, planning on adding more eventually
- Happy early New Years

### 2.2 (11/29/2024) - Patch 2
- **Blogs Page Fix** - Fixed an error with the fonts being wonky on mobile
- Fixed a font not loading
- **Cleanup** - Deleted more unnecessary fonts, moved some stranded fonts over to main file
- Mobile issues - Fixed some minor mobile issues
- **QNA** - Quality of life for suggestions text (prevented access before data load and err messages if your message fails to go through filter)

### 2.1 (11/28/2024) - Patch 1
- **Blogs Page Fix** - Fixed an error with the images not loading
- **Cleanup** - Assets page cleanup for unnecessary assets, fonts deletion for unused fonts, changed a font name to match file name
- **About Me Page** - Minor change in hobbies text
- Made minor patches smaller in size compared to the major change

## 2.0 (11/28/2024) - Big Revamp
- **General Changes** - Restructured how README updates look (as you can see), reduced a lot of bloated and unnecessary code or straight up deleted it, attempted to use less HTML elements, more professional looking, stole a graphic designer to help me, redid a lot (read for more)
- **Changes to Page Setup** - Increased height of footer and navigation bar, changed some colors around to be less weird and out of place, new hover animations for navigation bar, separated a bunch of pages and changed a few minor things, percentage measurements for nav and footer instead of static measurements, nav bar is centered now rather than on the sides of the bar
- **Major changes made to Homepage** - Reduced random splash subtitle text to "Programmer", moved Current Project display to Projects page, added three image button links, changed background, utilized text-shadows for text-background contrast, removed big blocky black opacities
- **Deletion of Homepage drop down tabs** - Gone as they were redundant to the About Me.
- **Major changes to About Me Page** - Horizontal information rather than vertical, removed all elements of QNA from this page to separate it into another page, much easier on the eyes, added background, added special title, rewrote about me texts, added and redefined hobbies and goals, complete do-over because the old one looked horrifying to read
- **Updates/Blogs Changes** - Split original Blogs page into two pages, Updates and Blogs as I considered my previous "Blogs" to actually just be updates
- **Updates Page** - Made much easier to read, sped up fade-in animations for the sake of it, restructured updates so the date is on the side instead of the top, added background image
- **Blogs Page** - Added two articles and created link boxes for them, added background and title, wrote two small minimal blog posts (mostly low-effort)
- **QNA Page** - Separated from the About Me Page, now is a better system, also backend change to send the date of the suggestion, mostly the same otherwise except a bunch of design changes, added background, better fonts
- **Projects Page** - Used grid system for projects and deleted a lot of unnecessary info, made entire box the link for the project, added background and new title, added current project info below on this page
- **Mobile support** - Changed mobile support stuff and used rem and em measurements a lot more, still have a lot to change here

## 1.1 (4.23.2023) - Lots of UI Changes and Dynamic Data
- Mostly dynamic data
- Changed most colors and used more images
- Removed a page
- More accessible (admin page)
- QOL, minor inconveniences
- Even more animations
- Better UX and UI ("Better" UI is subjective)
- New and more useful README
- More organized
- All css positioning changed from absolute to relative
- Footer with github, replit
- Much better data loading animations (Removed previous one and added four, see src/lib/DataLoading.svelte)

## 1.0 (6.9.2022) - Initial Website
- Static website created
- Pages
- Setup, Initial Commit
- Information
- Backend for simply storing suggestions
- Vercel deployment
- Added dynamic updating to blogs, etc
- Added a page or two
- Used more animations
- Project Data
- Fixed multiple backend issues including the hosting of backend
- Rearranged a few components
- Fixed Vercel realoading 404 issue