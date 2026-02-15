# Partner Logos Setup

## Where to Upload Logos

Place your partner logo files in: `public/partners/`

## Required Files

Upload PNG or SVG files with these exact filenames:

| File | Brand | Alt Text |
|------|-------|----------|
| `cisco.png` | Cisco | Cisco Logo |
| `microsoft.png` | Microsoft | Microsoft Logo |
| `hp.png` | HP | HP Logo |
| `dell.png` | Dell | Dell Logo |
| `vmware.png` | VMware | VMware Logo |
| `oracle.png` | Oracle | Oracle Logo |

## Logo Specifications

- **Format:** PNG (recommended) or SVG
- **Background:** Transparent (preferred) or white
- **Size:** Recommended 120x60px minimum
- **Aspect Ratio:** Wide (2:1 ratio works well)
- **Colors:** Original brand colors maintained

## Upload Instructions

### Option 1: Via File Manager
1. Navigate to: `/home/jr/.openclaw/workspace/projects/ictservices/public/partners/`
2. Upload each logo file with the exact filenames above

### Option 2: Via Command Line
```bash
cd /home/jr/.openclaw/workspace/projects/ictservices/public/partners/

# Upload your logo files
cp /path/to/cisco-logo.png cisco.png
cp /path/to/microsoft-logo.png microsoft.png
cp /path/to/hp-logo.png hp.png
cp /path/to/dell-logo.png dell.png
cp /path/to/vmware-logo.png vmware.png
cp /path/to/oracle-logo.png oracle.png
```

## After Uploading

1. Run build to verify:
```bash
cd /home/jr/.openclaw/workspace/projects/ictservices
npm run build
```

2. Commit changes:
```bash
git add public/partners/
git commit -m "Add: Partner logo images"
git push origin main
git push origin main:master
```

3. Vercel will auto-deploy

## Missing Logos

If any logo file is missing, the component will:
- Fall back to colored placeholder with brand name
- Still display the partner name text
- Show "Image not found" if file doesn't exist

## Current Status

❌ No logos uploaded yet
⚠️ Component configured to use Image components
✅ Folder structure created: `public/partners/`
✅ Ready for logo uploads
