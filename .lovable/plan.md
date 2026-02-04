
# Portfolio Update Plan

## Summary
This plan covers multiple updates across Hero, About, and Projects sections including a new profile picture, stat adjustments, styling consistency, and adding GitHub links to projects.

---

## Changes Overview

### 1. Update Profile Picture
**File:** `src/assets/aryan-profile.jpg`
- Download new image from `https://i.postimg.cc/sDF0m4pp/aryan-blazer.jpg`
- Replace existing profile picture with the blazer photo

### 2. Hero Section Updates
**File:** `src/components/Hero.tsx`
- Change "10+" projects badge to "2+" (line 228)
- This matches the actual number of featured projects shown

### 3. About Section Updates
**File:** `src/components/About.tsx`

**Name Color Consistency:**
- Currently in Hero: "Aryan" is regular text, "Sudhanshu" uses `text-gradient` class
- The About section heading says "About Me" - there's no name display
- Will make the section title styling consistent with the rest of the site

**Font Size Adjustments:**
- Increase body text font size from `text-lg` to `text-xl` (line 33)
- Make other paragraph text larger from default to `text-lg` (lines 39, 45)
- This creates more even, readable text throughout

**Stats Updates:**
- Change "10+" Projects to "2+" (line 98)
- Change "500+" Problems to "100+" (line 109)

### 4. Projects Section Updates
**File:** `src/components/Projects.tsx`

**Add GitHub Links:**
- Add `githubUrl` field to each project in the data array
- NoteSphere: `https://github.com/iaryan74/NoteSphere`
- Marriage Patterns Analysis (Data Visualization): `https://github.com/iaryan74/Election-Data-Analysis`
- Convert "View Code" buttons from `<button>` to `<a>` tags linking to GitHub repos

---

## Technical Details

### Hero.tsx Changes
```text
Line 228: Change "10+" to "2+"
```

### About.tsx Changes
```text
Line 33: text-lg → text-xl
Line 39: text-foreground/70 → text-lg text-foreground/70
Line 45: text-foreground/70 → text-lg text-foreground/70
Line 98: "10+" → "2+"
Line 109: "500+" → "100+"
```

### Projects.tsx Changes
```text
Lines 3-22: Add githubUrl property to each project object
Lines 71-75: Convert button to anchor tag with href to project.githubUrl
```

---

## Files to Modify
1. `src/assets/aryan-profile.jpg` - Replace with new image
2. `src/components/Hero.tsx` - Update projects count
3. `src/components/About.tsx` - Font sizes and stats
4. `src/components/Projects.tsx` - Add GitHub links

---

## Expected Result
After implementation:
- New professional blazer photo in hero section
- Projects count shows "2+" in both hero badge and about stats
- Problems count shows "100+" in about section
- Larger, more consistent font sizes in About section
- Clickable "View Code" buttons linking to actual GitHub repositories
